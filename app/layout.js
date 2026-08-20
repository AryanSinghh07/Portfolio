import './globals.css';

export const metadata = {
  title: 'Aryan Singh — Full Stack Developer & AI/ML Engineer',
  description:
    'Portfolio of Aryan Singh — Full Stack Developer & AI/ML Engineer building things that actually matter. From disease detection models for farmers to mental health chatbots.',
  keywords: ['Aryan Singh', 'Full Stack Developer', 'AI/ML Engineer', 'Portfolio', 'React', 'Next.js', 'Machine Learning'],
  openGraph: {
    title: 'Aryan Singh — Full Stack Developer & AI/ML Engineer',
    description: 'Building things that actually matter.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
