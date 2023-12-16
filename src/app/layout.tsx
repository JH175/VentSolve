import type { Metadata } from 'next';
import { Maven_Pro } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const maven = Maven_Pro({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'dungBeetle',
  description: 'remove the BS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={maven.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
