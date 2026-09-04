# GitHub Pages — 404 FIX

## Yanlis URL

```
https://heimdalmarketing.github.io/escort/index.md   ← 404 (Pages .md sunmaz)
```

## Dogru URL

```
https://heimdalmarketing.github.io/escort/
https://heimdalmarketing.github.io/escort/index.html
https://heimdalmarketing.github.io/escort/sites.html
```

## Ne yapmalisin (escort reposu)

1. Bu klasordeki dosyalari **repo kokune** koy (docs/ DEGIL):

```text
index.html          ← ZORUNLU
.nojekyll           ← ZORUNLU (Jekyll kapali)
sites.html
bonus-hub.html
*.html (tum sayfalar)
.github/workflows/pages.yml
```

2. Settings → Pages:
   - Source: **GitHub Actions**
   - veya Branch `main` → Folder **`/` (root)**

3. Push:

```bash
cd /path/to/escort
# parasite-seo/github/ icinden kopyala:
# index.html .nojekyll sites.html bonus-*.html escort-*.html beylikduzu.html ... 
# .github/workflows/pages.yml

git add -A
git commit -m "Static Pages: index.html + .nojekyll"
git push
```

4. 1-2 dk bekle → ac:

**https://heimdalmarketing.github.io/escort/**

## Hizli test

Kokte su iki dosya olmali:
- `index.html`
- `.nojekyll`

Yoksa 404 alirsin.
