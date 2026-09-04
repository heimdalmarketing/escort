# GitHub Pages deploy — BUILD FIX

## Hata (senin log)

```
No such file or directory @ dir_chdir0 - /github/workspace/docs
Configuration file: none
Theme: jekyll-theme-primer
Source: ./docs
```

**Sebep:** Pages `/docs` klasorunden Jekyll build ediyor; tema SCSS `docs` path'inde patliyor.
Ayrica remote'da `_config.yml` yok gibi (`Configuration file: none`).

## Cozum (onerilen) — repo KOKU

1. `escort` repo'sunda **Settings → Pages**:
   - Source: **GitHub Actions** (asagidaki workflow)
   - veya Branch: `main` → Folder: **`/` (root)** — `/docs` DEGIL

2. Eski `/docs` icerigini sil veya bosalt; dosyalari **repo kokune** koy:

```bash
# Lokal paket:
cd parasite-seo/github

# escort repo klasorunde (ornek):
cp _config.yml index.md sites.md bonus-*.md escort-*.md \
   beylikduzu.md sariyer.md sisli.md kocaeli.md yalova.md \
   izmir-alsancak.md ankara-kizilay.md diyarbakir.md mersin.md \
   antalya.md bursa.md \
   /path/to/escort/

mkdir -p /path/to/escort/.github/workflows
cp .github/workflows/pages.yml /path/to/escort/.github/workflows/

cd /path/to/escort
git add -A
git commit -m "Fix Pages: build from root, not docs"
git push
```

3. Actions sekmesinde workflow yesil olmali.
4. Site: `https://KULLANICI.github.io/escort/`

## Alternatif — Jekyll kapali (en basit)

Repo kokune bos dosya:

```
.nojekyll
```

Sonra Settings → Pages → Branch `main` → `/` (root).

Markdown HTML'e cevrilmez; ham `.md` gorunur. Backlink icin yine de calisir (Google linkleri tarar). Index icin `index.html` ekle (asagida).

## Domain listesi (backlink)

Escort: istanbullescort.devs.surf · ankaraescort.devs.surf · escort.scz.it.com  
Bonus: denemebonus.fit · eniyibonuslar.us.com · guncelgirisler.com · heimdal.us.com · purplepeakadventures.com · scz.it.com · selas.eu.com · wds.it.com · wsd.ae.org

Hub: `index.md` · `sites.md` · `bonus-hub.md`
