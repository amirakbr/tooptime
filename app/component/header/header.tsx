import Link from "next/link";
import BookIcon from "../icons/bookIcon";
import CardIcon from "../icons/cardIcon";
import CollectionIcon from "../icons/collectionIcon";
import HomeIcon from "../icons/homeIcon";
import SearchIcon from "../icons/searchIcon";
import ToopitaLogo from "../toopitaLogo";
import { convertToFarsiDigits } from "@/app/utils/formatNumber";
import HeadPhoneIcon from "../icons/headPhoneIcon";
import UserIcon from "../icons/userIcon";
import CartIcon from "../icons/cartIcon";

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
    <header className="flex items-center justify-between bg-primary/90 px-3 py-1 backdrop-blur-sm	text-white">
      <div className="flex items-center gap-8">
        <Link href="/" title="صفحه اصلی" className="flex items-center gap-2">
          <ToopitaLogo width={40} height={50} key="toopita logo" />
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
      <div className="flex items-center gap-4 text-black">
        <Link
          href="tel:09308545585"
          className="flex items-center gap-2 rounded-full bg-white p-2 py-1 group cursor-pointer"
        >
          <span className="bg-slate-300 p-1 rounded-full -rotate-[20deg] group-hover:rotate-[0deg] transition-all">
            <HeadPhoneIcon width={20} height={20} />
          </span>
          <span className="mt-1">{convertToFarsiDigits("09308545585")}</span>
        </Link>
        <span className="bg-white p-1 rounded-full">
          <UserIcon width={25} height={25} />
        </span>
        <span className="bg-white p-1 rounded-full">
          <CartIcon width={25} height={25} />
        </span>
      </div>
    </header>
  );
};

export default HeaderSection;
