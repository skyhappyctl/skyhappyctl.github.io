#set page(width: a4, height: a4, margin: 12mm)
#set text(font: "Inter", size: 7pt)
#set heading(level: 1, size: 10pt, weight: "bold")
#set heading(level: 2, size: 8pt, weight: "bold")
#set column(count: 2, gap: 10mm)

#show: heading.where(level: 1): it => {
  let heading = it.body
  align(center)[
    #text(size: 12pt, weight: "bold")[$heading$]
    #line(thickness: 0.3pt, inset: 0pt, width: 100%)
  ]
}

#show: heading.where(level: 2): it => {
  let heading = it.body
  align(left)[
    #text(size: 8pt, weight: "bold")[$heading$]
    #line(thickness: 0.2pt, inset: 0pt, width: 100%)
  ]
}

= 一面两列 Cheatsheet 模板

这个模板专为创建紧凑的参考卡片而设计，使用了小字体和两列布局来最大化内容密度。

== 如何使用

这个模板提供了一个清晰的结构，您可以轻松替换示例内容：

- 第一级标题使用 `=` 符号
- 第二级标题使用 `==` 符号
- 列表使用 `-` 符号
- 代码块使用三个反引号

== 排版示例

### 文本格式
- *斜体* 使用 `*text*`
- **粗体** 使用 `**text**`
- _下划线_ 使用 `_text_`
- ~删除线~ 使用 `~text~`
- ==高亮== 使用 `==text==`

### 列表
这是一个有序列表的例子：
1. 第一项
2. 第二项
3. 第三项

这是一个无序列表的例子：
- 项目A
- 项目B
- 项目C

### 代码示例// 这是一个Typst代码示例
#set text(size: 8pt)
#show: heading.where(level: 2): it => {
  let heading = it.body
  align(left)[
    #text(size: 8pt, weight: "bold")[$heading$]
    #line(thickness: 0.2pt, inset: 0pt, width: 100%)
  ]
}
### 数学公式
内联公式：$E = mc^2$

块级公式：
$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a)
$$

### 表格
| 第一列     | 第二列     | 第三列     |
|------------|------------|------------|
| 单元格1    | 单元格2    | 单元格3    |
| 单元格4    | 单元格5    | 单元格6    |

== 自定义建议

您可以通过修改文档开头的设置来自定义这个模板：

- 调整页面边距：`margin: 12mm`
- 更改字体大小：`size: 7pt`
- 调整列宽和间距：`count: 2, gap: 10mm`

# 这是一个跨列内容的示例
#set column(count: 1)
= 跨列内容示例

如果您需要添加跨列的内容，可以临时将列数设置为1。

#set column(count: 2, gap: 10mm)
== 更多示例

### 图片嵌入
虽然Typst支持图片，但在这种紧凑的cheatsheet中使用图片需要谨慎，以免占用过多空间。

### 脚注
这是一个脚注示例[1]。

[1] 这是脚注内容。

### 颜色和强调
您可以使用颜色来强调重要信息：
#color[red]{警告：} 这是一个重要提醒。