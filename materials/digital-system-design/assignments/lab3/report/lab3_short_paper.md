# 基于 BRAM 的稀疏卷积矩阵乘映射加速器设计

作者：请填写姓名、班级、学号

## Abstract

卷积神经网络中的卷积层可以通过 img2col 转换为矩阵乘法，但在 FPGA 上直接保存和遍历稠密矩阵会引入大量无效访存和乘加。本文针对 Lab-3 提供的 VGG-16 第三层卷积数据，设计了一种基于 BRAM 预存储的稀疏矩阵乘映射加速器。该设计将 activation_col 按输出列压缩，将权重按输入 K 维组织成 16-lane 外积块，并通过硬件控制器从 BRAM 中顺序读取非零激活及对应权重块，对 128 个输出通道累加生成输出列。软件参考实验验证了 131072 个输出点全部与 output_col.txt 一致；周期估算显示 16-lane 外积映射约需 4,379,508 个计算周期，相比单 MAC 稠密遍历的 75,497,472 周期约提升 17.24 倍。

**Keywords:** Sparse Matrix Multiplication; BRAM; FPGA; CNN Accelerator; Data Mapping

## 1. Introduction

CNN 推理中的卷积层通常占据主要计算量。课程前序 Lab 中，数据搬运、mapping 和控制逻辑主要由 testbench 以软件循环完成；而 Lab-3 要求将矩阵预存到 Xilinx FPGA 的 BRAM 中，并由硬件控制完成矩阵到阵列或计算单元的映射。

## 2. Method

设计采用 16-lane 稀疏外积数据流。activation_col 按输出列压缩，权重按 K 维打包为权重值和输出通道编号两个 128-bit BRAM image。

## 3. Experiments

软件验证覆盖 131,072 个输出元素，mismatch=0。外积方案估算周期为 4,379,508，相对稠密单 MAC baseline 加速 17.24x。

| BLOCK_N | Estimated cycles | Speedup vs dense | Block pairs | Useful MACs | Avg cycles/output |
|---:|---:|---:|---:|---:|---:|
| 4 | 159296555 | 0.474 | 12998423 | 9802133 | 1215.34 |
| 8 | 138600244 | 0.545 | 6650143 | 9802133 | 1057.44 |
| 16 | 128551494 | 0.587 | 3358851 | 9802133 | 980.77 |
| 32 | 123591300 | 0.611 | 1685176 | 9802133 | 942.93 |

| Design | Lanes | Estimated cycles | Speedup vs dense | Activation nnz | Weight block visits | Avg cycles/output |
|---|---:|---:|---:|---:|---:|---:|
| Outer product | 16 | 4379508 | 17.239 | 262575 | 732718 | 33.41 |


## 4. Conclusion

外积式 mapping 能够复用 activation 读取并并行更新多个输出通道，是本数据集上比索引交集更有效的 BRAM 数据流。最终提交前需要用 Vivado 综合报告替换资源和 Fmax 占位值。