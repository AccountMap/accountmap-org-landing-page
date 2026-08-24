export const siteMetadata = {
  origin: 'https://accountmap.org',
  name: 'AccountMap',
  title: 'AccountMap — Visualize and manage your online accounts',
  description:
    'Open-source account management app for tracking login methods and viewing accounts in 3D, 2D, or list views.',
  locale: 'en_US',
  socialImagePath: '/screenshots/1.png'
} as const;

export const publicRoutes = ['/'] as const;

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, `${siteMetadata.origin}/`).toString();
}
