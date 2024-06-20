'use client';

import { useState } from 'react';
import HamburgerMenuIcon from '../icons/hamburgerMenuIcon';
import FullScreenMenu from '../fullScreenMenu';
import { IIconProps } from '../toopitaLogo/interface';
import { INavbarConfig } from './interface';

const HamburgerMenu = ({ navbarConfig }: { navbarConfig: INavbarConfig[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="block md:!hidden bg-white p-1 rounded-full" aria-label="منو" onClick={() => setIsMenuOpen(true)}>
        <HamburgerMenuIcon width={25} height={25} />
      </div>
      {isMenuOpen ? <FullScreenMenu navbarConfig={navbarConfig} setIsMenuOpen={setIsMenuOpen}/> : null}
    </>
  );
};
export default HamburgerMenu;
