import { Controller, ControllerFieldState, ControllerRenderProps, FieldValues, UseFormStateReturn } from 'react-hook-form';
import { IInput } from './interface';
import classes from './index.module.css';

const Input = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  type,
  required = false,
  placeHolder = '',
  className = '',
}: IInput<TFieldValues>) => {
  const validateInput = (value: any, values: TFieldValues): any => {
    if (required && !value) {
      return 'فیلد اجباری';
    } else {
      return true;
    }
  };
  return (
    <Controller
      control={control}
      name={name}
      rules={{ validate: validateInput }}
      render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
        <>
          <div className={`${invalid ? classes.invalid : ''} flex flex-col gap-1`}>
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
              value={value}
              onChange={onChange}
              className={`bg-transparent w-full border-2 border-transparent focus:border-blue-500 ${invalid ? 'error' : ''} ${className}`}
              placeholder={placeHolder}
            />
          </div>
          {invalid && <p className={classes.error}>{error?.message}</p>}
        </>
      )}
    />
  );
};
export default Input;
