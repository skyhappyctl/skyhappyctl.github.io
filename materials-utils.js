/* Shared publication/path checks for the materials page and GitHub Pages build. */
(() => {
  "use strict";
  const types = ["slides", "assignments", "notes", "code", "other"];
  const extensions = [".pdf", ".tex", ".typ", ".ppt", ".pptx", ".doc", ".docx", ".xls", ".xlsx", ".txt", ".md", ".zip", ".ipynb", ".py", ".c", ".cpp", ".h", ".v", ".sv", ".m", ".csv", ".json", ".png", ".jpg", ".jpeg", ".webp"];
  const hasTitle = value => typeof value === "string" ? Boolean(value.trim()) : value && typeof value === "object" && [value.zh, value.en].some(v => typeof v === "string" && v.trim());
  const validId = value => typeof value === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
  function resourceInfo(resource) {
    if (!resource || resource.public !== true || !types.includes(resource.type) || !hasTitle(resource.title) || typeof resource.url !== "string") return null;
    const url = resource.url.trim();
    if (/^https?:\/\//i.test(url)) {
      if (/[\u0000-\u0020\u007f\\]/.test(url)) return null;
      try {
        const parsed = new URL(url);
        if (!parsed.hostname || parsed.username || parsed.password) return null;
        const extension = parsed.pathname.match(/\.[a-z0-9]+$/i)?.[0].toLowerCase() || "";
        return { url, external: true, extension: extensions.includes(extension) ? extension : "" };
      } catch { return null; }
    }
    if (!/^materials\/[\p{L}\p{N}_ .()（）/-]+$/u.test(url)) return null;
    const parts = url.split("/");
    if (parts.some(p => !p || p === "." || p === ".." || p.trim() !== p || p.endsWith("."))) return null;
    const extension = url.match(/\.[a-z0-9]+$/i)?.[0].toLowerCase() || "";
    return extensions.includes(extension) ? { url, external: false, extension } : null;
  }
  function validateCatalog(catalog) {
    if (!catalog || !Array.isArray(catalog.courses)) throw new Error("materials-data.js must define a courses array.");
    const ids = new Set();
    for (const course of catalog.courses) {
      if (!course || !validId(course.id) || !hasTitle(course.title) || ids.has(course.id)) throw new Error("Each course needs a unique lowercase ID and a title.");
      ids.add(course.id);
      if (course.resources !== undefined && !Array.isArray(course.resources)) throw new Error(`Course ${course.id}: resources must be an array.`);
      for (const [index, resource] of (course.resources || []).entries()) {
        if (!resourceInfo(resource)) throw new Error(`Course ${course.id}, resource ${index + 1}: require public: true, a title, a valid type and an HTTP(S) link or supported local file under materials/. Do not list private materials.`);
      }
    }
    return true;
  }
  window.MATERIALS_UTILS = Object.freeze({ types, extensions, hasTitle, validId, resourceInfo, validateCatalog });
})();
