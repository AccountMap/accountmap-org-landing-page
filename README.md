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

## Deploy to GitHub Pages (accountmap.org)

1. **Enable GitHub Pages**: In the repo, go to **Settings → Pages**. Under "Build and deployment", set **Source** to **GitHub Actions**.
2. **Custom domain**: In the same Pages settings, set **Custom domain** to `accountmap.org` (and add the CNAME / DNS records as GitHub instructs).
3. **Push to `main`**: The workflow in `.github/workflows/deploy.yml` runs on every push to `main` and deploys the built site to the root of the domain.
4. **Site URL**: The site will be at **https://accountmap.org**.

## Customization

- **Favicon**: Replace `static/favicon.svg` or add `static/favicon.png` and update `app.html` and the header logo in `src/routes/+page.svelte`.
- **Content**: Edit `src/routes/+page.svelte` for copy, repo links, video embed, and feature blocks.
- **Download links**: When builds are available, switch the download buttons from `alert()` to `<a href={winLink}>` / `<a href={macLink}>` using the existing `os`, `winLink`, and `macLink` variables.
