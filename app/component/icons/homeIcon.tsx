import { IIconProps } from '../toopitaLogo/interface';

const HomeIcon = ({ width = 40, height = 40, color = 'white' }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
      <path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M21.636 12.958l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"
      ></path>
    </svg>
  );
};

export default HomeIcon;
