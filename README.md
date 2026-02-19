## Tolga Kurotglu — Portfolio

This is the source for **Tolga Kurotglu’s** portfolio site built with **Next.js (static export)**.

### Live site

Once GitHub Pages is configured to serve from the `gh-pages` branch, the site is available at:

- **Production URL:** `https://tolgakurt.github.io/my-portfolio/`

If that page 404s, check the **GitHub Pages** settings and the latest **Actions** run.

### How deployment works

- The **`main`** branch contains the Next.js source.
- A GitHub Actions workflow at `.github/workflows/deploy.yml`:
  - Runs on every push to `main`.
  - Builds the static site (`npm run build`, output in `out/`).
  - Publishes `out/` to the **`gh-pages`** branch using `peaceiris/actions-gh-pages`.
- GitHub Pages should be configured in **Settings → Pages** as:
  - **Source:** Deploy from a branch
  - **Branch:** `gh-pages`
  - **Folder:** `/` (root)

### Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser.

