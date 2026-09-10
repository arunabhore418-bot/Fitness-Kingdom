import './globals.css';
import StructuredData from '@/components/StructuredData';

export const metadata = {
  title: 'Fitness Kingdom - Best Premium Gym in Sangli',
  description: 'Fitness Kingdom is a premium fitness destination with four branches across Sangli. Explore our locations, coaches, memberships, and start your fitness journey.',
  openGraph: {
    title: 'Fitness Kingdom - Best Premium Gym in Sangli',
    description: 'Four locations. One Fitness Kingdom. Strength starts here.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
