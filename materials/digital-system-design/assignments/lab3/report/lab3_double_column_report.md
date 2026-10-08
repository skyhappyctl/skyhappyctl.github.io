# 基于 BRAM 的稀疏矩阵乘法映射与 Bitmap 压缩优化

作者：请填写姓名、班级、学号

## 摘要

Lab-3 要求将矩阵数据预存到 FPGA 片上 BRAM 中，并通过硬件控制完成矩阵到计算阵列的 mapping。本文针对 VGG-16 第三层卷积展开后的矩阵乘法，设计并实现了一种基于稀疏外积数据流的 BRAM 加速器。基础版本将 activation_col 按输出列压缩，将权重矩阵按 K 维打包为 16-lane 权重块；进一步的 bitmap 版本用每列 576 bit 的非零掩码替代大规模 activation 索引表，显著降低 BRAM 占用。实验表明，原始外积版本在前 16 列仿真中输出 2048 点且 mismatch 为 0，全量估算周期为 4,379,508；低 BRAM bitmap 版本综合后 LUT 为 3028、FF 为 4829、BRAM 为 121.5，较原始版本的 430.5 个 BRAM 明显下降。为缓解串行 bitmap 版本周期较长的问题，本文还实现并验证了 16-lane 并行 bitmap 版本，全量行为仿真覆盖 131,072 个输出点，mismatch 为 0，周期数为 6,357,983。

关键词：BRAM；稀疏矩阵乘法；外积数据流；bitmap 压缩；FPGA 加速器

## I. 引言

卷积神经网络中的卷积层通常可以通过 img2col 展开为矩阵乘法。本实验数据来自 VGG-16 第三层卷积，权重矩阵维度为 128×576，activation_col 矩阵维度为 576×1024，输出矩阵维度为 128×1024。若直接按照稠密矩阵乘法遍历，则需要执行大量与零值相关的无效乘加。

对原始数据统计可知，weight 中非零元素为 20,644 个，密度为 28.00%；activation_col 中非零元素为 262,575 个，密度为 44.52%。这种稀疏性说明，本实验不适合直接保存和遍历完整稠密矩阵，而应采用压缩存储和稀疏计算。

课程要求的关键点是使用 Xilinx FPGA 的 BRAM 预存矩阵数据，并由硬件控制器完成数据读取、映射和计算。因此，本文重点设计可综合的 BRAM 存储结构、稀疏数据格式和有限状态机控制流程，而不是在 testbench 中直接完成矩阵乘法。

## II. 设计方法

本文采用 output-column stationary 的稀疏外积数据流。硬件每次处理一个输出列，先清零 128 个输出通道累加器，然后遍历该列所有非零 activation。对于每个非零 activation，控制器根据其 K 维索引读取对应的权重块，并更新多个输出通道的累加值。

权重矩阵按 K 维重排。对于每个 K，收集所有非零输出通道权重，并按 16 个 lane 打包为两个 128-bit BRAM word：一个保存 16 个 8-bit 权重值，另一个保存 16 个 8-bit 输出通道编号。无效 lane 使用 0xff 作为哨兵。

原始外积版本为了减少运行时指针查询，为每个非零 activation 预存 a_wblk_start 和 a_wblk_end 两张大表。该方式周期较短，但两张表的深度均为 activation 非零元素数，导致 BRAM 占用很高。bitmap 优化版本删除这两张预展开表，并进一步用 a_mask32.mem 表示每列 activation 的非零位置，从而用少量 bitmap 扫描换取更低 BRAM 使用。

### A. BRAM 数据组织

| 数据文件 | 含义 | 位宽 | 深度 |
| --- | --- | --- | --- |
| a_values.mem | 非零 activation 值 | 8 | 262,575 |
| a_ptr.mem | 每个输出列的 activation 起止指针 | 19 | 1025 |
| a_mask32.mem | 每列 activation 的 32-bit bitmap | 32 | 18,432 |
| wk_block_ptr16.mem | 每个 K 对应权重块指针 | 19 | 577 |
| wk_block_values16.mem | 16-lane 打包权重值 | 128 | 1,552 |
| wk_block_rows16.mem | 16-lane 打包输出通道编号 | 128 | 1,552 |

### B. 控制流程

控制器主要状态包括清零累加器、读取列指针、扫描 activation、读取权重块、更新累加器和输出结果。在 bitmap 版本中，控制器按列读取 18 个 32-bit mask word，对每一位判断 activation 是否非零。若该位为 1，则顺序读取 a_values 中对应的 activation 值，并根据 K 查询 wk_block_ptr16，之后读取权重值和输出通道编号。串行 bitmap 版本每个权重块内部逐 lane 更新，资源较低但周期较长；并行 bitmap 版本在 S_UPDATE 状态同时展开 16 个 lane，因此显著缩短计算周期。

## III. 实验设置与结果

实验平台为 Vivado 2019.2，目标器件为 xc7a200tfbg676-2，时钟约束为 10 ns。行为仿真通过 testbench 将 .mem 文件写入 DUT 内部 BRAM，然后拉高 start 信号启动硬件计算。输出结果与 output_col.mem 逐点比较。为避免 Vivado 2019.2 对中文路径解析不稳定，仿真和综合时同时维护了 C:/Users/skyhappy/Desktop/lab3 这一纯英文路径副本。

| 版本 | 验证规模 | 输出点数 | Mismatch | 周期数 |
| --- | --- | --- | --- | --- |
| 原始外积 | 前 16 列 | 2,048 | 0 | 58,431 |
| 串行 bitmap | 全量 1024 列 | 131,072 | 0 | 17,348,753 |
| 并行 bitmap | 全量 1024 列 | 131,072 | 0 | 6,357,983 |

| 版本 | LUT | FF | BRAM | DSP | 说明 |
| --- | --- | --- | --- | --- | --- |
| 原始外积 | 91,869 | 13,653 | 430.5 | 未计入 | BRAM 占用高 |
| 串行 bitmap | 3,028 | 4,829 | 121.5 | 1 | 已完成综合 |
| 并行 bitmap | 待综合报告更新 | 待综合报告更新 | 约同 bitmap 存储规模 | 待更新 | 已完成全量仿真 |

课程指标定义为 Performance = (Fmax / cycles) / (FF + 0.25×LUT + 100×BRAM)。原始外积版本按 100 MHz、4,379,508 cycles、LUT=91,869、FF=13,653、BRAM=430.5 计算，指标约为 0.000287。已完成综合的低 BRAM 串行 bitmap 版本按 100 MHz、17,348,753 cycles、LUT=3,028、FF=4,829、BRAM=121.5 计算，指标约为 0.000325。虽然串行 bitmap 版本周期增加，但资源下降显著；并行 bitmap 版本则在保持 bitmap 存储结构的基础上将全量周期降低到 6,357,983，后续完成综合后可用于替换最终评分指标。

## IV. 分析与讨论

原始外积版本的优势是运行时控制简单：每个 activation 可以直接读取预计算好的权重块起止地址，因此不需要扫描 bitmap，也不需要额外查询 K 维指针。但是，该方式把 a_wblk_start 和 a_wblk_end 都展开到 activation 非零元素粒度，导致 BRAM 数量达到 430.5，在目标器件上占用 86.10%。

bitmap 版本把 activation 的 K 维位置改为按列 bitmask 表示。对于 576 个 K 位置，每列只需要 18 个 32-bit word，1024 列合计 18,432 个 word，远小于逐非零元素保存 10-bit index 的方式。因此，综合后的 BRAM 降至 121.5，LUT 也从 91,869 降至 3,028。

串行 bitmap 版本周期长的原因有两点：第一，每列需要扫描 576 个 bit；第二，每个权重块内部 16 个 lane 被串行更新。并行 bitmap 版本保留 bitmap 压缩，同时在更新状态并行展开 16 个 lane，因此全量周期从 17,348,753 降至 6,357,983，约减少 63.35%。

从设计取舍看，若评分更看重 BRAM 和综合稳定性，串行 bitmap 版本更稳；若评分更看重周期和吞吐率，则应继续完成并行 bitmap 版本综合，并根据综合报告更新 LUT、FF、BRAM 和最终指标。

## V. 结论

本文完成了一个基于 BRAM 的稀疏矩阵乘法映射加速器，并围绕 BRAM 占用和计算周期进行了两阶段优化。原始外积方案能够正确完成矩阵计算，但 BRAM 占用过高；bitmap 压缩方案显著降低片上存储资源，并通过并行 lane 更新缓解周期增加问题。行为仿真结果表明，最终并行 bitmap 版本在全量 128×1024 输出上 mismatch 为 0，周期数为 6,357,983。该实验说明，针对稀疏矩阵乘法，数据格式和 BRAM 映射方式对 FPGA 加速器的资源与性能具有决定性影响。

## 参考文献

[1] 数字系统设计课程组. Lab-3 阵列+存储器系统设计实验指南, 2026.

[2] K. Simonyan and A. Zisserman, Very Deep Convolutional Networks for Large-Scale Image Recognition, arXiv:1409.1556, 2014.

[3] Y.-H. Chen, T. Krishna, J. S. Emer, and V. Sze, Eyeriss: An Energy-Efficient Reconfigurable Accelerator for Deep Convolutional Neural Networks, IEEE JSSC, 2017.

[4] A. Parashar et al., SCNN: An Accelerator for Compressed-sparse Convolutional Neural Networks, ISCA, 2017.

[5] S. Han et al., EIE: Efficient Inference Engine on Compressed Deep Neural Network, ISCA, 2016.

[6] AMD Xilinx, Block Memory Generator v8.4 Product Guide PG058, 2021.