'use client';

import { useState } from 'react';
import SearchCalendarIcon from '../../icons/searchCalendarIcon';
import FieldIcon from '../../icons/fieldIcon';
import { useForm } from 'react-hook-form';
import LocationSearch from './locationSearch';
import { IExpressSearchForm } from './interface';
import SearchIcon from '../../icons/searchIcon';
import TimeSheetSearch from './timeSheetSearch';
import { useRouter } from 'next/navigation';

const cityOptions = [{ name: 'مشهد', value: 1 }];
const fieldType = [
  { name: 'فوتبال', value: 0 },
  { name: 'فوتسال', value: 1 },
  { name: 'والیبال', value: 2 },
  { name: 'تنیس', value: 3 },
];

const tabConfig = [
  {
    value: 'timeSheet',
    name: 'جستجوی سانس',
    Icon: SearchCalendarIcon,
  },
  {
    value: 'location',
    name: 'جستجوی در مکان',
    Icon: FieldIcon,
  },
];

const ExpressSearch = () => {
  const [searchType, setSearchType] = useState<'timeSheet' | 'location'>('timeSheet');
  const { control, handleSubmit, reset } = useForm<IExpressSearchForm>({ defaultValues: {} });
  const router = useRouter();

  const handleSearch = handleSubmit((data) => {
    console.log(data, 'data');
    const { fieldName, fieldType, city, timeSlot, weekDay } = data;
    if (searchType === 'location') {
      router.push(`/hall?fieldName=${fieldName}&fieldType=${fieldType?.value}&city=${city?.value}`);
    } else {
      router.push(`/hall?timeSlot=${timeSlot?.value}&weekDay=${weekDay?.value}&fieldType=${fieldType?.value}&city=${city?.value}`);
    }
  });

  return (
    <div className="grid grid-rows-[1fr_auto] mt-4 rounded-lg overflow-hidden container mx-auto">
      <div className="grid grid-cols-1 xs:grid-cols-2 cursor-pointer">
        {tabConfig.map(({ Icon, name, value }) => (
          <div
            className={`flex gap-1 p-2 items-center transition-all before:content-[''] before:block 
                before:h-full before:w-1 before:rounded-full before:ml-2 before:transition-all
                ${searchType === value ? 'bg-peach before:bg-amber-800' : 'bg-peach/30 before:bg-transparent'}`}
            date-tabValue={value}
            onClick={({ currentTarget }: any) => {
              if (currentTarget) {
                reset();
                setSearchType(currentTarget.getAttribute('date-tabvalue'));
              }
            }}
          >
            <Icon width={20} height={20} />
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 grid-rows-[1fr_5rem] lg:grid-rows-1 lg:grid-cols-[4fr_1fr] items-center bg-peach/70 p-2 gap-0 lg:gap-4">
        {searchType === 'location' ? (
          <LocationSearch control={control} cityOptions={cityOptions} fieldType={fieldType} />
        ) : (
          <TimeSheetSearch control={control} cityOptions={cityOptions} fieldType={fieldType} />
        )}
        <button
          className="flex items-center justify-center gap-4 bg-white border-2 border-darkerPeach rounded-full h-1/2"
          type="button"
          role="search"
          onClick={handleSearch}
        >
          <span className="text-xl font-medium">جستجو</span>
          <span className="mb-1">
            <SearchIcon width={30} height={25} color="black" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ExpressSearch;
