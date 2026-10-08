/* 学习资料中心：课程与文件在 materials-data.js 管理；不连接第三方服务。 */
(() => {
  "use strict";
  const root = document.getElementById("materials-app");
  const profile = window.PROFILE;
  const catalog = window.COURSE_MATERIALS || { courses: [] };
  const utils = window.MATERIALS_UTILS;
  let language = "zh", query = "", type = "all";
  try { if (localStorage.getItem("tianle-language") === "en") language = "en"; } catch { /* 本地保存不可用时仍可浏览。 */ }
  const escape = value => String(value ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rawText = value => value && typeof value === "object" ? value[language] ?? value.zh ?? value.en ?? "" : value ?? "";
  const text = value => escape(rawText(value));
  const normalize = value => String(value ?? "").normalize("NFKC").toLowerCase().trim();
  const searchable = value => value && typeof value === "object" ? `${value.zh || ""} ${value.en || ""}` : String(value ?? "");
  const translations = {
    home: { zh: "返回主页", en: "Home" }, blog: { zh: "个人博客", en: "Blog" },
    navigation: { zh: "主导航", en: "Main navigation" }, search: { zh: "搜索课程或资料", en: "Search courses or materials" },
    searchHint: { zh: "输入课程名、资料名或学期", en: "Course, material title, or semester" },
    type: { zh: "资料类型", en: "Material type" }, all: { zh: "全部资料", en: "All materials" },
    slides: { zh: "课件", en: "Lecture slides" }, assignments: { zh: "作业", en: "Assignments" },
    notes: { zh: "笔记", en: "Notes" }, code: { zh: "实验代码", en: "Lab code" }, other: { zh: "其他资料", en: "Other materials" },
    expand: { zh: "展开全部", en: "Expand all" }, collapse: { zh: "收起全部", en: "Collapse all" },
    reset: { zh: "清除筛选", en: "Clear filters" }, pending: { zh: "待添加资料", en: "Materials pending" },
    courseEmpty: { zh: "这门课的公开资料尚未添加。课件、作业与笔记将在整理并确认可公开后收录。", en: "No public materials have been added for this course yet. Slides, assignments, and notes will be listed after review for public sharing." },
    noResults: { zh: "没有符合条件的课程或资料。试试其他关键词，或清除筛选。", en: "No matching courses or materials. Try another keyword or clear the filters." },
    download: { zh: "下载", en: "Download" }, external: { zh: "外部链接", en: "External link" },
    newTab: { zh: "（新窗口）", en: "(opens a new tab)" }, backTop: { zh: "回到顶部", en: "Back to top" },
    configError: { zh: "部分资料配置不完整，请检查 materials-data.js；无效条目不会显示。", en: "Some material entries need correction in materials-data.js; invalid entries are not displayed." },
    directory: { zh: "课程目录", en: "Course directory" }
  };
  const label = key => text(translations[key]);
  // 优先显示已有资料的课程，待补充课程置于末尾；保持各组内部的目录顺序。
  const courses = (Array.isArray(catalog.courses) ? catalog.courses : []).filter(course => course && utils.validId(course.id) && utils.hasTitle(course.title)).sort((a, b) => Number((b.resources || []).some(resource => utils.resourceInfo(resource))) - Number((a.resources || []).some(resource => utils.resourceInfo(resource))));
  const initialCourse = courses.find(course => (course.resources || []).some(resource => utils.resourceInfo(resource))) || courses[0];
  const openIds = new Set(initialCourse ? [initialCourse.id] : []);
  let configError = false;
  try { utils.validateCatalog(catalog); } catch { configError = true; }
  function publicResources(course) {
    return (Array.isArray(course.resources) ? course.resources : []).map(resource => ({ resource, info: utils.resourceInfo(resource) })).filter(item => item.info);
  }
  function matches() {
    const needle = normalize(query);
    return courses.map(course => {
      const courseMatch = normalize([course.title, course.semester, course.description].map(searchable).join(" ")).includes(needle);
      const resources = publicResources(course).filter(({ resource }) => (type === "all" || resource.type === type) && (!needle || courseMatch || normalize([resource.title, resource.description].map(searchable).join(" ")).includes(needle)));
      if ((needle && !courseMatch && !resources.length) || (type !== "all" && !resources.length)) return null;
      return { course, resources };
    }).filter(Boolean);
  }
  function countText(courseCount, resourceCount) {
    return language === "zh" ? `${courseCount} 个课程／资料分组 · ${resourceCount} 份资料` : `${courseCount} course / resource groups · ${resourceCount} materials`;
  }
  function formatSize(bytes) {
    if (!Number.isFinite(bytes) || bytes < 0) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }
  function resourceRow({ resource, info }) {
    const fileType = info.external ? (info.extension ? `${info.extension.slice(1).toUpperCase()} · ${label("external")}` : label("external")) : info.extension.slice(1).toUpperCase();
    return `<li class="resource-row"><div class="resource-info"><a class="resource-title" href="${escape(info.url)}" target="_blank" rel="noopener noreferrer">${text(resource.title)}<span class="sr-only"> ${label("newTab")}</span></a>${rawText(resource.description) ? `<p class="resource-description">${text(resource.description)}</p>` : ""}<p class="resource-file-type">${fileType}${formatSize(resource.bytes) ? ` · ${escape(formatSize(resource.bytes))}` : ""}</p></div>${info.external ? `<span class="resource-external" aria-hidden="true">↗</span>` : `<a class="resource-download" href="${escape(info.url)}" download>${label("download")}<span class="sr-only">：${text(resource.title)}</span></a>`}</li>`;
  }
  function courseBlock({ course, resources }) {
    const groups = utils.types.map(group => {
      const items = resources.filter(item => item.resource.type === group);
      return items.length ? `<section class="resource-group" aria-labelledby="course-${course.id}-${group}"><h3 id="course-${course.id}-${group}">${label(group)}</h3><ul class="plain-list resource-list">${items.map(resourceRow).join("")}</ul></section>` : "";
    }).join("");
    return `<details class="course-block" id="course-${course.id}" data-course-id="${course.id}"${openIds.has(course.id) ? " open" : ""}><summary><span class="course-heading"><span class="course-name">${text(course.title)}</span>${rawText(course.semester) ? `<span class="course-semester">${text(course.semester)}</span>` : ""}</span><span class="course-count">${resources.length ? (language === "zh" ? `${resources.length} 份资料` : `${resources.length} materials`) : label("pending")}</span></summary><div class="course-body">${rawText(course.description) ? `<p class="course-description">${text(course.description)}</p>` : ""}${groups || `<p class="course-empty">${label("courseEmpty")}</p>`}</div></details>`;
  }
  function renderResults(autoOpen = false) {
    const entries = matches();
    if (autoOpen && (query.trim() || type !== "all")) entries.forEach(({ course }) => openIds.add(course.id));
    document.getElementById("course-list").innerHTML = entries.length ? entries.map(courseBlock).join("") : `<p class="materials-empty">${label("noResults")}</p>`;
    document.getElementById("materials-results").textContent = (language === "zh" ? "当前显示：" : "Showing: ") + countText(entries.length, entries.reduce((sum, entry) => sum + entry.resources.length, 0));
    document.getElementById("reset-filters").disabled = !query && type === "all";
    for (const id of ["expand-courses", "collapse-courses"]) document.getElementById(id).disabled = !entries.length;
  }
  function openHashCourse() {
    const target = document.getElementById(location.hash.slice(1));
    if (target?.classList.contains("course-block")) {
      target.open = true;
      openIds.add(target.dataset.courseId);
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  }
  function render(restoreFocus = false) {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = `${rawText(catalog.title)} · ${rawText(profile.name)}`;
    document.querySelector('meta[name="description"]').content = rawText(catalog.intro);
    const total = courses.reduce((sum, course) => sum + publicResources(course).length, 0);
    const blogLink = profile.sections?.reading !== false && Array.isArray(profile.reading) && profile.reading.length ? `<a href="index.html#reading">${label("blog")}</a>` : "";
    root.innerHTML = `<header class="site-header container"><a class="site-name" href="index.html">${text(profile.name.en)}</a><nav class="site-nav" aria-label="${label("navigation")}"><a href="index.html">${label("home")}</a>${blogLink}</nav><button type="button" id="language-toggle" aria-label="${language === "zh" ? "Switch to English" : "切换到中文"}">${language === "zh" ? "EN" : "中文"}</button></header>
      <main id="main" class="container materials-main"><div class="materials-heading"><p class="materials-eyebrow">${text(profile.name)}</p><h1 id="materials-title">${text(catalog.title)}</h1><p class="materials-intro">${text(catalog.intro)}</p><p id="materials-totals" class="materials-totals">${escape(countText(courses.length, total))}</p>${rawText(catalog.notice) ? `<p class="materials-notice">${text(catalog.notice)}</p>` : ""}${configError ? `<p class="materials-notice" role="alert">${label("configError")}</p>` : ""}</div>
      <form class="materials-filters" role="search" aria-label="${label("search")}"><label class="materials-search" for="materials-search">${label("search")}<input id="materials-search" name="q" type="search" value="${escape(query)}" placeholder="${label("searchHint")}" autocomplete="off" aria-controls="course-list"></label><label for="materials-type">${label("type")}<select id="materials-type" name="type" aria-controls="course-list"><option value="all"${type === "all" ? " selected" : ""}>${label("all")}</option>${utils.types.map(value => `<option value="${value}"${type === value ? " selected" : ""}>${label(value)}</option>`).join("")}</select></label></form>
      <div class="materials-tools"><p id="materials-results" role="status" aria-live="polite" aria-atomic="true"></p><div class="materials-tool-buttons"><button id="expand-courses" type="button">${label("expand")}</button><button id="collapse-courses" type="button">${label("collapse")}</button><button id="reset-filters" type="button">${label("reset")}</button></div></div><section aria-label="${label("directory")}" id="course-list"></section></main>
      <footer class="site-footer container"><div class="footer-line"><span>© ${new Date().getFullYear()} ${text(profile.name.en)}</span><a href="#materials-title" class="back-top">${label("backTop")} ↑</a></div></footer>`;
    root.querySelector("form").addEventListener("submit", event => event.preventDefault());
    document.getElementById("materials-search").addEventListener("input", event => { query = event.target.value; renderResults(true); });
    document.getElementById("materials-type").addEventListener("change", event => { type = event.target.value; renderResults(true); });
    document.getElementById("reset-filters").addEventListener("click", () => {
      query = ""; type = "all";
      document.getElementById("materials-search").value = ""; document.getElementById("materials-type").value = "all";
      renderResults(); document.getElementById("materials-search").focus();
    });
    for (const [id, open] of [["expand-courses", true], ["collapse-courses", false]]) {
      document.getElementById(id).addEventListener("click", () => {
        for (const block of document.querySelectorAll(".course-block")) {
          block.open = open;
          if (open) openIds.add(block.dataset.courseId); else openIds.delete(block.dataset.courseId);
        }
      });
    }
    document.getElementById("course-list").addEventListener("toggle", event => {
      const block = event.target;
      if (!block.isConnected || !block.classList.contains("course-block")) return;
      if (block.open) openIds.add(block.dataset.courseId); else openIds.delete(block.dataset.courseId);
    }, true);
    document.getElementById("language-toggle").addEventListener("click", () => {
      language = language === "zh" ? "en" : "zh";
      try { localStorage.setItem("tianle-language", language); } catch { /* 保存失败不影响切换。 */ }
      render(true);
    });
    renderResults(); openHashCourse();
    if (restoreFocus) document.getElementById("language-toggle").focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", openHashCourse);
  render();
})();


