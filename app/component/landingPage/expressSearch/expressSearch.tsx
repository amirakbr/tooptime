'use client';

import { useState } from 'react';
import SearchCalendarIcon from '../../icons/searchCalendarIcon';
import FieldIcon from '../../icons/fieldIcon';
import { useForm } from 'react-hook-form';
import LocationSearch from './locationSearch';
import { IExpressSearchForm } from './interface';
import SearchIcon from '../../icons/searchIcon';
import TimeSheetSearch from './timeSheetSearch';

const ExpressSearch = () => {
  const [searchType, setSearchType] = useState<'timeSheet' | 'location'>('timeSheet');
  const { control } = useForm<IExpressSearchForm>();

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
  return (
    <div className="grid grid-rows-[1fr_auto] mt-4 rounded-lg overflow-hidden container mx-auto">
      <div className="grid grid-cols-2 cursor-pointer">
        {tabConfig.map(({ Icon, name, value }) => (
          <div
            className={`flex gap-1 p-2 items-center transition-all before:content-[''] before:block 
                before:h-full before:w-1 before:rounded-full before:ml-2 before:transition-all
                ${searchType === value ? 'bg-peach before:bg-amber-800' : 'bg-peach/30 before:bg-transparent'}`}
            date-tabValue={value}
            onClick={({ currentTarget }: any) => {
              if (currentTarget) {
                setSearchType(currentTarget.getAttribute('date-tabvalue'));
              }
            }}
          >
            <Icon width={20} height={20} />
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[4fr_1fr] items-center bg-peach/70 p-2 gap-4">
        {searchType === 'location' ? <LocationSearch control={control} /> : <TimeSheetSearch control={control} />}
        <button
          className="flex items-center justify-center gap-4 bg-white border-2 border-darkerPeach rounded-full h-1/2"
          type="button"
          role="search"
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
