import { IIconProps } from '../toopitaLogo/interface';

const SortIcon = ({ className = '', color = '#1C274C', width = 40, height = 40 }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24" className={`${className}`}>
      <path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M4 16h9M6 11h7M8 6h5"></path>
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 4v16l3-4"></path>
    </svg>
  );
};

export default SortIcon;
