# AccountMap org landing page

SvelteKit + Svelte 5 + Tailwind CSS v4 landing page (Clipboardee-style template).

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Deploy to Cloudflare Pages (accountmap.org)

This project is set up for [Cloudflare Pages](https://developers.cloudflare.com/pages/) with the [GitHub integration](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/).

1. **Connect the repo**: In [Cloudflare Dashboard](https://dash.cloudflare.com) go to **Workers & Pages → Create application → Pages → Connect to Git**. Choose this GitHub repo and authorize Cloudflare. (If you were previously on GitHub Pages, turn it off in the repo **Settings → Pages** to avoid duplicate deployments.)
2. **Build settings** (usually auto-detected; set manually if needed):
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Root directory:** (leave empty)
   - **Node.js version:** 20 (optional; repo includes `.nvmrc`)
3. **Deploy**: Save the project. Every push to `main` (and optional previews for PRs) will trigger a build and deploy.
4. **Custom domain**: In the Pages project, go to **Custom domains** and add `accountmap.org`. Follow Cloudflare’s DNS instructions (CNAME or proxy).
5. **Site URL**: The site will be at **https://accountmap.org** (and the default `*.pages.dev` URL until the custom domain is set).

## Customization

- **Favicon**: Replace `static/favicon.svg` or add `static/favicon.png` and update `app.html` and the header logo in `src/routes/+page.svelte`.
- **Content**: Edit `src/routes/+page.svelte` for copy, repo links, video embed, and feature blocks.
- **Download links**: When builds are available, switch the download buttons from `alert()` to `<a href={winLink}>` / `<a href={macLink}>` using the existing `os`, `winLink`, and `macLink` variables.
