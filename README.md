# 陈天乐 · Tianle Chen

简洁的中英文个人主页，以学者主页常见的「简介与教育 → 研究兴趣 → 科研 → 实习 → 论文与研究成果 → 技能、获奖与学生工作」组织信息。不区分学术／求职视角，不使用卡片筛选、动画或追踪服务。

## 快速使用

- 本地预览：直接打开 `index.html`，或在本目录运行 `python -m http.server 8765 --bind 127.0.0.1`。
- 改文字、链接与模块：编辑 **`content.js`**。中文与英文分别在 `zh`、`en` 中。
- 改颜色、间距与宽度：编辑 `styles.css`。
- 发布到 GitHub：按 **[PUBLISHING.md](PUBLISHING.md)** 操作。
- 各模块修改位置：[网站修改指南.md](网站修改指南.md)。
- 参考主页与采用方式：[主页调研.md](主页调研.md)。

## 文件结构

```text
index.html                    页面入口与搜索摘要
content.js                    姓名、简介、论文、项目等可编辑内容
app.js                        页面结构与语言切换
styles.css                    白底、蓝色链接、响应式布局
resume.html                   可打印网页简历，与主页共用 content.js
assets/                       本人照片、公开版 PDF、本人论文配图、开源字体
scripts/build.mjs             无需安装依赖的公开文件构建
.github/workflows/pages.yml   GitHub Pages 自动发布
.nojekyll                     静态资源不经 Jekyll 处理
```

## 公开范围与状态

只将本目录作为仓库根目录。**不要上传上级的简历资料目录**，也不要把身份证、护照、签证、成绩单、学生证或未经确认可公开的原始资料放进本仓库。

主页已按 2026 年 9 月版「个人简历-陈天乐.pdf」更新：清华大学集成电路学院硕士、AI Infra／晶圆级大模型训练系统、科研与实习等经历。硕士毕业及未来任职结束时间标注为预计／计划。论文区区分 Research Square 预印本、本科毕业论文和未注明发表状态的研究工作。

**下载的 PDF 是用户上传的原件，其中包含手机号；网页正文不展示手机号。需要脱敏时，请替换 PDF。** 主页和可打印网页简历共用 `content.js`，但 PDF 原件独立维护。

仓库配置已准备不代表网站已发布；只有成功部署后 GitHub Pages 给出的地址才是正式网址。

## 构建

GitHub 会自动运行 `node scripts/build.mjs`，无需 `npm install`。本地需 Node.js 24 或更新版本。输出为 `_site/`，仅包含页面必需文件及 `content.js` 明确引用的公开资源，不复制上级目录或整套素材。已有输出中若有不在公开清单中的文件，构建会停止，不会擅自删除文件。

所有站内资源采用相对地址，同时支持用户主页和项目主页。个人外链未确认前留空；不虚构 GitHub、Google Scholar 或 ORCID 账号。

## 字体

标题采用思源宋体，正文采用思源黑体。随网站打包的 WOFF2 字体子集保留 400–600 的真实字重，覆盖常用汉字和页面已有字符；不请求第三方字体服务。字体入口是 `styles.css` 的 `--font-heading` 和 `--font-body`，许可见 `assets/fonts/`。

## 来源

布局是原创实现，只参考公开学者主页的信息结构。本人论文缩略图的来源与许可见 [assets/ATTRIBUTION.md](assets/ATTRIBUTION.md)。
