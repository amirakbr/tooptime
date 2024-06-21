import { IIconProps } from "../toopitaLogo/interface";

const ArrowUpIcon = ({
  className,
  color = "#1C274C",
  height = 100,
  width = 100,
}: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      className={`${className}`}
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 15l-7-6-1.75 1.5M5 15l2.333-2"
      ></path>
    </svg>
  );
};

export default ArrowUpIcon ; 