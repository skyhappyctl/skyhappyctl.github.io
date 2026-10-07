# 发布到 GitHub Pages

## 先确认这三件事

1. 你的 GitHub 用户名，以及是否使用 `用户名.github.io` 作为个人网站仓库名。
2. 允许公开本人照片、学校背景、邮箱 `ctl22@mails.tsinghua.edu.cn`、公开版简历与列出的项目／预印本。
3. 当前去向、正式论文状态与项目进展是否需要更新。不要把 2025 年材料里的目标指标当作实测结果。

**部署配置已经准备好，但没有替你创建仓库或上传，也没有正式上线。** 不要在聊天中发送密码、访问令牌或恢复码。

## 推荐网址与仓库

推荐建立公开仓库 `你的用户名.github.io`，对应网址：

```text
https://你的用户名.github.io/
```

也可以使用仓库名 `personal-site`，对应：

```text
https://你的用户名.github.io/personal-site/
```

这里的用户名是占位符，不是已经发布的网址。相对资源地址已兼容两种情况，无需改照片或脚本地址。

GitHub Free 支持公开仓库的 Pages。若选择私有仓库，先确认套餐支持；Pages 网站通常仍是公开的。公开仓库中的文件、文档和历史记录也都能被他人查看。

## 网页上传方式（不需要命令行）

1. 在 [GitHub](https://github.com/) 登录自己的账号，创建上述公开仓库，默认分支使用 `main`。
2. 在仓库中选择 **Add file → Upload files**，把 `personal-site` 文件夹里面的公开网站文件上传到仓库根目录。不要把外层 `personal-site` 文件夹本身当作根目录中的子文件夹。
3. 确认仓库根目录能直接看到 `index.html`、`content.js`、`app.js`、`styles.css`、`resume.html`、`assets/` 和 `scripts/build.mjs`。
4. 点 **Add file → Create new file**，文件名输入 `.github/workflows/pages.yml`，将本地同名文件内容粘贴进去并保存。隐藏目录在上传时容易遗漏，所以单独检查这一步。
5. 同样确认 `.nojekyll` 和 `.gitignore` 已在根目录；空文件若无法网页上传，可用 **Create new file** 创建 `.nojekyll`，写一行 `# Static site` 即可。
6. 进入 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
7. 进入 **Actions → Deploy personal website to GitHub Pages → Run workflow**，选择 `main` 后运行。首次上传工作流时 Pages 可能尚未启用，启用后手动运行即可。
8. 等待 `build` 和 `deploy` 显示成功；在 **Settings → Pages** 查看并打开 GitHub 给出的正式网址。

不要上传 `_site/`、本地浏览器数据或 `.site-preview/`。不上传上级目录中的任何原始资料。

## 如果习惯使用 Git

在 **personal-site 目录内** 建立仓库，不要在上级简历目录操作：

```text
git init -b main
git add .
git status
```

仔细检查暂存清单，确保都是公开网站文件后，再执行：

```text
git commit -m "Create personal academic homepage"
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

以上地址需要替换成你实际创建的仓库地址。身份验证请使用 GitHub 浏览器登录或系统的凭据管理器，**不把密码／令牌写进命令、链接或聊天**。然后按上方第 6–8 步启用 Pages。

## 日常更新

改 `content.js` 或相关文件后提交到 `main`，网站会自动重新发布。也可以直接在 GitHub 网页编辑 `content.js` 并保存提交。不需要本地安装依赖或手动上传 `_site`。

换照片／简历时，上传对应公开资源到 `assets/`，同步修改 `content.js`。构建会自动收集被引用的公开图片和 PDF。资源文件名使用英文字母、数字、连字符或下划线，不用空格或中文。

## 发布前检查清单

- [ ] 确认姓名、中英文简介、当前去向与研究方向。
- [ ] 确认邮箱、本人照片和公开版简历可以公开。
- [ ] 确认论文仍是预印本，或提供正式发表 DOI 后再更新。
- [ ] 核实项目时间、进展以及指标是目标还是实测。
- [ ] 未上传证件、签证、成绩单、学生证、私人材料或未公开项目细节。
- [ ] 检查仓库根目录结构、工作流和 Pages 设置。
- [ ] 打开正式网址，检查手机显示、论文链接和 PDF 下载。

如果意外上传隐私文件，只删除网页上的文件不能抹去 Git 历史。请立即停止公开发布，并单独处理仓库历史、缓存和已泄露凭据；不要认为构建清单能隐藏已经提交到公开仓库的文件。

## 常见问题

- **Actions 不运行**：确认分支是 `main`，工作流路径准确，仓库允许 Actions。
- **configure-pages / deploy 失败**：确认 Settings → Pages 的 Source 已选择 GitHub Actions，且具备仓库管理权限。
- **首页 404**：确认部署成功，`index.html` 位于仓库根目录而非 `personal-site/index.html` 子目录中；项目站点要使用包含仓库名的网址。
- **图片或 PDF 404**：Linux 区分文件名大小写，`content.js` 的路径必须与上传文件完全一致。
- **构建提示缺少资源**：上传 `content.js` 引用的资源，或删除该可选字段。
- **本地构建提示 `_site` 存在未公开清单中的文件**：检查这是生成目录且里面没有需要保留的文件，再清理旧输出。工具不会擅自删除它们；GitHub 每次构建使用干净环境。
