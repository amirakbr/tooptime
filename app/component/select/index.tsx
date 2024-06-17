import { Controller, FieldValues } from "react-hook-form";
import Select, { Options } from "react-select";
import { ISelect } from "./interface";

const SelectField = <TFieldValues extends FieldValues>({
  control,
  name,
  options,
  getOptionLabel,
  placeHolder,
}: ISelect<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <Select
          options={options}
          onChange={(val: any) => onChange(val.value)}
          getOptionLabel={getOptionLabel}
          value={options.find((c: any) => c.value === value)}
        />
      )}
    />
  );
};

export default SelectField;
