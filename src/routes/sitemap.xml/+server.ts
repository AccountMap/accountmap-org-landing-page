import type { RequestHandler } from './$types';
import { absoluteUrl, publicRoutes } from '$lib/site';

export const prerender = true;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: RequestHandler = () => {
  const urls = publicRoutes
    .map(
      (pathname) => `  <url>
    <loc>${escapeXml(absoluteUrl(pathname))}</loc>
  </url>`
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600'
      }
    }
  );
};
