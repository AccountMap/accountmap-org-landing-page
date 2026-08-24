import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readBuildFile = (pathname) =>
  readFile(new URL(`../build/${pathname}`, import.meta.url), 'utf8');

test('build emits complete metadata for the landing page', async () => {
  const html = await readBuildFile('index.html');

  assert.match(html, /<title>AccountMap — Visualize and manage your online accounts<\/title>/);
  assert.match(html, /<meta name="description" content="[^"]{50,160}"\s*\/?>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/accountmap\.org\/"\s*\/?>/);
  assert.match(html, /<meta property="og:title" content="[^"]+"\s*\/?>/);
  assert.match(html, /<meta property="og:description" content="[^"]+"\s*\/?>/);
  assert.match(html, /<meta property="og:url" content="https:\/\/accountmap\.org\/"\s*\/?>/);
  assert.match(html, /<meta name="twitter:card" content="summary_large_image"\s*\/?>/);
});

test('build emits one canonical URL in a valid sitemap document', async () => {
  const sitemap = await readBuildFile('sitemap.xml');

  assert.match(sitemap, /^<\?xml version="1\.0" encoding="UTF-8"\?>/);
  assert.match(sitemap, /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);
  assert.match(sitemap, /<loc>https:\/\/accountmap\.org\/<\/loc>/);
  assert.doesNotMatch(sitemap, /<!doctype html>/i);
  assert.equal((sitemap.match(/<loc>/g) ?? []).length, 1, 'sitemap must not contain duplicate URLs');
});

test('build emits crawler rules that point to the sitemap', async () => {
  const robots = await readBuildFile('robots.txt');

  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /^Sitemap: https:\/\/accountmap\.org\/sitemap\.xml$/m);
  assert.doesNotMatch(robots, /<!doctype html>/i);
});
