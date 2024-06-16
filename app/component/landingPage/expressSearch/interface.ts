import { Control } from "react-hook-form";

export interface IExpressSearchForm {
  fieldName: string;
}

export interface ISearchByLocation {
  control: Control<IExpressSearchForm>;
}
