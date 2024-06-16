import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import HeaderSection from "./component/header/header";

const vazirMatn = Vazirmatn({ subsets: ["arabic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="bg-bodyBackGround">
      <body className={vazirMatn.className}>
        <div className="relative container mx-auto">
          <HeaderSection />
          {children}
        </div>
      </body>
    </html>
  );
}
