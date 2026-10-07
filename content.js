/*
 * 网站内容修改入口（UTF-8）。zh = 中文，en = 英文。
 * 根据 assets/个人简历-陈天乐.pdf（2026 年 9 月版）更新。
 * 主页与 resume.html 共用此文件；手机号不在网页中展示。
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
    "zh": "我是陈天乐，本科毕业于清华大学电子工程系，现于清华大学集成电路学院尹首一—胡杨课题组攻读电子信息硕士（集成电路工程）。我的研究聚焦大模型训练系统与 AI Infra，围绕晶圆级芯片系统开展混合并行映射、自动映射算法、片上容错路由与仿真器开发。",
    "en": "I'm Tianle Chen, a master's student in Electronic Information (Integrated Circuit Engineering) at Tsinghua University's School of Integrated Circuits, in the group of Shouyi Yin and Yang Hu. I received my undergraduate degree from Tsinghua's Department of Electronic Engineering. My research focuses on large-model training systems and AI infrastructure, including hybrid-parallel mapping, automated mapping algorithms, on-chip fault-tolerant routing, and simulation for wafer-scale chip systems."
  },

  // 03 研究兴趣与教育：两段教育经历、GPA 和课程
  about: {
    "zh": "我具备 Python / C++ / Triton、深度学习、数字电路与系统架构的交叉背景，关注大模型训练与推理效率、算子优化、通信开销和系统能效，希望通过软硬件协同设计改进大模型计算系统。",
    "en": "My background spans Python, C++, Triton, deep learning, digital circuits, and system architecture. I am interested in efficient large-model training and inference, operator optimization, communication overhead, and system energy efficiency through hardware–software co-design."
  },
  education: {
    "entries": [
      {
        "title": {
          "zh": "清华大学 · 集成电路学院",
          "en": "Tsinghua University · School of Integrated Circuits"
        },
        "date": {
          "zh": "2026.09 – 2028.09（预计）",
          "en": "Sep 2026 – Sep 2028 (expected)"
        },
        "description": {
          "zh": "电子信息硕士（集成电路工程） · 尹首一—胡杨课题组",
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
      }
    ]
  },
  interests: [
    "AI Infra",
    "Large-Model Training",
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
      },
      "note": {
        "zh": "简历链接指向 Research Square 预印本。",
        "en": "The supplied CV links to the Research Square preprint."
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
    },
    {
      "title": {
        "zh": "大模型训练在晶圆级芯片集群上的混合并行切分策略",
        "en": "Hybrid-Parallel Partitioning Strategies for Large-Model Training on Wafer-Scale Chip Clusters"
      },
      "status": {
        "zh": "研究工作",
        "en": "Research work"
      },
      "note": {
        "zh": "简历列出的研究工作，未注明投稿或发表状态。",
        "en": "Listed as research work in the supplied CV; submission and publication status are not specified."
      }
    },
    {
      "title": {
        "zh": "针对晶圆级芯片 2D-Mesh/Torus 拓扑的片上容错路由算法设计",
        "en": "On-Chip Fault-Tolerant Routing for 2D-Mesh/Torus Wafer-Scale Chip Topologies"
      },
      "status": {
        "zh": "研究工作",
        "en": "Research work"
      },
      "note": {
        "zh": "简历列出的研究工作，未注明投稿或发表状态。",
        "en": "Listed as research work in the supplied CV; submission and publication status are not specified."
      }
    }
  ],

  // 05 科研经历：标题、日期、描述和技术标签
  projects: [
    {
      "title": {
        "zh": "基于晶圆级芯片系统的大模型训练架构",
        "en": "Large-model training architecture for wafer-scale chip systems"
      },
      "date": {
        "zh": "2025.09 – 至今",
        "en": "Sep 2025 – present"
      },
      "description": {
        "zh": "研究混合并行映射策略与自动映射算法；设计适用于 2D-Torus 和 2D-Mesh 的弧增强型确定性路径容错路由算法（ADPR）；基于 SimuMax 开源仿真器开发晶圆级芯片系统的 PUE 仿真器，并开展不同并行策略与网络拓扑下训练时间的 breakdown 实验。",
        "en": "Study hybrid-parallel mapping strategies and automated mapping algorithms; design arc-enhanced deterministic path routing (ADPR) for fault tolerance in 2D-Torus and 2D-Mesh topologies; develop a PUE simulator for wafer-scale chip systems based on SimuMax; and analyze training-time breakdowns across parallel strategies and network topologies."
      },
      "tags": [
        "Hybrid Parallelism",
        "2D-Mesh / Torus",
        "ADPR",
        "SimuMax"
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
        "zh": "研究无源片上衍射光神经网络（DONN）及多波长光源的影响；编写 Lumerical 脚本、搭建简易 demo，并构建仿真结果数据集。",
        "en": "Study passive on-chip diffractive optical neural networks (DONNs) and the effects of multi-wavelength sources; write Lumerical scripts, build a simple demo, and construct simulation datasets."
      },
      "tags": [
        "Lumerical",
        "DONN",
        "Multi-wavelength Simulation"
      ]
    },
    {
      "title": {
        "zh": "卷积神经网络的乘加法器",
        "en": "Multiply–accumulate units for convolutional neural networks"
      },
      "date": {
        "zh": "2024.10 – 2026.02",
        "en": "Oct 2024 – Feb 2026"
      },
      "description": {
        "zh": "基于 Booth 乘法器和 Huffman 树加法器设计原码乘法器；面向 CNN 的 MAC 单元，复现双树结构并设计单树结构。",
        "en": "Design a sign-magnitude multiplier based on a Booth multiplier and a Huffman-tree adder; reproduce a dual-tree MAC architecture and design a single-tree architecture for CNNs."
      },
      "tags": [
        "Booth Multiplier",
        "Huffman Tree",
        "CNN MAC"
      ]
    },
    {
      "title": {
        "zh": "16 bit、10 GHz 算法可重构数模转换器（DAC）",
        "en": "16-bit, 10 GHz algorithmically reconfigurable DAC"
      },
      "date": {
        "zh": "2024.12 – 2026.02",
        "en": "Dec 2024 – Feb 2026"
      },
      "description": {
        "zh": "以 16 bit、10 GHz 为设计目标，使用 SRAM 替代传统编码器／解码器结构，开展电路设计与版图绘制，涉及时钟分配、电流偏置、SerDes、CTLE 等模块。",
        "en": "Work toward a 16-bit, 10 GHz DAC design using SRAM in place of conventional encoder/decoder structures; contribute to circuit design and layout for clock distribution, current bias, SerDes, and CTLE modules."
      },
      "tags": [
        "SRAM",
        "Circuit Design",
        "SerDes",
        "CTLE"
      ],
      "note": {
        "zh": "16 bit、10 GHz 为简历列出的项目设计目标，不表示已验证的实测性能。",
        "en": "16-bit and 10 GHz are the project design targets listed in the CV, not verified measured performance."
      }
    }
  ],

  // 06 实习经历：公司、日期、项目和职责
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
        "zh": "探索 DeepSeek V4、Kimi K3、Loop Transformer 等前沿模型算法与架构；针对 Block Attention Residual 开展 AF 分离异构集群拓扑与计算框架优化；搭建端到端 AI4RTL Benchmark 工作框架。",
        "en": "Explore frontier model algorithms and architectures, including DeepSeek V4, Kimi K3, and Loop Transformer; optimize AF-separated heterogeneous-cluster topology and compute frameworks for Block Attention Residual; and build an end-to-end AI4RTL benchmark workflow."
      },
      "company": {
        "zh": "杭州市芯感未来科技有限公司",
        "en": "杭州市芯感未来科技有限公司"
      }
    },
    {
      "title": {
        "zh": "基于 PPG 的健康检测指环",
        "en": "PPG-based health-monitoring ring"
      },
      "date": {
        "zh": "2025.06 – 2025.08",
        "en": "Jun – Aug 2025"
      },
      "description": {
        "zh": "参与 PPG 阵列与 PCB 板设计；基于 STFT + ResNet 分类网络开展 PPG 信号质量评估；采集带运动伪影的 PPG 信号并搭建数据库。",
        "en": "Contribute to PPG-array and PCB design; evaluate PPG signal quality with an STFT + ResNet classification network; and collect motion-artifact PPG signals and build a database."
      },
      "company": {
        "zh": "深圳市韶音科技有限公司",
        "en": "深圳市韶音科技有限公司"
      }
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
        "zh": "深度学习与算子",
        "en": "Deep learning & kernels"
      },
      "items": [
        "PyTorch",
        "Triton",
        "CUDA"
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
        "Lumerical"
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
    "zh": "在科研之外，我也参与学生工作、文艺活动与实践组织，曾担任电子工程系学生会文艺部负责人、交响乐队宣传中心负责人和赴澳大利亚海外实践支队长。",
    "en": "Beyond research, I contribute to student organizations, arts activities, and practical programs. My roles have included leading arts activities in the Electronic Engineering student union, coordinating symphony-orchestra publicity, and leading an overseas-practice team to Australia."
  },
  service: [
    {
      "title": {
        "zh": "集成电路学院研究生会",
        "en": "School of Integrated Circuits Graduate Student Union"
      },
      "date": {
        "zh": "2026.08 – 2028.08（计划）",
        "en": "Aug 2026 – Aug 2028 (planned)"
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
    "zh": "欢迎交流大模型训推系统、分布式训练、AI Infra 与软硬件协同优化相关的研究或工作机会。",
    "en": "I welcome research and career opportunities in large-model training and inference systems, distributed training, AI infrastructure, and hardware–software co-design."
  },
  footerNote: {
    "zh": "内容依据 2026 年 9 月版「个人简历-陈天乐」整理；硕士毕业与未来任职结束时间为预计／计划。",
    "en": "Updated from the September 2026 CV. Future graduation and service end dates are expected or planned."
  },

  // 11 模块标题：修改后同步更新导航和公开简历
  sectionTitles: {
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

};
