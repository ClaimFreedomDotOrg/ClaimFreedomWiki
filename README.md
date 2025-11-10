# Claim Freedom Wiki

A GitHub Pages–powered knowledge base served at [claimfreedom.org](https://claimfreedom.org)

## 🚀 Quick Start

1. Ensure the repository is public (required for free GitHub Pages at a custom domain).
2. In the repo Settings → Pages:
   - Build source: `GitHub Actions` (recommended) or `Deploy from a branch` (main branch / root).
   - Custom domain: `claimfreedom.org`
   - Enforce HTTPS: check the box after DNS is verified.
3. DNS: Create the following records at your DNS provider for the apex domain:

   Type | Name | Value (GitHub Pages A records)
   ---- | ---- | ---------------------------------
   A    | @    | 185.199.108.153
   A    | @    | 185.199.109.153
   A    | @    | 185.199.110.153
   A    | @    | 185.199.111.153

   (Optional) If you want `www.claimfreedom.org` to redirect to apex:
   - CNAME | www | claimfreedom.org

4. Commit a `CNAME` file (already added) containing `claimfreedom.org`.
5. Push changes and wait for Pages to build (first build can take a few minutes).

## 🧱 Tech Stack

- GitHub Pages + Jekyll
- Remote theme: `just-the-docs/just-the-docs`
- Plugins: `jekyll-remote-theme`, `jekyll-sitemap`

## 📁 Structure

```text
/ (root)
  _config.yml        # Jekyll + theme config
  CNAME              # Custom domain binding
  index.md           # Home page
  
  docs/              # Core framework pages
    about.md
    the-hijacking.md
    ancient-warnings.md
    the-loop.md
    contributing.md
    license.md
    resources.md
  
  _practices/        # Meditation & dis-identification practices (collection)
    index.md
    observing-the-voice.md
    body-anchor.md
    [more practices...]
  
  _philosophy/       # Gnostic, Indigenous, Eastern concepts (collection)
    index.md
    gnostic-diagnosis.md
    [more philosophy pages...]
  
  _neuroscience/     # DMN research, epigenetics, studies (collection)
    index.md
    what-is-dmn.md
    [more neuroscience pages...]
  
  .github/workflows/ # CI/CD (Jekyll build, link check, markdown lint)
  404.md             # Not found page
  robots.txt         # Crawler directives
  Gemfile            # Ruby dependencies
  README.md
```

### Collections

The site uses **Jekyll collections** to organize content by category:

- **`_practices/`** → Rendered at `/practices/` (meditation, dis-identification methods)
- **`_philosophy/`** → Rendered at `/philosophy/` (Gnostic, Wetiko, Samsara concepts)
- **`_neuroscience/`** → Rendered at `/neuroscience/` (DMN research, epigenetics)

Add new pages to collections with front matter like:

```yaml
---
title: Your Page Title
nav_order: 1
---
```

Add new core docs pages under `docs/` with:

```yaml
---
layout: default
title: Your Page Title
nav_order: 10
---
```

Then commit & push—GitHub Pages rebuilds automatically.

## ✍️ Contributing

See `docs/contributing.md`.

## 🔐 Security / Privacy Considerations

This is static content only—no user data is collected. If you later add analytics, prefer a privacy‑respecting, self-hosted option (e.g., Plausible, Umami) and disclose it here.

## ♻️ License

Content: CC BY-SA 4.0 (see `docs/license.md`).

## 🛠 Local Preview (Optional)

If you want to run locally:

```bash
# Requires Ruby + Bundler installed
bundle init # if you later decide to manage a Gemfile
# (Not strictly needed since we use remote_theme)
# To preview with Docker instead:
# docker run --rm -p 4000:4000 -v "$PWD":/site bretfisher/jekyll jekyll serve --livereload
```

Visit <http://localhost:4000>

## ✅ Checklist After DNS Change

- [ ] A records propagate (check with `nslookup claimfreedom.org`)
- [ ] GitHub Pages shows a green "DNS check successful"
- [ ] HTTPS certificate issued (may take up to 30 min)
- [ ] Enforce HTTPS enabled

## 🧭 Next Ideas

- Add a logo (`/assets/images/logo.png`) and set `logo:` in `_config.yml`
- Add categories using collections
- Add tags and an index page
- Set up a lightweight GitHub Actions workflow to validate links
- Add a CONTRIBUTING.md at root (optionally linking to docs page)
