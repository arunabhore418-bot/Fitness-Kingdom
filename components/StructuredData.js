// Gym / HealthClub JSON-LD structured data for Fitness Kingdom.
// Rendered once in app/layout.js via a <script type="application/ld+json"> tag.

const BRAND_URL = 'https://fitnesskingdomsangli.com';
const PHONE = '+91-9765516918';

// Opening hours: 6 AM - 10 PM, all days.
const OPENING_HOURS_SPEC = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '06:00',
    closes: '22:00',
  },
];

const BRANCHES = [
  {
    name: 'Fitness Kingdom — Laxmi Mandir Road',
    streetAddress: 'Laxmi Mandir Road, Rukmini Plaza, Second Floor',
    addressLocality: 'Sangli',
    addressRegion: 'Maharashtra',
    postalCode: '416416',
    addressCountry: 'IN',
    hasMap: 'https://maps.app.goo.gl/QK3pncsiZ2mABz6a6',
    // geo coordinates unknown — leave undefined per instructions
  },
  {
    name: 'Fitness Kingdom — Near Bharti Hospital',
    streetAddress:
      'Arihant Blossom Building, 3rd & 4th Floor, Opposite Honda Showroom, Vijaynagar',
    addressLocality: 'Sangli',
    addressRegion: 'Maharashtra',
    postalCode: '416416',
    addressCountry: 'IN',
    hasMap: 'https://maps.app.goo.gl/Ky2CYgMgiBUeeJYA6',
  },
  {
    name: 'Fitness Kingdom — Kupwaad Fata',
    streetAddress: 'Siddhi Sahyadri Apartment, Kupwaad Fata',
    addressLocality: 'Sangli',
    addressRegion: 'Maharashtra',
    postalCode: '416416',
    addressCountry: 'IN',
    hasMap: 'https://maps.app.goo.gl/NE7igcKWpHuRTRaXA',
  },
  {
    name: 'Fitness Kingdom — Congress Bhavan',
    streetAddress: 'Congress Bhavan, Opposite Khandekar Library',
    addressLocality: 'Sangli',
    addressRegion: 'Maharashtra',
    postalCode: '416416',
    addressCountry: 'IN',
    hasMap: 'https://maps.app.goo.gl/U2TDcxXNAT1Fhv8KA',
  },
];

const buildBranchSchema = (b, i) => ({
  '@type': 'HealthClub',
  '@id': `${BRAND_URL}/#branch-${i + 1}`,
  name: b.name,
  url: BRAND_URL,
  telephone: PHONE,
  openingHoursSpecification: OPENING_HOURS_SPEC,
  address: {
    '@type': 'PostalAddress',
    streetAddress: b.streetAddress,
    addressLocality: b.addressLocality,
    addressRegion: b.addressRegion,
    postalCode: b.postalCode,
    addressCountry: b.addressCountry,
  },
  hasMap: b.hasMap,
  // If geo coordinates become available, add:
  // geo: { '@type': 'GeoCoordinates', latitude: '...', longitude: '...' }
});

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  '@id': `${BRAND_URL}/#organization`,
  name: 'Fitness Kingdom',
  alternateName: 'Fitness Kingdom Sangli',
  url: BRAND_URL,
  telephone: PHONE,
  priceRange: '₹₹',
  areaServed: {
    '@type': 'City',
    name: 'Sangli',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sangli',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
  },
  openingHoursSpecification: OPENING_HOURS_SPEC,
  sameAs: ['https://www.instagram.com/fitness_kingdomsangli/'],
  department: BRANCHES.map(buildBranchSchema),
  founder: {
    '@type': 'Person',
    name: 'Akash Rajput',
    jobTitle: 'Founder',
  },
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Next.js: use dangerouslySetInnerHTML so the JSON is inlined verbatim
      // (avoids React escaping / auto-quoting).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
