import Input from '../../input';
import Select from '../../select';
import FieldContainer from './fieldContainer';
import { ISearchByLocation } from './interface';

const TimeSheetSearch = ({ control, cityOptions, fieldType }: ISearchByLocation) => {
  return (
    <div className="grid grid-cols-4 gap-2 animate-appear">
      <FieldContainer>
        <Select control={control} name="fieldName" label="نوع مکان" options={fieldType} required />
      </FieldContainer>
      <FieldContainer>
        <Select control={control} name="city" label="انتخاب شهر" options={cityOptions} required />
      </FieldContainer>
      <FieldContainer>
        <Select
          control={control}
          name="weekDay"
          label="روز هفته"
          options={[
            { name: 'شنبه', value: 'saturday' },
            { name: 'شنبه', value: 'saturday' },
            { name: 'شنبه', value: 'saturday' },
            { name: 'شنبه', value: 'saturday' },
            { name: 'شنبه', value: 'saturday' },
          ]}
          required
        />
      </FieldContainer>
      <FieldContainer>
        <Select
          control={control}
          name="timeSlot"
          label="بازه زمانی"
          options={[
            { name: '(03:00 - 11:00) صبح', value: 'saturday' },
            { name: '(03:00 - 11:00) صبح', value: 'saturday' },
            { name: '(03:00 - 11:00) صبح', value: 'saturday' },
            { name: '(03:00 - 11:00) صبح', value: 'saturday' },
            { name: '(03:00 - 11:00) صبح', value: 'saturday' },
            { name: '(03:00 - 11:00) صبح', value: 'saturday' },
          ]}
          required
        />
      </FieldContainer>
    </div>
  );
};

export default TimeSheetSearch;
