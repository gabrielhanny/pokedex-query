import clsx from 'clsx';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Navbar from '@/components/Navbar';

import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'PokeDex Query',
  description:
    'Modern Pokedex app built with React, TypeScript, Redux, and TanStack Query',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={clsx(poppins.variable, 'antialiased')}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
