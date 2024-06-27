import { Control, UseFormSetValue, UseFormClearErrors } from "react-hook-form";

export interface IFiltersForm {
  citiesList: any;
  fieldsList: any;
  gender: any;
  startPrice: number;
  endPrice: number;
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
  name: Exclude<keyof IFiltersForm, "startPrice" | "endPrice">;
}

export interface IFiltersProps {
  price: number[];
  setValue: UseFormSetValue<IFiltersForm>;
  control: Control<IFiltersForm>;
  startPrice: number;
  endPrice: number;
  handleSubmitFilters: () => void;
}
