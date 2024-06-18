import { IIconProps } from '../toopitaLogo/interface';

const PriceIcon = ({ width = 40, height = 40, color = 'white' }: IIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4232_924)">
        <path
          d="M13.75 14.249V18.624L10 16.749L6.25 18.624V14.249"
          stroke="#17191C"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.4375 2.37402H8.5625C7.25 2.37402 6 3.06152 5.3125 4.24902L3.875 6.74902C3.1875 7.93652 3.1875 9.31152 3.875 10.499L5.3125 12.999C6 14.1865 7.25 14.874 8.5625 14.874H11.4375C12.75 14.874 14 14.1865 14.6875 12.999L16.125 10.499C16.8125 9.31152 16.8125 7.93652 16.125 6.74902L14.6875 4.24902C14 3.06152 12.8125 2.37402 11.4375 2.37402Z"
          stroke="#17191C"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path d="M10 6.12402V6.74902" stroke="#17191C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 10.499V11.124" stroke="#17191C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        <path
          d="M10.625 6.74902H9.6875C9.1875 6.74902 8.75 7.18652 8.75 7.68652C8.75 8.18652 9.1875 8.62402 9.6875 8.62402H10.3125C10.8125 8.62402 11.25 9.06152 11.25 9.56152C11.25 10.0615 10.8125 10.499 10.3125 10.499H9.375"
          stroke="#17191C"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4232_924">
          <rect width="20" height="20" fill="white" transform="translate(0 0.499023)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PriceIcon;
