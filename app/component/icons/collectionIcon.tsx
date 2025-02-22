import { IIconProps } from "../toopitaLogo/interface";

const CollectionIcon = ({ width = 40, height = 40 , color="white" }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M20 7H4M15 12H4M9 17H4"
      ></path>
    </svg>
  );
};

export default CollectionIcon ; 