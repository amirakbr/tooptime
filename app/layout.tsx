'use client';

import { Vazirmatn } from 'next/font/google';
import './globals.css';
import HeaderSection from './component/header/header';
import FooterSection from './component/footer/footer';

const vazirMatn = Vazirmatn({ subsets: ['arabic'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="bg-bodyBackGround">
      <body className={vazirMatn.className}>
        <div className="relative">
          <HeaderSection />
          {children}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
