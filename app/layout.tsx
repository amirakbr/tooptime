'use client';
import './globals.css';
import HeaderSection from './component/header/header';
import FooterSection from './component/footer/footer';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function RootLayout({
  children,
  discountersSalonsHall,
  popularSalonsHall,
}: Readonly<{
  children: React.ReactNode;
  discountersSalonsHall: React.ReactNode;
  popularSalonsHall: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <html lang="fa-IR" dir="rtl" className="bg-bodyBackGround h-full">
      <body className="h-full">
        <div className="relative h-full flex flex-col">
          <HeaderSection />
          {children}
          {pathName === '/' ? (
            <div className="flex flex-col justify-evenly gap-8 mt-10 h-full">
              {discountersSalonsHall}
              {popularSalonsHall}
            </div>
          ) : null}
          <FooterSection />
        </div>
      </body>
    </html>
  );
}
