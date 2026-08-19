import './globals.css';

export const metadata = {
  title: 'Fitness Kingdom — Premium Gym & Fitness Center in Sangli',
  description: 'Fitness Kingdom is a premium fitness destination with four branches across Sangli. Explore our locations, coaches, memberships, and start your fitness journey.',
  openGraph: {
    title: 'Fitness Kingdom — Premium Gym & Fitness Center in Sangli',
    description: 'Four locations. One Fitness Kingdom. Strength starts here.',
    type: 'website',
  },
  icons: {
    icon: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_fe50b5c6-2f00-431b-85b4-64f19ff342d6/artifacts/xuwtd4z9_Screenshot_2026-08-19_131312-removebg-preview.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
