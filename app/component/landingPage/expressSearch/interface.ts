import { Control } from 'react-hook-form';

export interface IExpressSearchForm {
  fieldName: string;
  city: {
    name: string;
    value: number;
  };
  fieldType: {
    name: string;
    value: number;
  };
  weekDay: {
    name: string;
    value: number;
  };
  timeSlot: {
    name: string;
    value: number;
  };
}

export interface ISearchByLocation {
  control: Control<IExpressSearchForm>;
  cityOptions: {
    name: string;
    value: number;
  }[];
  fieldType: {
    name: string;
    value: number;
  }[];
}
