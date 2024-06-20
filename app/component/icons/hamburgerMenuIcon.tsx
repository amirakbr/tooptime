import { IIconProps } from '../toopitaLogo/interface';

const HamburgerMenuIcon = ({ className, color = '#1C274C', height = 50, width = 50 }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
      <path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M4 7h3m13 0h-9M20 17h-3M4 17h9M4 12h16"></path>
    </svg>
  );
};

export default HamburgerMenuIcon;
