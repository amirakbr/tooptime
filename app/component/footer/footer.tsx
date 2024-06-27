import Link from 'next/link';
import ToopitaLogo from '../toopitaLogo';

const navbarConfig = [
  {
    name: 'درباره ما',

    link: '/aboutus',
  },
  {
    name: 'تماس با ما',

    link: '/contactus',
  },
  {
    name: 'ثبت مجموعه ورزشی',

    link: '/sportarena',
  },
  {
    name: 'فرایند خرید',

    link: '/reservefaq',
  },
];

const FooterSection = () => {
  return (
    <footer className="flex flex-col xs:flex-row gap-8 items-start xs:items-center justify-between bg-primary px-3 py-6 backdrop-blur-sm text-white mt-10 z-[1] relative">
      <Link href="/" title="صفحه اصلی" className="flex items-center justify-center gap-2 w-full xs:w-auto">
        <ToopitaLogo width={120} height={140} key="toopita logo" />
      </Link>
      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-bold">توپ تایم</h4>
          <p className="text-lg">ادرس: مشهد، بلوار صیاد شیرازی</p>
          <p className="text-lg">شماره تماس : 09308545585</p>
          <p className="text-sm">تمامی حقوق برای توپ تایم محفوظ است.</p>
        </div>
      </div>
      <nav className="flex flex-col  gap-2">
        {navbarConfig.map(({ link, name }) => (
          <Link
            className="flex item-center gap-2 relative after:content-[' '] after:block after:absolute after:top-full after:right-0 after:w-0 after:border-b-2 after:border-b-slate-300 after:transition-all hover:after:w-full"
            href={link}
            title={`لینک ${name}`}
          >
            <span>{name}</span>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default FooterSection;
