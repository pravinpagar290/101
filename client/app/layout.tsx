import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '101 | Personal Training, Reimagined',
  description: 'Work with a real, dedicated coach at 101. Get custom workout plans for strength, endurance, and transformation — built around you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
