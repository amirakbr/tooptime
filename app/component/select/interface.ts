import { Control, FieldValues, Path } from "react-hook-form";

export interface ISelect<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  options: any;
  placeHolder?: string;
  getOptionLabel: (options: any) => string;
}
