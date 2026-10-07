/** Dependency-free GitHub Pages build. Copies only public, referenced files.
 * Run: node scripts/build.mjs
 * No parent folders, original CVs, browser data, or entire-directory copies.
 */
import { readFile, mkdir, readdir, lstat, copyFile } from "node:fs/promises";
import { resolve, relative, dirname, extname, sep } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = resolve(ROOT, "_site");
if (dirname(OUTPUT) !== ROOT || relative(ROOT, OUTPUT) !== "_site") {
  throw new Error("Unsafe build destination.");
}
const files = new Set([
  "index.html", "styles.css", "content.js", "app.js", "resume.html", ".nojekyll",
  "assets/favicon.svg", "assets/ATTRIBUTION.md",
  "assets/fonts/fonts.css", "assets/fonts/profile-sans-sc.woff2", "assets/fonts/profile-serif-sc.woff2",
  "assets/fonts/profile-sans-sc-OFL.txt", "assets/fonts/profile-serif-sc-OFL.txt"
]);
const context = { window: {} };
vm.runInNewContext(await readFile(resolve(ROOT, "content.js"), "utf8"), context, { timeout: 1000 });
const profile = context.window.PROFILE;
if (!profile || !Array.isArray(profile.publications) || !Array.isArray(profile.projects)) {
  throw new Error("content.js must define window.PROFILE, publications, and projects.");
}

function addAsset(url, allowedExtensions, externalAllowed = false) {
  if (!url) return;
  if (/^https?:\/\//i.test(url) && externalAllowed) return;
  if (typeof url !== "string" || !/^assets\/[\p{L}\p{N}_./-]+$/u.test(url) || url.split("/").includes("..")) {
    throw new Error(`Public assets must be local files under assets/: ${url}`);
  }
  if (!allowedExtensions.includes(extname(url).toLowerCase())) {
    throw new Error(`Unsupported public asset type: ${url}`);
  }
  files.add(url);
}
const images = [".webp", ".png", ".jpg", ".jpeg", ".svg", ".gif"];
addAsset(profile.portrait, images);
addAsset(profile.resume?.pdf, [".pdf"]);
if (profile.resume?.page !== "resume.html") {
  throw new Error("The printable CV page must be resume.html.");
}
for (const publication of profile.publications) {
  addAsset(publication.image, images);
  addAsset(publication.pdf, [".pdf"], true);
}
// Local project links can point only to public images or PDFs, not private HTML/files.
for (const project of profile.projects) {
  if (project.url && !/^https?:\/\//i.test(project.url)) addAsset(project.url, [...images, ".pdf"]);
}

async function assertNoLinks(base, rel, requireFile = true) {
  const absolute = resolve(base, rel);
  const within = relative(base, absolute);
  if (!within || within.startsWith(`..${sep}`) || within === ".." || resolve(absolute) === resolve(base)) {
    throw new Error(`Path escapes allowed directory: ${rel}`);
  }
  const parts = within.split(sep);
  let current = base;
  for (const part of parts) {
    current = resolve(current, part);
    try {
      const stat = await lstat(current);
      if (stat.isSymbolicLink()) throw new Error(`Symbolic links are not allowed: ${rel}`);
      if (current === absolute && requireFile && !stat.isFile()) throw new Error(`Not a file: ${rel}`);
    } catch (error) {
      if (error.code === "ENOENT" && !requireFile) continue;
      throw error;
    }
  }
  return absolute;
}

// Refuse unknown files in an existing build instead of deleting user files or deploying them.
async function existingFiles(directory, prefix = "") {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const rel = prefix + entry.name;
    if (entry.isSymbolicLink()) throw new Error(`Link in build folder: ${rel}`);
    if (entry.isDirectory()) result.push(...await existingFiles(resolve(directory, entry.name), rel + "/"));
    else if (entry.isFile()) result.push(rel);
    else throw new Error(`Unsupported build entry: ${rel}`);
  }
  return result;
}
await assertNoLinks(ROOT, "_site", false);
for (const file of files) await assertNoLinks(ROOT, file);
await mkdir(OUTPUT, { recursive: true });
const unexpected = (await existingFiles(OUTPUT)).filter(file => !files.has(file));
if (unexpected.length) {
  throw new Error(`Build stopped: _site contains files that are not in the public allowlist (${unexpected.join(", ")}). Review the generated folder before rebuilding. Nothing was deleted.`);
}
for (const file of files) {
  const source = await assertNoLinks(ROOT, file);
  const target = await assertNoLinks(OUTPUT, file, false);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(source, target);
}
console.log(`Built ${files.size} public files in _site. No dependencies or private directories copied.`);
