/*
 * 网站内容修改入口（UTF-8）。zh = 中文，en = 英文。
 * 根据 assets/个人简历-陈天乐.pdf（2026 年 9 月版）更新。
 * 此文件维护主页文字；个人简历 PDF 独立维护，resume.html 仅兼容跳转。
 * 网页正文不展示手机号；原版 PDF 仍包含其原有信息。
 * 页面保持一份简洁个人主页，不提供学术 / 求职展示视角。
 * 详细说明见「网站修改指南.md」。
 */
window.PROFILE = {
  // 01 基本信息：姓名、邮箱、所属机构、头像与简历文件
  name: {
    "zh": "陈天乐",
    "en": "Tianle Chen"
  },
  email: "ctl22@mails.tsinghua.edu.cn",
  affiliation: {
    "zh": "清华大学 · 集成电路学院",
    "en": "Tsinghua University · School of Integrated Circuits"
  },
  portrait: "assets/portrait-2026.webp",
  resume: {
    "pdf": "assets/个人简历-陈天乐.pdf",
    "page": "resume.html"
  },
  links: [],

  // 02 首页简介：中英文介绍与研究方向
  intro: {
    "zh": "本科毕业于清华大学电子工程系，现于清华大学集成电路学院尹首一—胡杨课题组攻读集成电路工程硕士。我的研究聚焦晶圆级芯片大模型训推系统与AI Infra，围绕晶圆级芯片系统开展混合并行映射、自动映射算法、片上容错路由与仿真器开发。",
    "en": "I'm Tianle Chen, a master's student in Electronic Information (Integrated Circuit Engineering) at Tsinghua University's School of Integrated Circuits, in the group of Shouyi Yin and Yang Hu. I received my undergraduate degree from Tsinghua's Department of Electronic Engineering. My research focuses on large-model training systems and AI infrastructure, including hybrid-parallel mapping, automated mapping algorithms, on-chip fault-tolerant routing, and simulation for wafer-scale chip systems."
  },

  // 03 研究兴趣与教育：两段教育经历、GPA 和课程
  about: {
    "zh": "我具备深度学习、数字电路与系统架构的交叉背景，关注大模型训练与推理效率、算子优化、通信开销和系统能效，希望通过软硬件协同设计改进大模型训推系统。",
    "en": "My background spans deep learning, digital circuits, and system architecture. I am interested in efficient large-model training and inference, operator optimization, communication overhead, and system energy efficiency through hardware–software co-design."
  },
  education: {
    "entries": [
      {
        "title": {
          "zh": "清华大学 · 集成电路学院",
          "en": "Tsinghua University · School of Integrated Circuits"
        },
        "date": {
          "zh": "2026.09 – 2028.09",
          "en": "Sep 2026 – Sep 2028"
        },
        "description": {
          "zh": "集成电路工程硕士 · 尹首一—胡杨课题组",
          "en": "Master’s in Electronic Information (Integrated Circuit Engineering) · Shouyi Yin–Yang Hu group"
        }
      },
      {
        "title": {
          "zh": "清华大学 · 电子工程系",
          "en": "Tsinghua University · Department of Electronic Engineering"
        },
        "date": {
          "zh": "2022.07 – 2026.07",
          "en": "Jul 2022 – Jul 2026"
        },
        "description": {
          "zh": "电子信息科学与技术 · 本科",
          "en": "Bachelor’s in Electronic Information Science and Technology"
        }
      }
    ],
    "gpa": {
      "zh": "本科 GPA：3.73/4.00（28%）",
      "en": "Undergraduate GPA: 3.73/4.00 (28%)"
    },
    "courses": [
      {
        "zh": "集成电路设计全流程实践",
        "en": "End-to-End Integrated Circuit Design Practice"
      },
      {
        "zh": "数字逻辑与处理器基础",
        "en": "Digital Logic and Processor Fundamentals"
      },
      {
        "zh": "视听系统信息导论",
        "en": "Introduction to Audio-Visual Information Systems"
      },
      {
        "zh": "数字系统设计",
        "en": "Digital System Design"
      },
      {
        "zh": "媒体与认知",
        "en": "Media and Cognition"
      },
      {
        "zh": "操作系统",
        "en": "Operating Systems"
      },
      {
        "zh": "数字图像处理",
        "en": "Digital Image Processing"
      },
      {
        "zh": "数字信号处理",
        "en": "Digital Signal Processing"
      },
      {
        "zh": "集成电路设计工程",
        "en": "Integrated Circuit Design Engineering"
      },
      {
        "zh": "数字大规模集成电路",
        "en": "Digital VLSI"
      },
      {
        "zh": "人工智能赋能的数字集成电路设计",
        "en": "AI-Empowered Digital Integrated Circuit Design"
      },
      {
        "zh": "IC设计与方法",
        "en": "IC Design and Method"
      },

    ]
  },
  interests: [
    "AI Infra",
    "LLM Training/Inference",
    "Wafer-Scale Systems",
    "Hardware–Software Co-design"
  ],

  // 04 论文与研究成果：明确区分预印本、毕业论文和未注明发表状态的研究工作
  publications: [
    {
      "title": "Photonic embedding learning with high energy efficiency exceeding 100 GOPS/W/mm²",
      "authors": "Yuyao Huang, Wencan Liu, Run Sun, Peng Meng Chan, Yutong He, Tianle Chen, Sigang Yang, Tingzhao Fu & Hongwei Chen",
      "doi": "https://doi.org/10.21203/rs.3.rs-5901611/v1",
      "venue": "Research Square",
      "status": {
        "zh": "预印本",
        "en": "Preprint"
      },
      "date": "2025.01.29",
      "image": "assets/photonic-embedding.webp",
      "imageAlt": {
        "zh": "光子嵌入单元的结构示意图，论文图 1(b)",
        "en": "Schematic of the photonic embedding unit, Figure 1(b)"
      },
      "imageCredit": {
        "zh": "图 1(b) · Huang 等，2025 · CC BY 4.0 · 已裁剪、缩放",
        "en": "Fig. 1(b) · Huang et al., 2025 · CC BY 4.0 · Cropped and resized; adjacent panel edge removed"
      },
      "summary": {
        "zh": "利用片上光衍射与复数调制，将高维视觉输入映射为低维特征，用于图像压缩、分类和视频动作识别。",
        "en": "On-chip optical diffraction and complex-valued modulation embed high-dimensional visual inputs into compact features for image compression, classification, and action recognition."
      }
    },
    {
      "title": {
        "zh": "面向晶圆级芯片集群的混合并行训练映射与片上容错路由算法研究",
        "en": "Hybrid-Parallel Training Mapping and On-Chip Fault-Tolerant Routing for Wafer-Scale Chip Clusters"
      },
      "authors": "Tianle Chen",
      "venue": {
        "zh": "清华大学",
        "en": "Tsinghua University"
      },
      "status": {
        "zh": "本科毕业设计论文",
        "en": "Undergraduate thesis"
      },
      "summary": {
        "zh": "围绕晶圆级芯片集群研究混合并行训练映射与片上容错路由。",
        "en": "Studies hybrid-parallel training mapping and on-chip fault-tolerant routing for wafer-scale chip clusters."
      }
    }
  ],

  projects: [
    {
      "title": {
        "zh": "基于晶圆级芯片系统的大模型训练架构",
        "en": "LLM training architecture for wafer-scale chip systems"
      },
      "images": [
        {
          "src": "assets/wafer-parallel-mapping.webp",
          "afterHighlight": 0,
          "width": 1386,
          "height": 660,
          "alt": {
            "zh": "晶圆级训练系统的混合并行策略与拓扑映射示意",
            "en": "Hybrid-parallel strategy mapping onto wafer-scale network and scale-up/scale-out planes"
          },
          "caption": {
            "zh": "混合并行策略与晶圆级拓扑映射",
            "en": "Hybrid-parallel mapping and wafer-scale topology"
          }
        },
        {
          "src": "assets/wafer-fault-tolerant-routing.webp",
          "afterHighlight": 1,
          "width": 2274,
          "height": 1246,
          "alt": {
            "zh": "2D-Torus 故障链路下的候选路径、路由树与路径示意",
            "en": "Candidate paths, routing tree and fault-tolerant paths in a 2D-Torus network"
          },
          "caption": {
            "zh": "2D-Torus 片上容错路由示意",
            "en": "Fault-tolerant routing in a 2D-Torus network"
          }
        }
      ],
      "date": {
        "zh": "2025.09 – 至今",
        "en": "Sep 2025 – present"
      },
      "description": {
        "zh": "面向晶圆级芯片上的大模型训练，围绕并行策略映射、片上网络容错与系统仿真展开研究，关注计算与通信开销对训练效率的影响。",
        "en": "Investigate LLM training on wafer-scale chip systems through parallel-strategy mapping, on-chip network fault tolerance, and system simulation, with a focus on how computation and communication overhead affect training efficiency."
      },
      "tags": [
        "Hybrid Parallelism",
        "2D-Mesh / Torus",
        "ADPR",
        "SimuMax"
      ],
      "highlights": [
        {
          "label": {
            "zh": "混合并行与自动映射",
            "en": "Hybrid parallelism and automated mapping"
          },
          "text": {
            "zh": "研究晶圆级芯片系统的混合并行映射策略与自动映射算法，探索模型并行方案与芯片系统之间的映射关系。",
            "en": "Study hybrid-parallel mapping strategies and automated mapping algorithms, exploring how model parallelization schemes map onto wafer-scale chip systems."
          }
        },
        {
          "label": {
            "zh": "片上容错路由",
            "en": "Fault-tolerant on-chip routing"
          },
          "text": {
            "zh": "针对 2D-Torus 与 2D-Mesh 拓扑，设计弧增强型确定性路径路由算法（AEDPRA），研究片上通信中的容错路由问题。",
            "en": "Design arc-enhanced deterministic path routing (AEDPRA) for 2D-Torus and 2D-Mesh topologies to investigate fault-tolerant communication within the chip network."
          }
        },
        {
          "label": {
            "zh": "系统级仿真",
            "en": "System-level simulation"
          },
          "text": {
            "zh": "基于 SimuMax 开源仿真器开发晶圆级芯片系统的 PUE 仿真器，用于开展训练系统与并行方案的仿真研究。",
            "en": "Develop a PUE simulator for wafer-scale chip systems based on the open-source SimuMax simulator to support simulation studies of training systems and parallelization schemes."
          }
        },
        {
          "label": {
            "zh": "训练时间分析",
            "en": "Training-time breakdowns"
          },
          "text": {
            "zh": "开展不同并行策略与网络拓扑下的训练时间 breakdown 实验，通过分项分析比较不同系统配置对训练时间的影响。",
            "en": "Run training-time breakdown experiments across parallel strategies and network topologies, using component-level analysis to compare how system configurations affect training time."
          }
        }
      ]
    },
    {
      "title": {
        "zh": "无界硅板平面波导上的光子嵌入单元",
        "en": "Photonic embedding units on unbounded silicon slab waveguides"
      },
      "date": {
        "zh": "2024.09 – 2025.10",
        "en": "Sep 2024 – Oct 2025"
      },
      "description": {
        "zh": "探索无界硅板平面波导上的光子嵌入单元与无源片上衍射光神经网络（DONN），结合光学仿真与数据集构建开展研究。",
        "en": "Explore photonic embedding units on unbounded silicon slab waveguides and passive on-chip diffractive optical neural networks (DONNs), combining optical simulation with dataset construction."
      },
      "tags": [
        "Lumerical",
        "DONN",
        "Multi-wavelength Simulation"
      ],
      "highlights": [
        {
          "label": {
            "zh": "无源片上光神经网络",
            "en": "Passive on-chip optical neural networks"
          },
          "text": {
            "zh": "围绕光子嵌入单元开展无源片上 DONN 研究，探索衍射光学与神经网络计算相结合的实现形式。",
            "en": "Study passive on-chip DONNs in the context of photonic embedding units, exploring implementations that connect diffractive optics with neural-network computation."
          }
        },
        {
          "label": {
            "zh": "多波长光源",
            "en": "Multi-wavelength sources"
          },
          "text": {
            "zh": "研究多波长光源对衍射光神经网络的影响，围绕不同光源设置开展仿真研究。",
            "en": "Investigate the effects of multi-wavelength sources on diffractive optical neural networks through simulation studies of different source configurations."
          }
        },
        {
          "label": {
            "zh": "仿真脚本与数据集",
            "en": "Simulation scripts and datasets"
          },
          "text": {
            "zh": "编写 Lumerical 脚本、搭建简易演示 demo，并整理仿真结果、构建数据集，为后续分析提供数据基础。",
            "en": "Write Lumerical scripts, build a simple demonstration, and organize simulation outputs into datasets for subsequent analysis."
          }
        }
      ]
    },
    {
      "title": {
        "zh": "卷积神经网络的乘加法器",
        "en": "Multiply–accumulate units for convolutional neural networks"
      },
      "images": [
        {
          "src": "assets/cnn-mac-pe-architectures.webp",
          "width": 542,
          "height": 558,
          "alt": {
            "zh": "MAC 与加法树 PE 在补码、原码及带偏置补码下的结构对比",
            "en": "MAC-based and adder-tree processing elements using two's-complement, sign-magnitude and biased representations"
          },
          "caption": {
            "zh": "MAC 与加法树 PE 的结构对比",
            "en": "Comparison of MAC-based and adder-tree PE architectures"
          }
        }
      ],
      "date": {
        "zh": "2024.10 – 2026.02",
        "en": "Oct 2024 – Feb 2026"
      },
      "description": {
        "zh": "面向卷积神经网络的乘加运算，开展原码乘法器与 MAC 单元的结构设计，关注算术运算在数字硬件中的实现。",
        "en": "Investigate sign-magnitude multipliers and multiply–accumulate (MAC) architectures for convolutional neural networks, focusing on the digital-hardware implementation of arithmetic operations."
      },
      "tags": [
        "Booth Multiplier",
        "Huffman Tree",
        "CNN MAC"
      ],
      "highlights": [
        {
          "label": {
            "zh": "原码乘法器设计",
            "en": "Sign-magnitude multiplier design"
          },
          "text": {
            "zh": "结合 Booth 乘法器与 Huffman 树加法器，开展原码乘法器设计，研究乘法与加法运算的硬件结构。",
            "en": "Design a sign-magnitude multiplier based on a Booth multiplier and a Huffman-tree adder, studying the hardware organization of multiplication and addition."
          }
        },
        {
          "label": {
            "zh": "双树结构复现",
            "en": "Dual-tree architecture reproduction"
          },
          "text": {
            "zh": "复现 CNN MAC 单元的双树结构，梳理乘加运算的组织方式，为后续结构设计研究提供参考。",
            "en": "Reproduce a dual-tree CNN MAC architecture and examine its organization of multiply–accumulate operations as a reference for further architectural design."
          }
        },
        {
          "label": {
            "zh": "单树结构设计",
            "en": "Single-tree architecture design"
          },
          "text": {
            "zh": "设计面向 CNN 的单树 MAC 结构，与双树结构复现工作共同构成对乘加数据通路组织方式的研究。",
            "en": "Design a single-tree MAC architecture for CNNs, complementing the dual-tree reproduction work with an investigation of alternative multiply–accumulate datapath organization."
          }
        }
      ]
    },
    {
      "title": {
        "zh": "16 bit、10 GHz 算法可重构数模转换器（DAC）",
        "en": "16-bit, 10 GHz algorithmically reconfigurable DAC"
      },
      "images": [
        {
          "src": "assets/dac-reconfigurable-layout.webp",
          "afterHighlight": 0,
          "width": 791,
          "height": 1247,
          "alt": {
            "zh": "可重构 DAC 芯片版图，标注电流源阵列、锁存器阵列、时钟树、并串转换器阵列、SRAM 阵列与输出位置",
            "en": "Reconfigurable DAC chip layout showing current-source, latch, serializer and SRAM arrays, clock distribution, and output locations"
          },
          "caption": {
            "zh": "可重构 DAC 版图与主要模块分布示意",
            "en": "Reconfigurable DAC layout and major functional blocks"
          }
        }
      ],
      "date": {
        "zh": "2024.12 – 2026.02",
        "en": "Dec 2024 – Feb 2026"
      },
      "description": {
        "zh": "面向算法可重构 DAC，探索以 SRAM 替代传统编码器／解码器的电路方案，并参与相关模块的电路设计与版图绘制。",
        "en": "Explore an algorithmically reconfigurable DAC architecture that replaces conventional encoder/decoder structures with SRAM, contributing to circuit design and layout for related modules."
      },
      "tags": [
        "SRAM",
        "Circuit Design",
        "SerDes",
        "CTLE"
      ],
      "highlights": [
        {
          "label": {
            "zh": "架构与设计目标",
            "en": "Architecture and design targets"
          },
          "text": {
            "zh": "以 16 bit、10 GHz 为项目设计目标，使用 SRAM 替代传统编码器／解码器结构，探索可重构数模转换电路的实现方案。",
            "en": "Work toward the project targets of 16-bit resolution and 10 GHz operation, using SRAM instead of conventional encoder/decoder structures to explore a reconfigurable DAC implementation."
          }
        },
        {
          "label": {
            "zh": "时钟分配与电流偏置",
            "en": "Clock distribution and current bias"
          },
          "text": {
            "zh": "开展时钟分配（clock distribution）与电流偏置（current bias）等模块的电路设计及版图绘制。",
            "en": "Contribute to circuit design and layout for modules including clock distribution and current bias."
          }
        },
        {
          "label": {
            "zh": "高速接口相关模块",
            "en": "High-speed interface modules"
          },
          "text": {
            "zh": "参与 SerDes（串并转换）与 CTLE（连续时间线性均衡器）相关模块的电路与版图设计，积累高速接口电路的实践经验。",
            "en": "Contribute to circuit and layout design for SerDes and continuous-time linear equalizer (CTLE) modules, gaining practical experience with high-speed interface circuits."
          }
        }
      ]
    }
  ],

  // 06 实习经历：公司、日期、description（概述）、highlights（分项贡献）与 tags（技术）
  internships: [
    {
      "title": {
        "zh": "前沿探索",
        "en": "Frontier exploration"
      },
      "date": {
        "zh": "2026.07 – 2026.09",
        "en": "Jul – Sep 2026"
      },
      "description": {
        "zh": "围绕前沿模型与计算架构开展探索，将模型算法研究与异构集群计算框架、AI4RTL 评测工作相结合。",
        "en": "Explore frontier models and computing architectures, connecting model-algorithm research with heterogeneous-cluster computing frameworks and AI4RTL evaluation workflows."
      },
      "company": {
        "zh": "杭州市芯感未来科技有限公司",
        "en": "杭州市芯感未来科技有限公司"
      },
      "highlights": [
        {
          "label": {
            "zh": "模型算法与架构",
            "en": "Model algorithms and architectures"
          },
          "text": {
            "zh": "探索 DeepSeek V4、Kimi K3、Loop Transformer 等模型算法与架构，关注前沿模型设计与计算系统实现之间的联系。",
            "en": "Explore model algorithms and architectures including DeepSeek V4, Kimi K3, and Loop Transformer, with attention to the relationship between model design and computing-system implementation."
          }
        },
        {
          "label": {
            "zh": "异构集群与计算框架",
            "en": "Heterogeneous clusters and compute frameworks"
          },
          "text": {
            "zh": "针对 Block Attention Residual，开展 AF 分离异构集群的拓扑与计算框架优化工作，围绕模型计算特点探索系统层面的组织方式。",
            "en": "Work on topology and compute-framework optimization for AF-separated heterogeneous clusters in the context of Block Attention Residual, exploring system organization around the model computation."
          }
        },
        {
          "label": {
            "zh": "AI4RTL 的Benchmark评测框架",
            "en": "AI4RTL Benchmark evaluation framework"
          },
          "text": {
            "zh": "搭建端到端 AI4RTL Benchmark 工作框架，面向 AI 辅助 RTL 设计的实验与评测，组织相关工作流程。",
            "en": "Build an end-to-end AI4RTL benchmark framework, organizing workflows for experiments and evaluation in AI-assisted RTL design."
          }
        }
      ],
      "tags": [
        "AI Infra",
        "Loop Transformer",
        "Block Attention Residual",
        "AI4RTL"
      ]
    },
    {
      "title": {
        "zh": "基于 PPG 的健康检测指环",
        "en": "PPG-based health-monitoring ring"
      },
      "images": [
        {
          "src": "assets/shokz-ppg-linear-array.webp",
          "afterHighlight": 0,
          "width": 832,
          "height": 792,
          "alt": {
            "zh": "直线型 PPG 阵列、IMU 电路与 PCB 布局示意",
            "en": "Linear PPG array, IMU circuit and PCB layouts"
          },
          "caption": {
            "zh": "直线型 PPG 阵列与 IMU 电路 / PCB 布局",
            "en": "Linear PPG array and IMU circuit / PCB layouts"
          }
        },
        {
          "src": "assets/shokz-ppg-asymmetric-array.webp",
          "afterHighlight": 0,
          "width": 818,
          "height": 936,
          "alt": {
            "zh": "非对称型 PPG 阵列原理图与 PCB 布局示意",
            "en": "Asymmetric PPG array schematic and PCB layouts"
          },
          "caption": {
            "zh": "非对称型 PPG 阵列与 PCB 布局",
            "en": "Asymmetric PPG array and PCB layouts"
          }
        },
        {
          "src": "assets/shokz-ppg-signal-analysis.webp",
          "afterHighlight": 1,
          "width": 1504,
          "height": 586,
          "alt": {
            "zh": "红外通道 PPG 原始波形、滤波后波形、小波变换波形与质量评分示例",
            "en": "Infrared-channel PPG waveforms before and after filtering, wavelet-transform waveforms and example quality scores"
          },
          "caption": {
            "zh": "PPG 红外通道波形、滤波与小波分析示例",
            "en": "Infrared PPG waveforms, filtering and wavelet analysis"
          },
          "fullWidth": true
        },
        {
          "src": "assets/shokz-ppg-classifier-training.webp",
          "afterHighlight": 1,
          "width": 1528,
          "height": 544,
          "alt": {
            "zh": "分类模型的训练与验证损失曲线、训练与验证准确率曲线",
            "en": "Training and validation loss and accuracy curves for the classification model"
          },
          "caption": {
            "zh": "分类模型的训练与验证曲线（Loss / Accuracy）",
            "en": "Classifier training and validation curves (loss / accuracy)"
          },
          "fullWidth": true
        }
      ],
      "date": {
        "zh": "2025.06 – 2025.08",
        "en": "Jun – Aug 2025"
      },
      "description": {
        "zh": "参与基于光电容积脉搏波（PPG）的健康检测指环研发，工作覆盖传感硬件、信号质量评估与运动伪影数据采集。",
        "en": "Contribute to a photoplethysmography (PPG)-based health-monitoring ring, with work spanning sensor hardware, signal-quality assessment, and motion-artifact data collection."
      },
      "company": {
        "zh": "深圳市韶音科技有限公司",
        "en": "深圳市韶音科技有限公司"
      },
      "highlights": [
        {
          "label": {
            "zh": "传感硬件设计",
            "en": "Sensor hardware design"
          },
          "text": {
            "zh": "参与 PPG 阵列与 PCB 板设计，从传感硬件层面支持健康检测指环的研发工作。",
            "en": "Contribute to PPG-array and PCB design, supporting the health-monitoring ring project at the sensor-hardware level."
          }
        },
        {
          "label": {
            "zh": "信号质量评估",
            "en": "Signal-quality assessment"
          },
          "text": {
            "zh": "开展基于短时傅里叶变换（STFT）与 ResNet 分类网络的 PPG 信号质量评估，将时频分析与深度学习分类结合用于信号质量判断。",
            "en": "Work on PPG signal-quality assessment using a short-time Fourier transform (STFT) and a ResNet classification network, combining time–frequency analysis with deep-learning classification."
          }
        },
        {
          "label": {
            "zh": "运动伪影与数据库",
            "en": "Motion artifacts and database construction"
          },
          "text": {
            "zh": "采集带有运动伪影的 PPG 信号并搭建数据库，为信号质量分析与相关算法研究整理数据资源。",
            "en": "Collect PPG signals containing motion artifacts and construct a database, organizing data resources for signal-quality analysis and related algorithm research."
          }
        }
      ],
      "tags": [
        "PPG",
        "PCB",
        "STFT",
        "ResNet"
      ]
    }
  ],

  // 07 技能：编程、深度学习、EDA、开发与 AI 工具
  skills: [
    {
      "title": {
        "zh": "编程与 HDL",
        "en": "Programming & HDL"
      },
      "items": [
        "C / C++",
        "MATLAB",
        "Verilog",
        "Python"
      ]
    },
    {
      "title": {
        "zh": "深度学习与算子开发",
        "en": "Deep learning & kernels"
      },
      "items": [
        "PyTorch",
        "Triton",
        "CUDA",
        "Nsight Compute",
        "Nsight System"
      ]
    },
    {
      "title": {
        "zh": "EDA 工具",
        "en": "EDA tools"
      },
      "items": [
        "Cadence",
        "Vivado",
        "Lumerical",
        "Verilator",
        "OpenSTA"
      ]
    },
    {
      "title": {
        "zh": "开发与工作流",
        "en": "Development & workflow"
      },
      "items": [
        "Linux",
        "LaTeX",
        "VS Code",
        "Unity",
        "Git",
        "Docker"
      ]
    },
    {
      "title": {
        "zh": "AI 智能体工具",
        "en": "AI agent tools"
      },
      "items": [
        "Codex",
        "Claude Code",
        "Cursor",
        "Trae"
      ]
    }
  ],

  // 08 获奖情况：按时间倒序
  honors: [
    {
      "year": "2026.07",
      "title": {
        "zh": "清华大学优秀共青团员",
        "en": "Outstanding Communist Youth League Member, Tsinghua University"
      },
      "detail": {
        "zh": "校级荣誉",
        "en": "University honor"
      }
    },
    {
      "year": "2025.12",
      "title": {
        "zh": "电子工程系校友奖学金",
        "en": "Electronic Engineering Alumni Scholarship"
      },
      "detail": {
        "zh": "电子之星——文艺之星",
        "en": "Electronic Star — Arts Star"
      }
    },
    {
      "year": "2025.12",
      "title": {
        "zh": "清华大学汐泰奖学金",
        "en": "Xitai Scholarship, Tsinghua University"
      },
      "detail": {
        "zh": "综合优秀奖学金",
        "en": "Comprehensive Excellence Scholarship"
      }
    },
    {
      "year": "2025.12",
      "title": {
        "zh": "清华大学校设奖学金",
        "en": "Tsinghua University Scholarship"
      },
      "detail": {
        "zh": "综合优秀奖学金",
        "en": "Comprehensive Excellence Scholarship"
      }
    },
    {
      "year": "2024.12",
      "title": {
        "zh": "清华大学校设奖学金",
        "en": "Tsinghua University Scholarship"
      },
      "detail": {
        "zh": "文艺优秀奖",
        "en": "Arts Excellence Award"
      }
    },
    {
      "year": "2024.04",
      "title": {
        "zh": "拓竹杯·清华大学第七届软件设计大赛",
        "en": "7th Tuozhu Cup Software Design Competition"
      },
      "detail": {
        "zh": "三等奖",
        "en": "Third prize"
      }
    },
    {
      "year": "2023.12",
      "title": {
        "zh": "清华大学校设奖学金",
        "en": "Tsinghua University Scholarship"
      },
      "detail": {
        "zh": "文艺优秀奖",
        "en": "Arts Excellence Award"
      }
    },
    {
      "year": "2023.12",
      "title": {
        "zh": "清华大学校设奖学金",
        "en": "Tsinghua University Scholarship"
      },
      "detail": {
        "zh": "社工优秀奖",
        "en": "Student Service Excellence Award"
      }
    },
    {
      "year": "2023.03",
      "title": {
        "zh": "工物系第八届新生 C 语言大赛",
        "en": "8th Freshman C Programming Competition, Engineering Physics"
      },
      "detail": {
        "zh": "第四名",
        "en": "Fourth place"
      }
    },
    {
      "year": "2022.10",
      "title": {
        "zh": "第十二届创意大赛新生专场暨大创意挑战赛",
        "en": "12th Freshman Creative Design Competition and Creative Challenge"
      },
      "detail": {
        "zh": "最佳人气奖",
        "en": "Best Popularity Award"
      }
    },
    {
      "year": "2022.10",
      "title": {
        "zh": "第十二届创意大赛新生专场暨大创意挑战赛",
        "en": "12th Freshman Creative Design Competition and Creative Challenge"
      },
      "detail": {
        "zh": "三等奖",
        "en": "Third prize"
      }
    },
    {
      "year": "2022.09",
      "title": {
        "zh": "清华大学优秀标兵",
        "en": "Outstanding Model Award, Tsinghua University"
      },
      "detail": {
        "zh": "校级荣誉",
        "en": "University honor"
      }
    }
  ],

  // 09 学生工作：简述与完整经历，未来结束时间标注为计划
  beyond: {
    "zh": "在科研之外，我积极参与院校学生工作、文艺活动与实践组织。",
    "en": "Beyond research, I contribute to student organizations, arts activities, and practical programs. ",
  },
  service: [
        {
      "title": {
        "zh": "深微硕 6 班",
        "en": "Shenzhen  Microelectronics Master class 6"
      },
      "date": {
        "zh": "2026.09 – 2027.09",
        "en": "Sep 2026 – Sep 2027"
      },
      "description": {
        "zh": "学生助理",
        "en": "Student Assistant"
      }
    },
        {
      "title": {
        "zh": "深微硕 6 班",
        "en": "Shenzhen  Microelectronics Master class 6"
      },
      "date": {
        "zh": "2026.09 – 2027.09",
        "en": "Sep 2026 – Sep 2027"
      },
      "description": {
        "zh": "宣传委员",
        "en": "Publicity representative"
      }
    },
      {
      "title": {
        "zh": "数据与信息学院研究生会",
        "en": "School of Data and Information Graduate Student Union"
      },
      "date": {
        "zh": "2026.09 – 2027.09",
        "en": "Sep 2026 – Sep 2027"
      },
      "description": {
        "zh": "实践部成员",
        "en": "Practice department member"
      }
    },
        {
      "title": {
        "zh": "清华大学深圳国际研究生院学生艺术团",
        "en": "Tsinghua Shenzhen International Graduate School Student Art Troupe"
      },
      "date": {
        "zh": "2026.09 – 2027.09",
        "en": "Sep 2026 – Sep 2027"
      },
      "description": {
        "zh": "演出部成员",
        "en": "Performance department member"
      }
    },
    {
      "title": {
        "zh": "集成电路学院研究生会",
        "en": "School of Integrated Circuits Graduate Student Union"
      },
      "date": {
        "zh": "2026.09 – 2027.09",
        "en": "Sep 2026 – Sep 2027"
      },
      "description": {
        "zh": "宣传部成员",
        "en": "Publicity department member"
      }
    },
    {
      "title": {
        "zh": "第十七届学生创新领袖训练营（LINK 计划）",
        "en": "17th Student Innovation Leadership Camp (LINK Program)"
      },
      "date": {
        "zh": "2026.08",
        "en": "Aug 2026"
      },
      "description": {
        "zh": "LINK2 班文艺委员 · 清华大学深圳国际研究生院",
        "en": "Arts representative, LINK2 class · Tsinghua Shenzhen International Graduate School"
      }
    },
    {
      "title": {
        "zh": "电子工程系海外实践",
        "en": "Electronic Engineering overseas-practice program"
      },
      "date": {
        "zh": "2025.12 – 2026.02",
        "en": "Dec 2025 – Feb 2026"
      },
      "description": {
        "zh": "“OREO”赴澳大利亚海外实践支队长",
        "en": "Team leader, “OREO” overseas-practice team to Australia"
      }
    },
    {
      "title": {
        "zh": "电子工程系学生会",
        "en": "Electronic Engineering Student Union"
      },
      "date": {
        "zh": "2025.09 – 2026.05",
        "en": "Sep 2025 – May 2026"
      },
      "description": {
        "zh": "文艺部负责人",
        "en": "Arts department lead"
      }
    },
    {
      "title": {
        "zh": "电子工程系学生会",
        "en": "Electronic Engineering Student Union"
      },
      "date": {
        "zh": "2024.09 – 2025.09",
        "en": "Sep 2024 – Sep 2025"
      },
      "description": {
        "zh": "文艺部部长",
        "en": "Head of the arts department"
      }
    },
    {
      "title": {
        "zh": "清华大学交响乐队",
        "en": "Tsinghua University Symphony Orchestra"
      },
      "date": {
        "zh": "2024.09 – 2025.05",
        "en": "Sep 2024 – May 2025"
      },
      "description": {
        "zh": "宣传中心负责人",
        "en": "Publicity center lead"
      }
    },
    {
      "title": {
        "zh": "电子工程系学生会",
        "en": "Electronic Engineering Student Union"
      },
      "date": {
        "zh": "2023.09 – 2024.09",
        "en": "Sep 2023 – Sep 2024"
      },
      "description": {
        "zh": "文艺部部员",
        "en": "Arts department member"
      }
    },
    {
      "title": {
        "zh": "电子工程系无 25 班",
        "en": "Electronic Engineering class Wu 25"
      },
      "date": {
        "zh": "2023.09 – 2024.09",
        "en": "Sep 2023 – Sep 2024"
      },
      "description": {
        "zh": "宣传委员",
        "en": "Publicity representative"
      }
    },
    {
      "title": {
        "zh": "清华大学交响乐队",
        "en": "Tsinghua University Symphony Orchestra"
      },
      "date": {
        "zh": "2023.02 – 2024.02",
        "en": "Feb 2023 – Feb 2024"
      },
      "description": {
        "zh": "一提声部长 · 内外联队长",
        "en": "First violin section leader · Internal and external liaison team lead"
      }
    },
    {
      "title": {
        "zh": "清华大学学生艺术团",
        "en": "Tsinghua University Student Art Troupe"
      },
      "date": {
        "zh": "2023.09 – 2024.09",
        "en": "Sep 2023 – Sep 2024"
      },
      "description": {
        "zh": "宣传中心成员",
        "en": "Publicity center member"
      }
    },
    {
      "title": {
        "zh": "工物系 20 班",
        "en": "Engineering Physics class 20"
      },
      "date": {
        "zh": "2022.09 – 2023.09",
        "en": "Sep 2022 – Sep 2023"
      },
      "description": {
        "zh": "文艺委员",
        "en": "Arts representative"
      }
    }
  ],

  // 10 联系与页脚说明
  contactIntro: {
    "zh": "欢迎交流大模型训推系统、分布式训练、AI Infra 与软硬件协同优化相关的研究或工作机会。我的邮箱是：",
    "en": "I welcome research and career opportunities in large-model training and inference systems, distributed training, AI infrastructure, and hardware–software co-design. My E-mail is:"
  },

  // 11 模块标题：修改后同步更新导航和公开简历
  sectionTitles: {
    "reading": {
      "zh": "个人博客",
      "en": "Blog"
    },
    "about": {
      "zh": "研究兴趣",
      "en": "Research interests"
    },
    "publications": {
      "zh": "论文与研究成果",
      "en": "Publications & research"
    },
    "projects": {
      "zh": "科研经历",
      "en": "Research experience"
    },
    "skills": {
      "zh": "技能",
      "en": "Skills"
    },
    "beyond": {
      "zh": "获奖情况",
      "en": "Honors"
    },
    "contact": {
      "zh": "联系",
      "en": "Contact"
    },
    "internships": {
      "zh": "实习经历",
      "en": "Internships"
    },
    "service": {
      "zh": "学生工作",
      "en": "Student service"
    }
  },

  // 12 模块显示开关：true 显示，false 隐藏
  sections: {
    "reading": true,
    "about": true,
    "publications": true,
    "projects": true,
    "skills": true,
    "beyond": true,
    "contact": true,
    "internships": true,
    "service": true
  },

  // 13 按钮与辅助文字
  labels: {
    "readPost": {
      "zh": "阅读全文",
      "en": "Read article"
    },
    "education": {
      "zh": "教育背景",
      "en": "Education"
    },
    "paperPdf": {
      "zh": "论文 PDF",
      "en": "Paper PDF"
    },
    "projectLink": {
      "zh": "项目链接",
      "en": "Project link"
    },
    "license": {
      "zh": "许可",
      "en": "License"
    },
    "downloadResume": {
      "zh": "下载简历",
      "en": "Download CV"
    },
    "viewImage": {
      "zh": "点击图片查看大图",
      "en": "Click image to view full size"
    },
    "viewResume": {
      "zh": "查看简历",
      "en": "View résumé"
    },
    "email": {
      "zh": "邮件联系",
      "en": "Email me"
    },
    "interests": {
      "zh": "研究兴趣",
      "en": "Research interests"
    },
    "readPaper": {
      "zh": "预印本 / DOI",
      "en": "Preprint / DOI"
    },
    "preprint": {
      "zh": "预印本",
      "en": "Preprint"
    },
    "technology": {
      "zh": "相关技术",
      "en": "Technologies"
    },
    "navigation": {
      "zh": "主导航",
      "en": "Main navigation"
    },
    "newTab": {
      "zh": "（新窗口）",
      "en": "(opens a new tab)"
    },
    "home": {
      "zh": "回到首页",
      "en": "Back to home"
    },
    "backTop": {
      "zh": "回到顶部",
      "en": "Back to top"
    },
    "courses": {
      "zh": "相关课程",
      "en": "Relevant coursework"
    },
    "serviceDetails": {
      "zh": "查看完整学生工作经历",
      "en": "View all student-service experience"
    }
  },

  // 14 个人博客：我的个人微信公众号与文章索引
  // 保留 reading 字段和 #reading 锚点，兼容现有文章数据与旧链接。
  // 改公众号名称请编辑 blog；新增文章请复制 reading 中的一组对象。
  blog: {
    name: "不想早起的skyhappy",
    platform: {
      zh: "我的个人微信公众号",
      en: "My personal WeChat blog"
    }
  },
  readingIntro: {
    "zh": "我在自己的微信公众号记录论文解读、技术分享与学习思考。这里收录部分文章，点击标题或“阅读全文”可查看原文。",
    "en": "I write about papers, share technique and learning reflections on my personal WeChat blog. Selected posts are listed below; open a title or “Read article” to read the original post in Chinese."
  },
  reading: [
    {
      "title": {
        "zh": "人间至味是论文 | ALISA@ISCA2024",
        "en": "Blog post | ALISA @ ISCA 2024"
      },
      "paper": "ALISA: Accelerating Large Language Model Inference via Sparsity-Aware KV Caching",
      "venue": "ISCA 2024",
      "source": {
        "zh": "微信公众号 · 不想早起的skyhappy",
        "en": "WeChat · 不想早起的skyhappy"
      },
      "url": "https://mp.weixin.qq.com/s/juFBepg8MsHCoggFb72XRw"
    },
    {
      "title": {
        "zh": "人间至味是论文 | Cambricon-LLM@MICRO2024",
        "en": "Blog post | Cambricon-LLM @ MICRO 2024"
      },
      "paper": "Cambricon-LLM: A Chiplet-Based Hybrid Architecture for On-Device Inference of 70B LLM",
      "venue": "MICRO 2024",
      "source": {
        "zh": "微信公众号 · 不想早起的skyhappy",
        "en": "WeChat · 不想早起的skyhappy"
      },
      "url": "https://mp.weixin.qq.com/s/bE3KzOqpPsLJsVGHPM7vTg"
    }
  ],
};
