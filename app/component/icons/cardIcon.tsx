import { IIconProps } from '../toopitaLogo/interface';

const CardIcon = ({ width = 40, height = 40, color = 'white' }: IIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
      <path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M10 16.5H6M8 13.5H6"></path>
      <path
        stroke={color}
        strokeWidth="1.5"
        d="M14 15c0-.943 0-1.414.293-1.707C14.586 13 15.057 13 16 13c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C17.414 17 16.943 17 16 17c-.943 0-1.414 0-1.707-.293C14 16.414 14 15.943 14 15z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828M2 10h5m15 0H11"
      ></path>
    </svg>
  );
};

export default CardIcon;
