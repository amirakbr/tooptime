import { IIconProps } from '../toopitaLogo/interface';

const LocationIcon = ({ width = 40, height = 40, color = 'white' }: IIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.99961 11.6902C8.56367 11.6902 7.39961 10.5262 7.39961 9.09023C7.39961 7.65429 8.56367 6.49023 9.99961 6.49023C11.4355 6.49023 12.5996 7.65429 12.5996 9.09023C12.5996 10.5262 11.4355 11.6902 9.99961 11.6902Z"
        stroke="#17191C"
        stroke-width="1.5"
      />
      <path
        d="M16.9833 7.57435C15.3416 0.357684 4.64992 0.366018 3.01658 7.58268C2.05825 11.816 4.69158 15.3994 6.99992 17.616C8.67492 19.2327 11.3249 19.2327 13.0083 17.616C15.3082 15.3994 17.9416 11.8077 16.9833 7.57435Z"
        stroke="#17191C"
        stroke-width="1.5"
      />
    </svg>
  );
};

export default LocationIcon;
