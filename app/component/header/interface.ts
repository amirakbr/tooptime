import { IIconProps } from '../toopitaLogo/interface';

export interface INavbarConfig {
  name: string;
  Icon: ({ width, height }: IIconProps) => JSX.Element;
  link: string;
}