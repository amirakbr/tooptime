import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import { IInput } from "./interface";

const Input = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  type,
  required = false,
  placeHolder = "",
  className = "",
}: IInput<TFieldValues>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => (
        <div className="flex flex-col gap-1">
          {label ? (
            <label htmlFor={name} className="flex gap-1">
              {required ? <span className="text-red-500">*</span> : null}
              {label} :
            </label>
          ) : null}
          <input
            id={name}
            name={name}
            type={type}
            className={`bg-transparent ${className}`}
            placeholder={placeHolder}
          />
        </div>
      )}
    />
  );
};
export default Input;
