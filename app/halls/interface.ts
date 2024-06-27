import { Control } from "react-hook-form";

export interface IFiltersForm {
  citiesList: any;
  fieldsList: any;
  gender: any;
}

export interface IHallsListFilterConfig {
  label: string;
  name: string;
  items: {
    id: number;
    name: string;
    label: string;
  }[];
}

export interface IAccordionFilterProps {
  label: string;
  icon: (allProps: any) => JSX.Element;
  options: any[];
  control: Control<IFiltersForm>;
  name: keyof IFiltersForm;
}
