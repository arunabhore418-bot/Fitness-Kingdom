// Sitemap for Fitness Kingdom — https://fitnesskingdomsangli.com
// This is a single-page site with in-page section anchors. We surface the
// homepage plus the most important section anchors so search engines can
// discover every logical section.

const BASE = 'https://fitnesskingdomsangli.com';

export default function sitemap() {
  const now = new Date();

  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/#branches`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/#membership`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/#gallery`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/#founder`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
