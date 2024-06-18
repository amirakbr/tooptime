import Input from '../../input';
import Select from '../../select';
import FieldContainer from './fieldContainer';
import { ISearchByLocation } from './interface';

const TimeSheetSearch = ({ control }: ISearchByLocation) => {
  return (
    <div className="grid grid-cols-4 gap-2 animate-appear">
      <FieldContainer>
        <Select control={control} name="city" label="نوع مکان" options={[{ name: 'test', id: 'ok', tag: 'fd' }]} />
      </FieldContainer>
      <FieldContainer>
        <Select control={control} name="fieldType" label="انتخاب شهر" options={[{ name: 'test', id: 'ok', tag: 'fd' }]} />
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
        />
      </FieldContainer>
    </div>
  );
};

export default TimeSheetSearch;
