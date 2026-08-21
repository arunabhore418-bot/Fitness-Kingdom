import './globals.css';

export const metadata = {
  title: 'Fitness Kingdom - Best Premium Gym in Sangli',
  description: 'Fitness Kingdom is a premium fitness destination with four branches across Sangli. Explore our locations, coaches, memberships, and start your fitness journey.',
  openGraph: {
    title: 'Fitness Kingdom - Best Premium Gym in Sangli',
    description: 'Four locations. One Fitness Kingdom. Strength starts here.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_gym-sangli/artifacts/loq4w8k4_ChatGPT_Image_Aug_21__2026__10_52_16_AM-removebg-preview.png', sizes: '16x16', type: 'image/png' },
      { url: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_gym-sangli/artifacts/loq4w8k4_ChatGPT_Image_Aug_21__2026__10_52_16_AM-removebg-preview.png', sizes: '32x32', type: 'image/png' },
      { url: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_gym-sangli/artifacts/loq4w8k4_ChatGPT_Image_Aug_21__2026__10_52_16_AM-removebg-preview.png', sizes: '48x48', type: 'image/png' },
      { url: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_gym-sangli/artifacts/loq4w8k4_ChatGPT_Image_Aug_21__2026__10_52_16_AM-removebg-preview.png', sizes: '96x96', type: 'image/png' },
      { url: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_gym-sangli/artifacts/loq4w8k4_ChatGPT_Image_Aug_21__2026__10_52_16_AM-removebg-preview.png', sizes: '192x192', type: 'image/png' },
      { url: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_gym-sangli/artifacts/loq4w8k4_ChatGPT_Image_Aug_21__2026__10_52_16_AM-removebg-preview.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_gym-sangli/artifacts/loq4w8k4_ChatGPT_Image_Aug_21__2026__10_52_16_AM-removebg-preview.png',
    apple: [
      { url: 'https://customer-assets-gfyr7b9c.emergentagent.net/job_gym-sangli/artifacts/loq4w8k4_ChatGPT_Image_Aug_21__2026__10_52_16_AM-removebg-preview.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
