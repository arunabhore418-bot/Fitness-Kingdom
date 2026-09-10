// Robots policy for Fitness Kingdom
// Allows all crawlers, points to the sitemap.
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://fitnesskingdomsangli.com/sitemap.xml',
    host: 'https://fitnesskingdomsangli.com',
  };
}
