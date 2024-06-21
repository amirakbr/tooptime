import { IIconProps } from "../toopitaLogo/interface";

const FiltersIcon = ({
  className,
  color = "black",
  height = 80,
  width = 80,
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
        strokeWidth="1.5"
        d="M4 5h3m7 0h6m-6 0a2 2 0 10-4 0 2 2 0 004 0zm-4 7h6m0 0a2 2 0 104 0 2 2 0 00-4 0zM4 12h3m4 7h9M6 17a2 2 0 110 4 2 2 0 010-4z"
      ></path>
    </svg>
  );
};

export default FiltersIcon;
