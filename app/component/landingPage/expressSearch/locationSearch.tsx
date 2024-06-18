import Input from '../../input';
import Select from '../../select';
import FieldContainer from './fieldContainer';
import { ISearchByLocation } from './interface';

const LocationSearch = ({ control }: ISearchByLocation) => {
  return (
    <div className="grid grid-cols-3 gap-2 animate-appear">
      <FieldContainer>
        <Input
          control={control}
          name="fieldName"
          type="text"
          label="نام مکان"
          className="!bg-white p-1 rounded"
          placeHolder="نام یا بخشی از نام مکان..."
        />
      </FieldContainer>
      <FieldContainer>
        <Select control={control} name="fieldType" label="انتخاب شهر" options={[{ name: 'test', id: 'ok', tag: 'fd' }]} />
      </FieldContainer>
      <FieldContainer>
        <Select control={control} name="city" label="نوع مکان" options={[{ name: 'test', id: 'ok', tag: 'fd' }]} />
      </FieldContainer>
    </div>
  );
};

export default LocationSearch;
