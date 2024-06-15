import { IIconProps } from "../toopitaLogo/interface";

const SearchIcon = ({ width = 40, height = 40 }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="white"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M18.5 18.5L22 22M6.75 3.27a9.5 9.5 0 11-3.48 3.48"
      ></path>
    </svg>
  );
};

export default SearchIcon;
