export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/about',
    },
    sitemap: 'https://rahmacc.com/sitemap.xml',
  };
}