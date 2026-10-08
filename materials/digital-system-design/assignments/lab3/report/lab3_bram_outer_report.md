# 基于 BRAM 的稀疏外积矩阵乘法加速器设计

作者：请填写姓名、班级、学号

## 摘要

矩阵乘法是卷积神经网络推理中的核心计算。Lab-3 要求将矩阵数据预存到 FPGA 的 BRAM 中，并通过硬件控制完成矩阵到计算阵列的 mapping。本文针对 VGG-16 第三层卷积数据，设计了一种基于 BRAM 的 16-lane 稀疏外积矩阵乘法加速器。设计首先将 activation_col 按输出列压缩，将权重矩阵按 K 维重排并打包为 16-lane 权重块；随后由硬件 FSM 读取 BRAM 中的非零激活值、指针和权重块，对 128 个输出通道累加生成输出列。行为仿真中，前 16 列共 2048 个输出点全部与参考结果一致，mismatch 为 0，计算周期为 58431。软件全量验证覆盖 131,072 个输出点，mismatch 为 0；周期模型估算全量 128x1024 输出约需 4,379,508 个周期，相比单 MAC 稠密遍历的 75,497,472 个周期约提升 17.24 倍。

关键词 —— BRAM，稀疏矩阵乘法，卷积神经网络，外积数据流，FPGA 加速器。

## Ⅰ. 引言

深度神经网络中的卷积层通常可以通过 img2col 展开转化为矩阵乘法。对于本实验给定的 VGG-16 第三层卷积数据，权重矩阵维度为 128x576，activation_col 矩阵维度为 576x1024，输出矩阵维度为 128x1024。若直接按照稠密矩阵乘法遍历，则需要处理大量零值乘法。统计结果显示，权重矩阵非零元素为 20,644 个，密度为 28.00%；activation_col 非零元素为 262,575 个，密度为 44.52%。

Lab-2 中的数据搬运和 mapping 逻辑主要依赖 testbench 中的软件循环完成，而 Lab-3 的目标是把矩阵预存到 FPGA 片上高密度存储器 BRAM 中，再由硬件控制器完成数据读取、映射和计算。因此，本实验的重点并不是在 testbench 中直接计算矩阵乘法，而是构造能够综合的存储和控制结构，让硬件从 BRAM 中读取压缩矩阵并完成输出。

本文采用稀疏外积数据流。与逐输出点进行索引交集匹配的方法不同，外积方法以一个非零 activation 为中心，读取其对应 K 维上的所有非零权重块，并一次更新多个输出通道的累加器。该方法更适合本数据集中输出通道数较多、activation 可被多个输出通道复用的计算模式。

## Ⅱ. 稀疏矩阵乘法加速方案

### A. 数据压缩与 BRAM 部署

本设计使用 Python 脚本 prepare_sparse_data.py 对原始矩阵进行预处理，生成 BRAM 初始化数据。activation_col 按输出列压缩，保存非零值和每列起止指针；权重矩阵按 K 维重排，对每个 K 收集所有非零输出通道权重，并按 16 个 lane 打包。每个权重块由 16 个 8-bit 权重值和 16 个 8-bit 输出通道编号组成，无效 lane 用 0xff 标记。

| BRAM 数据 | 含义 | 位宽 | 深度 |
|---|---|---:|---:|
| a_values | 非零 activation 数值 | 8 | 262,575 |
| a_ptr | 每个输出列的起止指针 | 19 | 1025 |
| a_wblk_start/end | 每个 activation 对应权重块范围 | 19 | 262,575 |
| wk_block_values16 | 16-lane 打包权重值 | 128 | 1,552 |
| wk_block_rows16 | 16-lane 打包输出通道编号 | 128 | 1,552 |

RTL 中 simple_dual_port_bram 模块使用 Verilog 数组描述同步读写存储，并添加 (* ram_style = "block" *) 属性，指导 Vivado 将存储推断为 FPGA Block RAM。仿真时 testbench 不是直接参与矩阵计算，而是通过 load_we、load_mem、load_addr 和 load_data 端口将上述压缩数据写入硬件模块内部 BRAM；写入完成后，testbench 拉高 start 信号，后续计算完全由 sparse_outer_accel 内部 FSM 控制。

### B. 16-lane 外积映射控制器

主模块 sparse_outer_accel 以输出列为外层循环。每处理一列，控制器先清零 128 个输出通道累加寄存器，然后遍历该列所有非零 activation。对于每个 activation，控制器读取其数值以及对应的权重块起止地址，再顺序读取每个权重块。在 S_UPDATE 状态中，16 个 lane 被并行展开：若 lane 对应的输出通道编号不是 0xff，则执行 accum[row] += activation * weight。完成该列所有 activation 后，控制器顺序输出 128 个累加结果。

该数据流属于 output-column stationary 的外积映射。其优势是 activation 读取结果能够被多个输出通道复用，并且权重块连续存储，BRAM 读地址生成较简单。代价是需要维护 128 个累加寄存器，并且每个输出列开始时需要清零累加器。

## Ⅲ. 实验测试与结果

行为仿真使用 tb_sparse_outer_accel.sv。testbench 首先将 a_values、a_ptr、a_wblk_start、a_wblk_end、wk_block_values16 和 wk_block_rows16 写入 BRAM，然后读取 output_col.mem 作为参考输出。默认仿真验证前 16 个输出列，因此输出数量为 128x16=2048。

| 测试项 | 结果 |
|---|---:|
| 仿真输出点数 | 2048 |
| Mismatch 数量 | 0 |
| 计算周期 | 58431 |
| 输出通道数 | 128 |
| 验证列数 | 16 |
| Lane 数 | 16 |

仿真日志中出现 LAB3_OUTER_SIM_PASS，说明硬件模块输出与参考结果完全一致。为了避免 Vivado 2019.2 对中文路径解析不稳定，本实验将 generated 数据复制到 C:/Users/skyhappy/lab3_generated，并在 testbench 中使用纯英文路径读取 sparse_config.svh 和 .mem 文件。

除行为仿真外，run_experiments.py 还进行了全量软件验证，覆盖全部 128x1024 个输出点，mismatch 为 0。周期模型估算 16-lane 外积方案全量计算约需 4,379,508 个周期，平均每个输出 33.41 个周期。

| 方案 | 参数 | 估算周期 | 相对稠密单 MAC | 平均周期/输出 |
|---|---|---:|---:|---:|
| 稠密 baseline | 1 MAC | 75,497,472 | 1.00x | 576.00 |
| 索引交集 | BLOCK_N=16 | 128,551,494 | 0.59x | 980.77 |
| 外积映射 | LANES=16 | 4,379,508 | 17.24x | 33.41 |

## Ⅳ. 方案分析

### A. 与索引交集方案的比较

索引交集方案为每一个输出元素独立匹配权重行与 activation 列的非零索引，适合输出点之间复用较弱的场景。但在本实验数据中，同一个 activation 会参与多个输出通道的计算。若逐输出点做交集匹配，同一个 activation 列会被多次扫描，控制开销较高。外积方案改为一次读取 activation，然后访问对应 K 上的权重块并更新多个输出通道，因此减少了重复扫描。

### B. BRAM 带宽与累加器开销

外积方案的主要瓶颈是权重块读取带宽和累加器写入带宽。当前设计每个周期处理一个 16-lane 权重块，权重值和通道编号分别由 128-bit BRAM word 提供。权重总共被打包为 1,552 个块，平均每个权重块有效 lane 数为 13.30。这说明 16-lane 粒度能够较好地利用权重块内部并行度。

### C. 可进一步优化的方向

当前实现为了便于验证，采用较直接的 FSM 控制方式，BRAM 同步读每次包含显式等待状态。后续可以从三个方向优化：第一，对 activation 读取和权重块读取进行流水化，隐藏 BRAM 读延迟；第二，将 128 个输出通道累加器分 bank，支持更高并行更新；第三，根据综合后的时序结果调整 lane 数，在吞吐率、BRAM 数量和时钟频率之间寻找折中。

## Ⅴ. 结论

本文完成了一个基于 BRAM 的稀疏外积矩阵乘法加速器。设计将原始矩阵转换为适合硬件读取的压缩格式，利用 BRAM 存储非零 activation、列指针和 16-lane 权重块，并通过 sparse_outer_accel 控制器完成硬件 mapping 与累加计算。行为仿真验证前 16 列输出全部正确，软件全量验证也表明压缩数据与参考输出一致。实验结果说明，相比逐输出点索引交集，外积式 mapping 更能利用 activation 复用和权重块连续访问，是本 Lab-3 数据集上更合适的实现方式。

## 参考文献

[1] 数字系统设计课程组, Lab-3 阵列+存储器系统设计实验指南, 2026.

[2] K. Simonyan and A. Zisserman, Very Deep Convolutional Networks for Large-Scale Image Recognition, arXiv:1409.1556, 2014.

[3] Y.-H. Chen, T. Krishna, J. S. Emer, and V. Sze, Eyeriss: An Energy-Efficient Reconfigurable Accelerator for Deep Convolutional Neural Networks, IEEE JSSC, 2017.

[4] A. Parashar et al., SCNN: An Accelerator for Compressed-sparse Convolutional Neural Networks, ISCA, 2017.

[5] S. Han et al., EIE: Efficient Inference Engine on Compressed Deep Neural Network, ISCA, 2016.

[6] AMD Xilinx, Block Memory Generator v8.4 Product Guide (PG058), 2021.