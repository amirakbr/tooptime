import { Control, FieldValues, Path } from "react-hook-form";

export interface IInput<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  type: "text" | "checkbox";
  label?: string;
  required?: boolean;
  placeHolder?: string;
  className?: string;
}
