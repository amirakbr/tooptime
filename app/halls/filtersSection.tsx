"use client";

import { ReactNode, useState } from "react";
import FiltersIcon from "../component/icons/filtersIcon";
import Filters from "./filters/filters";
import { useForm, useFormState } from "react-hook-form";
import { IFiltersForm } from "./interface";

export const TextWithIconContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

const FiltersSection = () => {
  const [price, setPrice] = useState([100000, 6000000]);

  const { control, handleSubmit, watch, setValue } = useForm<IFiltersForm>({
    defaultValues: {
      endPrice: price[1],
      startPrice: price[0],
      gender: {
        female: false,
        male: false,
        mixed: false,
      },
      fieldsList: {
        tennis: false,
        futsall: false,
        football: false,
        volleyball: false,
      },
      citiesList: {
        mashhad: false,
      },
    },
  });

  const handleClick = handleSubmit((data) => {
    console.log(data, "data");
  });

  const { endPrice, startPrice } = watch();

  return (
    <div className="flex flex-col gap-2 border border-1 border-red-900 p-1">
      <div className="flex items-center justify-between">
        <TextWithIconContainer>
          <FiltersIcon width={20} height={25} color="black" />
          <span className="font-medium text-lg">فیلترها</span>
        </TextWithIconContainer>
        <span className="text-red-500 p-2 border-1 border-red-500 rounded-lg text-sm">
          حذف فیلتر ها
        </span>
      </div>
      <Filters
        control={control}
        endPrice={endPrice}
        startPrice={startPrice}
        handleSubmitFilters={() => {}}
        price={price}
        setValue={setValue}
      />
    </div>
  );
};

export default FiltersSection;
