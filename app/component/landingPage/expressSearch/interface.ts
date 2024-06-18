import { Control } from 'react-hook-form';

export interface IExpressSearchForm {
  fieldName: string;
  city: string;
  fieldType: string;
  weekDay: string;
  timeSlot: string;
}

export interface ISearchByLocation {
  control: Control<IExpressSearchForm>;
}
