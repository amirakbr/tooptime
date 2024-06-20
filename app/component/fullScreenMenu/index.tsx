'use client'

import Link from 'next/link';
import CloseIcon from '../icons/closeIcon';
import { INavbarConfig } from '../header/interface';

const FullScreenMenu = ({ navbarConfig, setIsMenuOpen }: { navbarConfig: INavbarConfig[]; setIsMenuOpen: (value: boolean) => void }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-dvh z-[100] bg-white/40 backdrop-blur-lg isolate aspect-video animate-menuAppearContainer">
      <div className="w-full h-full bg-slate-400/80 rounded-lg p-1 animate-menuAppearContent">
        <span
          className="p-2 rounded-full bg-white w-min block"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <CloseIcon width={35} height={35} />
        </span>
        <nav className="flex flex-col gap-3 w-full mt-4">
          {navbarConfig.map(({ link, name, Icon }) => (
            <Link
              className="flex items-center gap-2 relative bg-white rounded-full after:content-[' '] after:block after:absolute after:top-full after:right-0 after:w-0 after:border-b-2 after:border-b-slate-300 after:transition-all hover:after:w-full"
              href={link}
              title={`لینک ${name}`}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <span className="p-2 rounded-full w-min block">
                <Icon width={35} height={35} color="black" />
              </span>
              <span className="text-lg font-medium">{name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default FullScreenMenu;
