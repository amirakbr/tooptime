import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
} from "react-hook-form";
import { IInput } from "./interface";
import classes from "./index.module.css";

const CheckBox = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  type,
  required = false,
  placeHolder = "",
  className = "",
}: IInput<TFieldValues>) => {
  const validateInput = (value: any, values: TFieldValues): any => {
    if (required && !value) {
      return "فیلد اجباری";
    } else {
      return true;
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={{ validate: validateInput }}
      render={({
        field: { value, onChange },
        fieldState: { invalid, error },
      }) => (
        <>
          <div
            className={`${
              invalid ? classes.invalid : ""
            } flex items-center gap-2`}
          >
            <input
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              className={`bg-transparent w-auto border-2 border-transparent focus:border-blue-500 ${
                invalid ? "error" : ""
              } ${className}`}
              placeholder={placeHolder}
            />
            {label ? (
              <label htmlFor={name} className="flex gap-1">
                {required ? <span className="text-red-500">*</span> : null}
                {label}
              </label>
            ) : null}
          </div>
          {invalid && <p className={classes.error}>{error?.message}</p>}
        </>
      )}
    />
  );
};
export default CheckBox;
