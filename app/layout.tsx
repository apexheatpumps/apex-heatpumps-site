import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apex Heat Pumps BC | Up to $24,500 in Rebates',
  description:
    "British Columbia's premier heat pump installation company. Get up to $24,500 in government rebates. Free consultation and quote.",
  keywords: ['heat pump', 'BC rebates', 'CleanBC', 'energy efficiency', 'Vancouver heat pump', 'Victoria heat pump'],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.apexheatpumpsbc.ca',
    siteName: 'Apex Heat Pumps BC',
    title: 'Apex Heat Pumps BC | Up to $24,500 in Rebates',
    description:
      "British Columbia's premier heat pump installation company. Get up to $24,500 in government rebates. Free consultation and quote.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
