import { Control, FieldValues, Path } from 'react-hook-form';

const directions = ['rtl', 'ltr'] as const;

export interface ISelectProps<TData extends FieldValues, TOption> {
  control: Control<TData>;
  name: Path<TData>;
  label?: string;
  options: TOption[];
  direction?: (typeof directions)[number];
  placeholder?: string;
  className?: string;
  multiple?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  loading?: boolean;
  validate?: (value: any, values: { [key in keyof Path<TData>]?: any }) => boolean | string;
  searchMinimumOptionCount?: number;
  optionMapper?: (option: TOption) => ISelectOption;
}

export interface ISelectOption {
  label: string;
  value: string | number;
  tags?: string[];
}
