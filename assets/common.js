/* =====================================================================
   Shared by index.html and post.html: helpers, content loading, themes.
   Load after js-yaml and before the page's own script.
   ===================================================================== */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const list = (x) => Array.isArray(x) ? x : [];
const toDate = (d) => d instanceof Date ? d : new Date(String(d));
const fmtDate = (d) => toDate(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const postUrl = (slug) => `post.html?p=${encodeURIComponent(slug)}`;

function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- fetch a content file; .yml.txt is for preview hosts that can't serve .yml ---------- */
async function fetchText(path) {
  let res = await fetch(path, { cache: "no-cache" });
  if (!res.ok && path.endsWith(".yml")) res = await fetch(`${path}.txt`, { cache: "no-cache" });
  if (!res.ok) throw new Error(`${path} not found (HTTP ${res.status})`);
  return res.text();
}

/* ---------- load a content file; problems show up in the page, not as a blank site ---------- */
async function load(name) {
  try {
    return { data: jsyaml.load(await fetchText(`content/${name}.yml`)) };
  } catch (e) {
    const where = e.mark ? ` (line ${e.mark.line + 1})` : "";
    console.error(`[content/${name}.yml]`, e);
    return { error: `Couldn't read content/${name}.yml${where}: ${e.reason || e.message}` };
  }
}
const problem = (msg) => `<p class="content-error">${esc(msg)}</p>`;

/* ---------- themes ---------- */
const THEMES = [["raat", "Raat (night)"], ["ajrak", "Ajrak"], ["zumurrud", "Zumurrud (emerald)"]];
let themeIdx = 0;
try { const saved = localStorage.getItem("vj-theme"); const i = THEMES.findIndex(t => t[0] === saved); if (i > 0) themeIdx = i; } catch (e) {}
function applyTheme() { document.documentElement.dataset.theme = THEMES[themeIdx][0]; }
applyTheme();
$("#bored").addEventListener("click", () => {
  themeIdx = (themeIdx + 1) % THEMES.length; applyTheme();
  try { localStorage.setItem("vj-theme", THEMES[themeIdx][0]); } catch (e) {}
  toast("[System] Repainted the truck: " + THEMES[themeIdx][1]);
});
