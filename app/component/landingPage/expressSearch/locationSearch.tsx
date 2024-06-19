import Input from '../../input';
import Select from '../../select';
import FieldContainer from './fieldContainer';
import { ISearchByLocation } from './interface';

const LocationSearch = ({ control, cityOptions, fieldType }: ISearchByLocation) => {
  return (
    <div className="grid grid-cols-3 gap-2 animate-appear">
      <FieldContainer>
        <Input
          control={control}
          name="fieldName"
          type="text"
          label="نام مکان"
          className="!bg-white p-1 !h-[38px] rounded"
          placeHolder="نام یا بخشی از نام مکان..."
          required
        />
      </FieldContainer>
      <FieldContainer>
        <Select control={control} name="city" label="انتخاب شهر" options={cityOptions} required />
      </FieldContainer>
      <FieldContainer>
        <Select control={control} name="fieldType" label="نوع مکان" options={fieldType} required />
      </FieldContainer>
    </div>
  );
};

export default LocationSearch;
