'use client';
import './globals.css';
import HeaderSection from './component/header/header';
import FooterSection from './component/footer/footer';

export default function RootLayout({
  children,
  discountersSalonsHall,
  popularSalonsHall,
}: Readonly<{
  children: React.ReactNode;
  discountersSalonsHall: React.ReactNode;
  popularSalonsHall: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="bg-bodyBackGround">
      <body className="min-h-dvh">
        <div className="relative">
          <HeaderSection />
          {children}
          <div className="flex flex-col gap-4">
            {discountersSalonsHall}
            {popularSalonsHall}
          </div>
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
