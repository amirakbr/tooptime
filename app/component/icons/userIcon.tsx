import { IIconProps } from "../toopitaLogo/interface";

const UserIcon = ({ width = 40, height = 40 }: IIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M8 13h8c1.71 0 3.15 1.28 3.35 2.98L20 21.5M8 13c-1.71 0-3.15 1.28-3.35 2.98L4 21.5M8 13v5c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-1"
      ></path>
      <circle cx="12" cy="6" r="4" stroke="black" strokeWidth="1.5"></circle>
    </svg>
  );
};
export default UserIcon;
