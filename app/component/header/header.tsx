import Link from "next/link";
import BookIcon from "../icons/bookIcon";
import CardIcon from "../icons/cardIcon";
import CollectionIcon from "../icons/collectionIcon";
import HomeIcon from "../icons/homeIcon";
import SearchIcon from "../icons/searchIcon";
import ToopitaLogo from "../toopitaLogo";

const navbarConfig = [
  {
    name: "خانه",
    Icon: HomeIcon,
    link: "/",
  },
  {
    name: "دسته بندی اماکن ورزشی",
    Icon: CollectionIcon,
    link: "/sportarena",
  },
  {
    name: "جستجوی پیشرفته",
    Icon: SearchIcon,
    link: "/sportarena",
  },
  {
    name: "آموزش رزرو",
    Icon: CardIcon,
    link: "/reservefaq",
  },
  {
    name: "بلاگ",
    Icon: BookIcon,
    link: "/blogs",
  },
];

const HeaderSection = () => {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" title="صفحه اصلی" className="flex items-center gap-2">
          <ToopitaLogo width={50} key="toopita logo" />
          <h1 className="text-2xl font-bold">توپ تایم</h1>
        </Link>

        <nav className="flex items-center gap-4">
          {navbarConfig.map(({ link, name, Icon }) => (
            <Link
              className="flex item-center gap-2 relative after:content-[' '] after:block after:absolute after:top-full after:right-0 after:w-0 after:border-b-2 after:border-b-slate-300 after:transition-all hover:after:w-full"
              href={link}
              title={`لینک ${name}`}
            >
              <Icon width={20} height={20} />
              <span>{name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;
