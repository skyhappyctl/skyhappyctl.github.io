/* 主页布局与语言切换。文字、日期和模块开关集中在 content.js。 */
(() => {
  "use strict";
  const profile = window.PROFILE;
  const root = document.getElementById("app");
  let language = "zh";
  try { if (localStorage.getItem("tianle-language") === "en") language = "en"; } catch { /* 保存不可用时仍可切换。 */ }
  const escape = value => String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[character]));
  const rawText = value => value && typeof value === "object" ? value[language] ?? value.zh ?? value.en ?? "" : value ?? "";
  const text = value => escape(rawText(value));
  const label = key => text(profile.labels[key]);
  const enabled = key => profile.sections[key] !== false;
  const safeURL = value => {
    const url = String(value ?? "").trim();
    if (!url || /[\u0000-\u0020\u007f\\]/.test(url) || url.startsWith("//")) return "";
    if (/^[a-z][a-z\d+.-]*:/i.test(url) && !/^(https?:\/\/|mailto:)/i.test(url)) return "";
    return url;
  };
  const link = (href, title, className = "", newTab = false) => {
    const url = safeURL(href);
    if (!url) return title;
    return `<a href="${escape(url)}" class="${className}"${newTab ? ' target="_blank" rel="noopener noreferrer"' : ""}>${title}${newTab ? `<span class="sr-only"> ${label("newTab")}</span>` : ""}</a>`;
  };
  function section(id, body) {
    return enabled(id) ? `<section id="${id}" class="section" aria-labelledby="${id}-title"><h2 id="${id}-title">${text(profile.sectionTitles[id])}</h2><div class="section-content">${body}</div></section>` : "";
  }
  function education() {
    const entries = (profile.education.entries || []).map(entry => `<li><p><strong>${text(entry.title)}</strong> <span class="education-date">${text(entry.date)}</span></p><p>${text(entry.description)}</p></li>`).join("");
    return `<div class="education" aria-label="${label("education")}"><ul class="plain-list education-list">${entries}</ul>${profile.education.gpa ? `<p class="note">${text(profile.education.gpa)}</p>` : ""}</div>`;
  }
  function about() {
    const courses = profile.education.courses || [];
    return section("about", `<p>${text(profile.about)}</p><p class="interests">${profile.interests.map(escape).join(' <span aria-hidden="true">·</span> ')}</p>${courses.length ? `<details class="course-details"><summary>${label("courses")}</summary><p>${courses.map(text).join(" · ")}</p></details>` : ""}`);
  }
  function publications() {
    const items = profile.publications.map(publication => {
      const authors = escape(publication.authors).replace(escape(profile.name.en), `<strong>${escape(profile.name.en)}</strong>`);
      const image = safeURL(publication.image);
      const credit = publication.imageCredit ? `<figcaption>${text(publication.imageCredit)} · ${link("https://creativecommons.org/licenses/by/4.0/", label("license"), "", true)}</figcaption>` : "";
      const figure = image ? `<figure class="paper-figure">${link(publication.doi, `<img src="${escape(image)}" alt="${text(publication.imageAlt || publication.title)}" width="720" height="577" loading="lazy">`, "", true)}${credit}</figure>` : "";
      const meta = [publication.venue, publication.status, publication.date].filter(value => rawText(value)).map(text).join(" · ");
      const links = [];
      if (safeURL(publication.doi)) links.push(link(publication.doi, label("readPaper"), "", true));
      if (safeURL(publication.pdf)) links.push(link(publication.pdf, label("paperPdf"), "", true));
      return `<li class="publication${image ? " has-image" : ""}">${figure}<div class="paper-details"><h3>${link(publication.doi, text(publication.title), "publication-title", true)}</h3>${publication.authors ? `<p class="authors">${authors}</p>` : ""}${meta ? `<p class="publication-meta">${meta}</p>` : ""}${publication.summary ? `<p class="paper-summary">${text(publication.summary)}</p>` : ""}${links.length ? `<p class="paper-links">${links.join(' <span aria-hidden="true">/</span> ')}</p>` : ""}${publication.note ? `<p class="note">${text(publication.note)}</p>` : ""}</div></li>`;
    }).join("");
    return section("publications", `<ul class="plain-list publications">${items}</ul>`);
  }
  function experienceHighlights(entry) {
    const points = Array.isArray(entry.highlights) ? entry.highlights.filter(point => point && rawText(point.text)) : [];
    if (!points.length) return "";
    return `<ul class="experience-points">${points.map(point => `<li>${rawText(point.label) ? `<strong>${text(point.label)}${language === "zh" ? "：" : ": "}</strong>` : ""}${text(point.text)}</li>`).join("")}</ul>`;
  }
  function projects() {
    const items = profile.projects.map(project => `<li class="project"><h3>${text(project.title)}</h3>${project.date ? `<p class="experience-meta">${text(project.date)}</p>` : ""}<p>${text(project.description)}</p>${experienceHighlights(project)}<p class="project-tags"><span class="sr-only">${label("technology")}：</span>${(project.tags || []).map(escape).join(" / ")}${project.url ? ` · ${link(project.url, label("projectLink"), "", true)}` : ""}</p>${project.note ? `<p class="note">${text(project.note)}</p>` : ""}</li>`).join("");
    return section("projects", `<ul class="plain-list projects">${items}</ul>`);
  }
  function internships() {
    const items = (profile.internships || []).map(entry => `<li class="internship"><h3>${text(entry.title)}</h3><p class="experience-meta">${[entry.company, entry.date].filter(Boolean).map(text).join(" · ")}</p><p>${text(entry.description)}</p>${experienceHighlights(entry)}${(entry.tags || []).length ? `<p class="experience-tags"><span class="sr-only">${label("technology")}：</span>${entry.tags.map(escape).join(" / ")}</p>` : ""}</li>`).join("");
    return section("internships", `<ul class="plain-list internships">${items}</ul>`);
  }
  function skills() {
    return section("skills", `<dl class="skill-list">${profile.skills.map(skill => `<div class="skill-row"><dt>${text(skill.title)}</dt><dd>${skill.items.map(escape).join(" · ")}</dd></div>`).join("")}</dl>`);
  }
  function beyond() {
    return section("beyond", `<ul class="plain-list honors">${profile.honors.map(honor => `<li class="honor"><span class="honor-year">${escape(honor.year)}</span><div><h3>${text(honor.title)}</h3><p>${text(honor.detail)}</p></div></li>`).join("")}</ul>`);
  }
  function service() {
    const entries = (profile.service || []).map(entry => `<li class="service-entry"><h3>${text(entry.title)}</h3><p class="experience-meta">${text(entry.date)}</p><p>${text(entry.description)}</p></li>`).join("");
    return section("service", `<p>${text(profile.beyond)}</p><details class="service-details"><summary>${label("serviceDetails")}</summary><ul class="plain-list service-list">${entries}</ul></details>`);
  }
  function contact() {
    return section("contact", `<p>${text(profile.contactIntro)} ${link(`mailto:${profile.email}`, escape(profile.email), "email-link")}</p>`);
  }
  function render(restoreFocus = false) {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.title = `${profile.name[language]} · ${language === "zh" ? "个人主页" : "Personal website"}`;
    document.querySelector('meta[name="description"]').content = rawText(profile.intro);
    const nav = ["projects", "internships", "publications", "contact"].filter(enabled).map(id => link(`#${id}`, text(profile.sectionTitles[id]))).join("");
    const personalLinks = (profile.links || []).filter(item => safeURL(item.url)).map(item => link(item.url, text(item.label), "", true)).join(' <span aria-hidden="true">/</span> ');
    const portrait = safeURL(profile.portrait);
    const pdf = safeURL(profile.resume.pdf);
    root.innerHTML = `<header class="site-header container">${link("#home", text(profile.name.en), "site-name")}<nav class="site-nav" aria-label="${label("navigation")}">${nav}</nav><button type="button" id="language-toggle" aria-label="${language === "zh" ? "Switch to English" : "切换到中文"}">${language === "zh" ? "EN" : "中文"}</button></header>
      <main id="main" class="container"><section id="home" class="hero${portrait ? "" : " no-portrait"}" aria-labelledby="hero-title"><div class="hero-identity"><h1 id="hero-title">${text(profile.name)}<span class="english-name">${escape(profile.name[language === "zh" ? "en" : "zh"])}</span></h1><p class="affiliation">${text(profile.affiliation)}</p></div>${portrait ? `<img class="portrait" src="${escape(portrait)}" alt="${language === "zh" ? `${escape(profile.name.zh)}的个人照片` : `Portrait of ${escape(profile.name.en)}`}" width="480" height="640" fetchpriority="high">` : ""}<p class="intro">${text(profile.intro)}</p>${enabled("about") ? education() : ""}<div class="hero-links">${link(`mailto:${profile.email}`, "Email")}<span aria-hidden="true">/</span>${pdf ? `<a href="${escape(pdf)}" download>${label("downloadResume")} <span class="file-type">PDF</span></a>` : label("downloadResume")}<span aria-hidden="true">/</span>${link(profile.resume.page, label("viewResume"))}${personalLinks ? `<span aria-hidden="true">/</span>${personalLinks}` : ""}</div></section>${about()}${projects()}${internships()}${publications()}${skills()}${beyond()}${service()}${contact()}</main>
      <footer class="site-footer container"><div class="footer-line"><span>© ${new Date().getFullYear()} ${escape(profile.name.en)}</span>${link("#home", `${label("backTop")} ↑`, "back-top")}</div><p>${text(profile.footerNote)}</p></footer>`;
    document.getElementById("language-toggle").addEventListener("click", () => {
      language = language === "zh" ? "en" : "zh";
      try { localStorage.setItem("tianle-language", language); } catch { /* 保存失败不影响切换。 */ }
      render(true);
    });
    if (restoreFocus) document.getElementById("language-toggle").focus({ preventScroll: true });
  }
  render();
})();
