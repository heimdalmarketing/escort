const fs = require("fs");
const path = require("path");
const root = path.join("parasite-seo", "github");

const style = `
  body{font-family:Georgia,serif;max-width:760px;margin:2rem auto;padding:0 1rem;line-height:1.65;color:#1a1a1a;background:#fafafa}
  a{color:#0b57d0} h1{font-size:1.75rem} h2{font-size:1.25rem;margin-top:1.75rem;border-bottom:1px solid #ddd;padding-bottom:.35rem}
  table{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.95rem}
  th,td{border:1px solid #ddd;padding:.5rem .65rem;text-align:left}
  th{background:#f0f0f0} ul{padding-left:1.2rem} .muted{color:#666;font-size:.9rem}
  nav{font-size:.9rem;margin-bottom:1.5rem}
  footer{margin-top:2.5rem;padding-top:1rem;border-top:1px solid #ddd;font-size:.9rem;color:#555}
`;

function page(title, body) {
  return `<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${title}</title>
<style>${style}</style>
</head>
<body>
<nav><a href="./">Ana sayfa</a> · <a href="./sites.html">Siteler</a> · <a href="./bonus-hub.html">Bonus hub</a></nav>
${body}
<footer>
<p>Escort:
<a href="https://istanbullescort.devs.surf">istanbullescort.devs.surf</a> ·
<a href="https://ankaraescort.devs.surf">ankaraescort.devs.surf</a> ·
<a href="https://escort.scz.it.com">escort.scz.it.com</a></p>
<p>Telegram: <a href="https://t.me/heimdal_marketing">@heimdal_marketing</a></p>
</footer>
</body>
</html>`;
}

fs.writeFileSync(
  path.join(root, "index.html"),
  page(
    "Rehberler 2026",
    `
<h1>Rehberler 2026</h1>
<p>Guncel escort listeleri ve deneme bonusu / giris kaynaklari.</p>

<h2>Escort siteleri</h2>
<table>
<tr><th>Site</th><th>Sayfa</th><th>Link</th></tr>
<tr><td>Istanbul Escort</td><td><a href="./escort-istanbul.html">Rehber</a></td><td><a href="https://istanbullescort.devs.surf">istanbullescort.devs.surf</a></td></tr>
<tr><td>Ankara Escort</td><td><a href="./escort-ankara.html">Rehber</a></td><td><a href="https://ankaraescort.devs.surf">ankaraescort.devs.surf</a></td></tr>
<tr><td>Escort SCZ</td><td><a href="./escort-scz.html">Rehber</a></td><td><a href="https://escort.scz.it.com">escort.scz.it.com</a></td></tr>
</table>

<p><strong>Ilce rehberleri:</strong>
<a href="./beylikduzu.html">Beylikduzu</a> ·
<a href="./sariyer.html">Sariyer</a> ·
<a href="./sisli.html">Sisli</a> ·
<a href="./kocaeli.html">Kocaeli</a> ·
<a href="./yalova.html">Yalova</a> ·
<a href="./izmir-alsancak.html">Alsancak</a> ·
<a href="./ankara-kizilay.html">Kizilay</a> ·
<a href="./diyarbakir.html">Diyarbakir</a> ·
<a href="./mersin.html">Mersin</a> ·
<a href="./antalya.html">Antalya</a> ·
<a href="./bursa.html">Bursa</a>
</p>

<h2>Deneme bonusu &amp; guncel giris</h2>
<table>
<tr><th>Site</th><th>Sayfa</th><th>Direkt</th></tr>
<tr><td>denemebonus.fit</td><td><a href="./bonus-denemebonus.html">Rehber</a></td><td><a href="https://denemebonus.fit">Ac</a></td></tr>
<tr><td>eniyibonuslar.us.com</td><td><a href="./bonus-eniyibonuslar.html">Rehber</a></td><td><a href="https://eniyibonuslar.us.com">Ac</a></td></tr>
<tr><td>guncelgirisler.com</td><td><a href="./bonus-guncelgirisler.html">Rehber</a></td><td><a href="https://guncelgirisler.com">Ac</a></td></tr>
<tr><td>heimdal.us.com</td><td><a href="./bonus-heimdal.html">Rehber</a></td><td><a href="https://heimdal.us.com">Ac</a></td></tr>
<tr><td>purplepeakadventures.com</td><td><a href="./bonus-purplepeak.html">Rehber</a></td><td><a href="https://purplepeakadventures.com">Ac</a></td></tr>
<tr><td>scz.it.com</td><td><a href="./bonus-scz.html">Rehber</a></td><td><a href="https://scz.it.com">Ac</a></td></tr>
<tr><td>selas.eu.com</td><td><a href="./bonus-selas.html">Rehber</a></td><td><a href="https://selas.eu.com">Ac</a></td></tr>
<tr><td>wds.it.com</td><td><a href="./bonus-wds.html">Rehber</a></td><td><a href="https://wds.it.com">Ac</a></td></tr>
<tr><td>wsd.ae.org</td><td><a href="./bonus-wsd.html">Rehber</a></td><td><a href="https://wsd.ae.org">Ac</a></td></tr>
</table>

<p><a href="./bonus-hub.html"><strong>Deneme bonusu hub</strong></a> · <a href="./sites.html"><strong>Tum siteler</strong></a></p>
`
  )
);

fs.writeFileSync(
  path.join(root, "sites.html"),
  page(
    "Site dizini",
    `
<h1>Site dizini — tum backlink hedefleri</h1>
<h2>Escort</h2>
<ol>
<li><a href="https://istanbullescort.devs.surf">https://istanbullescort.devs.surf</a></li>
<li><a href="https://ankaraescort.devs.surf">https://ankaraescort.devs.surf</a></li>
<li><a href="https://escort.scz.it.com">https://escort.scz.it.com</a></li>
</ol>
<h2>Deneme bonusu / guncel giris</h2>
<ol>
<li><a href="https://denemebonus.fit">https://denemebonus.fit</a></li>
<li><a href="https://eniyibonuslar.us.com">https://eniyibonuslar.us.com</a></li>
<li><a href="https://guncelgirisler.com">https://guncelgirisler.com</a></li>
<li><a href="https://heimdal.us.com">https://heimdal.us.com</a></li>
<li><a href="https://purplepeakadventures.com">https://purplepeakadventures.com</a></li>
<li><a href="https://scz.it.com">https://scz.it.com</a></li>
<li><a href="https://selas.eu.com">https://selas.eu.com</a></li>
<li><a href="https://wds.it.com">https://wds.it.com</a></li>
<li><a href="https://wsd.ae.org">https://wsd.ae.org</a></li>
</ol>
`
  )
);

fs.writeFileSync(
  path.join(root, "bonus-hub.html"),
  page(
    "Deneme Bonusu Hub",
    `
<h1>Deneme Bonusu Hub 2026</h1>
<p>Guncel giris ve deneme bonusu kaynaklari.</p>
<table>
<tr><th>#</th><th>Site</th><th>Rehber</th></tr>
<tr><td>1</td><td><a href="https://denemebonus.fit">denemebonus.fit</a></td><td><a href="./bonus-denemebonus.html">Sayfa</a></td></tr>
<tr><td>2</td><td><a href="https://eniyibonuslar.us.com">eniyibonuslar.us.com</a></td><td><a href="./bonus-eniyibonuslar.html">Sayfa</a></td></tr>
<tr><td>3</td><td><a href="https://guncelgirisler.com">guncelgirisler.com</a></td><td><a href="./bonus-guncelgirisler.html">Sayfa</a></td></tr>
<tr><td>4</td><td><a href="https://heimdal.us.com">heimdal.us.com</a></td><td><a href="./bonus-heimdal.html">Sayfa</a></td></tr>
<tr><td>5</td><td><a href="https://selas.eu.com">selas.eu.com</a></td><td><a href="./bonus-selas.html">Sayfa</a></td></tr>
<tr><td>6</td><td><a href="https://scz.it.com">scz.it.com</a></td><td><a href="./bonus-scz.html">Sayfa</a></td></tr>
<tr><td>7</td><td><a href="https://wds.it.com">wds.it.com</a></td><td><a href="./bonus-wds.html">Sayfa</a></td></tr>
<tr><td>8</td><td><a href="https://wsd.ae.org">wsd.ae.org</a></td><td><a href="./bonus-wsd.html">Sayfa</a></td></tr>
<tr><td>9</td><td><a href="https://purplepeakadventures.com">purplepeakadventures.com</a></td><td><a href="./bonus-purplepeak.html">Sayfa</a></td></tr>
</table>
`
  )
);

function mdToHtmlLite(md) {
  let s = md.replace(/^---[\s\S]*?---\n/, "");
  s = s.replace(/^#\s+(.+)$/m, "<h1>$1</h1>");
  s = s.replace(/^##\s+(.+)$/gm, "<h2>$1</h2>");
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, u) => {
    let href = u;
    if (href.endsWith(".md")) href = href.replace(/\.md$/, ".html");
    return `<a href="${href}">${t}</a>`;
  });
  s = s.replace(/^\*\*(.+?)\*\*$/gm, "<p><strong>$1</strong></p>");
  s = s.replace(/^\- (.+)$/gm, "<li>$1</li>");
  s = s.replace(/(?:<li>[\s\S]*?<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`);
  s = s.replace(/^\d+\.\s+(.+)$/gm, "<li>$1</li>");
  s = s.replace(/^>\s*(.+)$/gm, '<p class="muted">$1</p>');
  s = s.replace(/^---$/gm, "<hr/>");
  s = s
    .split("\n")
    .map((line) => {
      const t = line.trim();
      if (!t || t.startsWith("<") || t.startsWith("|")) return line;
      return `<p>${line}</p>`;
    })
    .join("\n");
  s = s.replace(/(?:^\|.+\|\n?)+/gm, (block) => {
    const rows = block.trim().split("\n").filter((r) => !/^\|[\s\-:|]+\|$/.test(r));
    const htmlRows = rows.map((r, i) => {
      const cells = r.split("|").slice(1, -1).map((c) => c.trim());
      const tag = i === 0 ? "th" : "td";
      return "<tr>" + cells.map((c) => `<${tag}>${c}</${tag}>`).join("") + "</tr>";
    });
    return "<table>" + htmlRows.join("") + "</table>";
  });
  return s;
}

const mdFiles = fs.readdirSync(root).filter((f) => f.endsWith(".md") && f !== "DEPLOY.md");
for (const f of mdFiles) {
  const htmlName = f.replace(/\.md$/, ".html");
  if (htmlName === "index.html" || htmlName === "sites.html" || htmlName === "bonus-hub.html") continue;
  const md = fs.readFileSync(path.join(root, f), "utf8");
  const title = (md.match(/^#\s+(.+)$/m) || [, f])[1];
  fs.writeFileSync(path.join(root, htmlName), page(title, mdToHtmlLite(md)));
  console.log("html", htmlName);
}

fs.writeFileSync(path.join(root, ".nojekyll"), "");

fs.mkdirSync(path.join(root, ".github", "workflows"), { recursive: true });
fs.writeFileSync(
  path.join(root, ".github", "workflows", "pages.yml"),
  `name: Deploy GitHub Pages
on:
  push:
    branches: ["main", "master"]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .
      - id: deployment
        uses: actions/deploy-pages@v4
`
);

console.log("done");
