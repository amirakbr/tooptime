import { IIconProps } from "../toopitaLogo/interface";

const CartIcon = ({ width = 40, height = 40 }: IIconProps) => {
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
        strokeWidth="1.5"
        d="M7.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM16.5 18a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      ></path>
      <path
        stroke="black"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2 3l.261.092c1.302.457 1.953.686 2.325 1.231.372.545.372 1.268.372 2.715V9.76c0 2.942.063 3.912.93 4.826.866.914 2.26.914 5.05.914H12m4.24 0c1.561 0 2.342 0 2.894-.45.551-.45.709-1.214 1.024-2.743l.5-2.424c.347-1.74.52-2.609.076-3.186-.443-.577-1.96-.577-3.645-.577h-6.065m-6.066 0H7"
      ></path>
    </svg>
  );
};
export default CartIcon;
