/*
 * 网站内容修改入口（UTF-8）。页面文字集中在这里，样式在 styles.css。
 * zh = 中文，en = 英文；一般只修改引号中的内容，不要删除引号和逗号。
 * 页面固定为一份个人主页，不再提供学术 / 求职视角切换。
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
    "zh": "清华大学 · 电子工程系",
    "en": "Tsinghua University · Electronic Engineering"
  },
  portrait: "assets/证件照.png",
  resume: {
    "pdf": "assets/个人简历-陈天乐.pdf",
    "page": "resume.html"
  },

  // 可选的个人链接：没有确认账号的链接保持为空，不显示占位按钮。
  // 示例：{ label: "GitHub", url: "https://github.com/你的用户名" }
  // 也可添加 Google Scholar、ORCID 等已确认的公开链接。
  links: [],

  // 02 首页简介：只保留一份介绍，不再区分学术或求职
  intro: {
    "zh": "我是陈天乐，具有清华大学电子工程系的学习与项目经历。我的兴趣在集成电路与光计算的交汇处，希望从物理仿真到电路实现，探索更高效的计算。",
    "en": "I'm Tianle, with a background in Electronic Engineering at Tsinghua University. I explore the intersection of integrated circuits and photonic computing, connecting physical simulation with circuit implementation."
  },

  // 03 研究兴趣：个人介绍、教育背景、研究方向（教育信息展示在首页简介下）
  about: {
    "zh": "对我来说，研究和工程是相互连接的：理解一个问题，建立模型，再把它变成可以验证的设计。我参与过光神经网络仿真、低功耗乘加电路和芯片设计全流程实践，也喜欢用代码把重复的实验变成可复现的工作流。",
    "en": "Research and engineering inform each other: understand a problem, build a model, and turn it into a testable design. My experience spans photonic neural-network simulation, low-power multiply–accumulate circuits, and end-to-end chip-design practice. I also use code to make repetitive experiments reproducible."
  },
  education: {
    "school": {
      "zh": "清华大学",
      "en": "Tsinghua University"
    },
    "description": {
      "zh": "清华大学电子工程系，2022 级因材施教集成电路班",
      "en": "Department of Electronic Engineering, Tsinghua University; 2022-entry Integrated Circuit Talent Program"
    },
    "note": {
      "zh": "资料基于 2025 年简历，当前去向待更新。",
      "en": "Based on the 2025 CV; current affiliation is to be updated."
    }
  },
  interests: [
    "Integrated Circuits",
    "Photonic Computing",
    "Hardware Systems"
  ],

  // 04 论文：一篇论文对应一组花括号，可复制整组添加下一篇
  publications: [
    {
      "title": "Photonic embedding learning with high energy efficiency exceeding 100 GOPS/W/mm²",
      "authors": "Yuyao Huang, Wencan Liu, Run Sun, Peng Meng Chan, Yutong He, Tianle Chen, Sigang Yang, Tingzhao Fu & Hongwei Chen",
      "doi": "https://doi.org/10.21203/rs.3.rs-5901611/v1",
      "venue": "Research Square",
      "status": { "zh": "预印本", "en": "Preprint" },
      "date": "2025.01.29",
      // 可选论文配图；删除 image/imageAlt/imageCredit 后变为纯文字条目。
      "image": "assets/photonic-embedding.webp",
      "imageAlt": { "zh": "光子嵌入单元的结构示意图，论文图 1(b)", "en": "Schematic of the photonic embedding unit, Figure 1(b)" },
      "imageCredit": { "zh": "图 1(b) · Huang 等，2025 · CC BY 4.0 · 已裁剪、缩放", "en": "Fig. 1(b) · Huang et al., 2025 · CC BY 4.0 · Cropped and resized; adjacent panel edge removed" },
      "summary": {
        "zh": "利用片上光衍射与复数调制，将高维视觉输入映射为低维特征，用于图像压缩、分类和视频动作识别。",
        "en": "On-chip optical diffraction and complex-valued modulation embed high-dimensional visual inputs into compact features for image compression, classification, and action recognition."
      },
      "note": {
        "zh": "此处链接为可核实的 Research Square 预印本。正式期刊版本与发表状态待确认后更新。",
        "en": "Linked to the verified Research Square preprint. The journal version and final publication status will be updated after confirmation."
      }
    }
  ],

  // 05 项目：按数组顺序展示；修改名称、介绍、技术标签
  projects: [
    {
      "title": {
        "zh": "硅基光神经网络",
        "en": "Silicon photonic neural networks"
      },
      "description": {
        "zh": "编写 Lumerical 自动化脚本，生成多波长仿真数据；构建数据集并训练全连接神经网络，研究波长与透射率之间的关系。",
        "en": "Automated multi-wavelength Lumerical simulations, built datasets, and trained a fully connected neural network to study the relationship between wavelength and transmittance."
      },
      "tags": [
        "Lumerical",
        "Python",
        "Neural Networks"
      ]
    },
    {
      "title": {
        "zh": "低功耗乘加电路",
        "en": "Low-power multiply–accumulate circuits"
      },
      "description": {
        "zh": "探索面向 CNN 的乘加单元。基于 Booth 乘法器实现原码输入、补码输出的乘法电路，以降低动态翻转能耗为设计目标。",
        "en": "Explored multiply–accumulate units for CNNs. Implemented a Booth-based multiplier with sign-magnitude input and two's-complement output, targeting reduced switching activity."
      },
      "tags": [
        "Verilog",
        "Digital Design",
        "Low Power"
      ]
    },
    {
      "title": {
        "zh": "CPU + FFT 加速核",
        "en": "CPU + FFT accelerator"
      },
      "description": {
        "zh": "实现 CPU 与 8 点 FFT 加速核的数字设计实践，经历从前仿到后仿的完整流程，将计算任务与专用硬件实现连接起来。",
        "en": "Implemented a CPU and an 8-point FFT accelerator through the full pre-layout to post-layout simulation flow, connecting computation with dedicated hardware."
      },
      "tags": [
        "Verilog",
        "FFT",
        "VCS-SIM"
      ]
    },
    {
      "title": {
        "zh": "OTA 模拟放大器",
        "en": "OTA analog amplifier"
      },
      "description": {
        "zh": "完成五管 OTA 放大器设计，实践电路仿真、版图与后仿验证，建立对模拟芯片设计完整流程的理解。",
        "en": "Designed a five-transistor OTA, working through circuit simulation, layout, and post-layout verification to understand the complete analog design flow."
      },
      "tags": [
        "Cadence",
        "Analog IC",
        "Layout"
      ]
    },
    {
      "title": {
        "zh": "算法可重构 DAC",
        "en": "Algorithmically reconfigurable DAC"
      },
      "description": {
        "zh": "参与以 SRAM 结构替代传统编解码结构的 DAC 设计探索，涉及电路与版图实践，关注能耗与精度之间的权衡。",
        "en": "Participated in a DAC design exploring SRAM in place of conventional encoding/decoding structures, with circuit and layout work focused on energy–accuracy trade-offs."
      },
      "tags": [
        "Mixed Signal",
        "SRAM",
        "Cadence"
      ],
      "note": {
        "zh": "项目记录来自 2025 年；后续进展与流片结果待更新。",
        "en": "Project records date to 2025; subsequent progress and tape-out results are to be updated."
      }
    }
  ],

  // 06 技能：每组填写分类名称 title 和技能名称 items
  skills: [
    {
      "title": {
        "zh": "编程与描述语言",
        "en": "Programming & HDL"
      },
      "items": [
        "Python",
        "C / C++",
        "Verilog",
        "MATLAB"
      ]
    },
    {
      "title": {
        "zh": "电路与仿真工具",
        "en": "Design & simulation"
      },
      "items": [
        "Cadence",
        "Lumerical",
        "Vivado",
        "VCS-SIM"
      ]
    },
    {
      "title": {
        "zh": "系统与工作流",
        "en": "Systems & workflow"
      },
      "items": [
        "Linux / Unix",
        "Gem5",
        "LaTeX",
        "Unity"
      ]
    }
  ],

  // 07 其他经历：兴趣介绍与获奖列表
  beyond: {
    "zh": "在电路之外，我也拉小提琴，喜欢摄影与旅行。曾参与清华大学交响乐团和电子系学生工作，在合奏与协作中，学会倾听，也学会把事情做好。",
    "en": "Beyond circuits, I play the violin and enjoy photography and travel. My experience with Tsinghua's symphony orchestra and student organizations has taught me to listen, collaborate, and follow through."
  },
  honors: [
    {
      "year": "2024",
      "title": {
        "zh": "电子系第七届「拓竹杯」软件设计大赛",
        "en": "7th Tuozhu Cup Software Design Competition"
      },
      "detail": {
        "zh": "决赛三等奖 · 负责游戏界面与 UI 实现",
        "en": "Third prize in the final · Game interface and UI implementation"
      }
    },
    {
      "year": "2023–24",
      "title": {
        "zh": "清华大学校设奖学金",
        "en": "Tsinghua University scholarships"
      },
      "detail": {
        "zh": "文艺优秀奖学金（2023）· 社工优秀奖学金（2023、2024）",
        "en": "Arts Excellence (2023) · Social Work Excellence (2023, 2024)"
      }
    },
    {
      "year": "2023",
      "title": {
        "zh": "工物系新生 C 语言大赛",
        "en": "Freshman C Programming Competition"
      },
      "detail": {
        "zh": "决赛第四名",
        "en": "Fourth place in the final"
      }
    },
    {
      "year": "2022",
      "title": {
        "zh": "新生创意设计大赛",
        "en": "Freshman Creative Design Competition"
      },
      "detail": {
        "zh": "信息技术赛道三等奖 · 最佳人气奖",
        "en": "Third prize in Information Technology · Best Popularity Award"
      }
    }
  ],

  // 08 联系模块与页脚说明
  contactIntro: {
    "zh": "欢迎交流研究、项目或工作机会。",
    "en": "Let's talk about research, projects, or opportunities."
  },
  footerNote: {
    "zh": "内容整理自已有简历与项目资料（2025），当前去向、项目进展及正式发表信息待更新。",
    "en": "Based on CVs and project records from 2025. Current affiliation, project progress, and journal publication details are pending updates."
  },

  // 09 模块名称：修改每个区域的标题，也会更新顶部导航
  sectionTitles: {
    "about": {
      "zh": "研究兴趣",
      "en": "Research interests"
    },
    "publications": {
      "zh": "论文",
      "en": "Publications"
    },
    "projects": {
      "zh": "研究与项目",
      "en": "Research & projects"
    },
    "skills": {
      "zh": "技能",
      "en": "Skills"
    },
    "beyond": {
      "zh": "获奖与其他经历",
      "en": "Honors & beyond"
    },
    "contact": {
      "zh": "联系",
      "en": "Contact"
    }
  },

  // 10 显示开关：true 显示该模块，false 隐藏该模块（顶部导航也会同步）
  sections: {
    "about": true,
    "publications": true,
    "projects": true,
    "skills": true,
    "beyond": true,
    "contact": true
  },

  // 11 按钮与辅助文字：通常无需修改
  labels: {
    "education": { "zh": "教育背景", "en": "Education" },
    "paperPdf": { "zh": "论文 PDF", "en": "Paper PDF" },
    "projectLink": { "zh": "项目链接", "en": "Project link" },
    "license": { "zh": "许可", "en": "License" },
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
    }
  },
};

