# 公开资源来源

- `portrait-2026.webp`：由用户提供的 `证件照.png` 缩放并转换为 WebP，保留本人照片内容；作为当前主页头像。原始 PNG 未修改。
- `个人简历-陈天乐.pdf`：用户上传的 2026 年 9 月版简历原件；当前下载链接使用此文件。文件含手机号，网页正文不展示手机号，但下载者仍可读取原件。
- `portrait.webp`（旧版，不再由当前页面引用）：陈天乐提供的本人照片，来自用户本地毕业照；不使用参考学者的照片。
- `Tianle-Chen-CV.pdf`（旧版，不再由当前页面引用）：由用户提供的简历和项目材料整理的公开版简历；省略手机号、证件号码等敏感信息。
- `photonic-embedding.webp`：Yuyao Huang, Wencan Liu, Run Sun, Peng Meng Chan, Yutong He, Tianle Chen, Sigang Yang, Tingzhao Fu & Hongwei Chen, *Photonic embedding learning with high energy efficiency exceeding 100 GOPS/W/mm²*, Research Square (2025), Figure 1(b)。
  - 来源：https://doi.org/10.21203/rs.3.rs-5901611/v1
  - 原文许可：[Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
  - 修改：从原文图 1 中裁剪结构示意图区域，去除相邻分图边缘，缩放并转换为 WebP；不改变结构示意内容或研究结果。
  - 配图说明和来源链接同时显示在主页的论文条目中。
- `favicon.svg`：为本网站制作的简易姓名图标。

主页代码为原创实现，仅参考公开主页的信息组织方式；没有复制他人的代码、照片或论文资源。

## 科研项目配图（用户提供）

- `wafer-parallel-mapping.webp`：用户提供的混合并行策略与晶圆级拓扑映射示意图；用于晶圆级大模型训练项目。
- `wafer-fault-tolerant-routing.webp`：用户提供的 2D-Torus 故障链路与容错路由示意图；用于同一晶圆级项目。
- `cnn-mac-pe-architectures.webp`：用户提供的 MAC 与加法树 PE 结构对比图；用于 CNN 乘加法器项目。
- `dac-reconfigurable-layout.webp`：用户提供的可重构 DAC 芯片版图与主要模块分布图；位于 DAC 项目的“架构与设计目标”说明下。保留原图尺寸、布局、文字和标注，不据此声称完成流片或达到实测性能。
- 处理：由用户在对话中提供的 PNG 原样转换为无损 WebP，保留尺寸、文字和图中标注，不裁剪、不变形、不改算法名称。
- 原始论文出处与权属未另行提供；此处不推断为用户原创，也不自动套用上述预印本配图的 CC BY 4.0 许可。公开前如需注明论文来源，请补充真实出处并遵循原图许可。

## 韶音实习配图（用户提供）

- `shokz-ppg-linear-array.webp`：直线型 PPG 阵列、IMU 电路及 PCB 布局图；放在传感硬件设计说明下。
- `shokz-ppg-asymmetric-array.webp`：非对称型 PPG 阵列原理图及 PCB 布局图；放在同一传感硬件说明下。
- `shokz-ppg-signal-analysis.webp`：红外通道 PPG 波形、滤波、小波分析与质量评分示例；放在信号质量评估说明下。
- `shokz-ppg-classifier-training.webp`：分类模型的训练与验证损失、准确率曲线；放在同一信号质量评估说明下。
- 处理：用户在对话中提供的 PNG 无损转换为 WebP，保留原尺寸、图中数据与文字；不裁剪、不变形、不推断新的准确率或性能结论。
- 未另行提供权属、开源许可或公司资料公开授权；不推断为用户原创，也不套用论文的 CC BY 许可。公开前请确认这些实习资料可以对外展示。

## 开源字体

- `fonts/profile-sans-sc.woff2`：基于 Noto Sans SC（思源黑体）制作的 Web 字体子集，衍生字体名为 Profile Sans SC。
- `fonts/profile-serif-sc.woff2`：基于 Noto Serif SC（思源宋体）制作的 Web 字体子集，衍生字体名为 Profile Serif SC。
- 修改：保留 400–600 的真实可变字重，选择常用 GB2312 汉字、西文、标点和页面已有字符，转换为 WOFF2 并更名。不更改字形设计。
- 许可：SIL Open Font License 1.1；完整许可分别保存在 `fonts/profile-sans-sc-OFL.txt` 和 `fonts/profile-serif-sc-OFL.txt` 中。
- 原项目：[Noto Sans SC](https://github.com/google/fonts/tree/main/ofl/notosanssc) / [Noto Serif SC](https://github.com/google/fonts/tree/main/ofl/notoserifsc)。
- 字体随网站本地提供，不加载第三方字体服务。未覆盖字符由 CSS 字体栈中的系统字体补足。
