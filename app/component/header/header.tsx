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
import HamburgerMenu from "./hamburgerMenu";
import { INavbarConfig } from "./interface";

const navbarConfig: INavbarConfig[] = [
  {
    name: "خانه",
    Icon: HomeIcon,
    link: "/",
  },
  // {
  //   name: 'دسته بندی اماکن ورزشی',
  //   Icon: CollectionIcon,
  //   link: '/sportarena',
  // },
  {
    name: "جستجوی پیشرفته",
    Icon: SearchIcon,
    link: "/halls",
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
    <header className="text-white relative z-50">
      <div className="flex items-center justify-between w-full bg-primary px-3 py-1 ">
        <div className="flex items-center gap-8">
          <Link href="/" title="صفحه اصلی" className="flex items-center gap-2">
            <ToopitaLogo
              width={60}
              height={60}
              key="toopita logo"
              className="!h-16 !w-16 md:w-auto md:h-auto"
            />
            <h1 className="text-2xl font-bold">توپ تایم</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-3">
            {navbarConfig.map(({ link, name, Icon }) => (
              <Link
                className="flex items-center gap-2 relative after:content-[' '] after:block after:absolute after:top-full after:right-0 after:w-0 after:border-b-2 after:border-b-slate-300 after:transition-all hover:after:w-full"
                href={link}
                title={`لینک ${name}`}
              >
                <Icon width={20} height={20} />
                <span>{name}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-1 md:gap-4 text-black">
          <Link
            href="tel:09308545585"
            className="flex items-center gap-2 rounded-full bg-white p-2 py-1 group cursor-pointer"
          >
            <span className="bg-slate-300 p-1 rounded-full -rotate-[20deg] group-hover:rotate-[0deg] transition-all">
              <HeadPhoneIcon width={20} height={20} />
            </span>
            <span className="mt-1">{convertToFarsiDigits("09308545585")}</span>
          </Link>
          <div className="flex gap-2 md:gap-4 items-center">
            <span className="bg-white p-1 rounded-full">
              <UserIcon width={25} height={25} />
            </span>
            <span className="bg-white p-1 rounded-full">
              <CartIcon width={25} height={25} />
            </span>
            <HamburgerMenu navbarConfig={navbarConfig} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
