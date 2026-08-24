import type { RequestHandler } from './$types';
import { absoluteUrl } from '$lib/site';

export const prerender = true;

export const GET: RequestHandler = () =>
  new Response(`User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
