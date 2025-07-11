import './globals.css';

export const metadata = {
  title: 'Next.js App',
  description: 'A Next.js application with TypeScript, Tailwind CSS, and shadcn/ui',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}