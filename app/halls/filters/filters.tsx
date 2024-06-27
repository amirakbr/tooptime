"use client";

import Accordion from "@/app/component/accordion/accordion";
import { citiesList, fieldsList, genderList } from "./filtersConfig";
import { TextWithIconContainer } from "../filtersSection";
import {
  Buildings,
  MoneyBag,
  PointOnMap,
  UsersGroupTwoRounded,
} from "solar-icon-set";

import { useForm } from "react-hook-form";
import CheckBox from "@/components/checkBox";
import {
  IAccordionFilterProps,
  IFiltersForm,
  IFiltersProps,
} from "../interface";
import { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import { ThousandsSeprator } from "@/app/utils/thousandsSeprator";

const AccordionFilter = ({
  label,
  icon: Icon,
  options,
  control,
  name: FormName,
}: IAccordionFilterProps) => {
  return (
    <Accordion
      headerComponent={
        <TextWithIconContainer>
          <Icon className="!w-6 !h-6" color="black" iconStyle="Bold" />
          <span className="font-medium text-lg">{label}</span>
        </TextWithIconContainer>
      }
      bodyComponent={
        <>
          {options.map(({ label, name }:any) => (
            <CheckBox
              control={control}
              name={`${FormName}.${name}`}
              type="checkbox"
              label={label}
            />
          ))}{" "}
        </>
      }
    />
  );
};

const Filters = ({
  price,
  setValue,
  control,
  startPrice,
  endPrice,
  handleSubmitFilters,
}: IFiltersProps) => {
  const sliderRef = useRef<any>(null);
  useEffect(() => {
    if (sliderRef.current) {
      noUiSlider.create(sliderRef.current, {
        start: price,
        connect: true,
        range: {
          min: price[0],
          max: price[1],
        },
        step: 10000,
        direction: "rtl",
      });

      sliderRef.current.noUiSlider.on("update", (values: typeof price) => {
        setValue("startPrice", Number(values[0]), { shouldDirty: true });
        setValue("endPrice", Number(values[1]), { shouldDirty: true });
      });
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, [price]);

  return (
    <>
      <AccordionFilter
        control={control}
        icon={PointOnMap}
        label={citiesList.label}
        options={citiesList.items}
        name="citiesList"
      />
      <AccordionFilter
        control={control}
        icon={Buildings}
        label={fieldsList.label}
        options={fieldsList.items}
        name="fieldsList"
      />
      <AccordionFilter
        control={control}
        icon={UsersGroupTwoRounded}
        label={genderList.label}
        options={genderList.items}
        name="gender"
      />
      <Accordion
        bodyComponent={
          <div className="px-3 flex flex-col gap-1 relative pb-3">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <span className="text-sm">از</span>
                <span className="font-medium text-base">
                  {ThousandsSeprator(startPrice)}
                </span>
                <span className="text-sm">تومان</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">تا</span>
                <span className="font-medium text-base">
                  {ThousandsSeprator(endPrice)}
                </span>
                <span className="text-sm">تومان</span>
              </div>
            </div>
            <div className="relative">
              <div ref={sliderRef} className="slider relative -right-0.5" />
              <div className="absolute h-2 top-9 left-1 w-[100%]">
                <span className="absolute right-0 top-0 h-2 w-0.5 bg-slate-600"></span>
                <span className="absolute right-[20%] top-0 h-2 w-0.5 bg-slate-600"></span>
                <span className="absolute right-[40%] top-0 h-2 w-0.5 bg-slate-600"></span>
                <span className="absolute right-[60%] top-0 h-2 w-0.5 bg-slate-600"></span>
                <span className="absolute right-[80%] top-0 h-2 w-0.5 bg-slate-600"></span>
                <span className="absolute right-full top-0 h-2 w-0.5 bg-slate-600"></span>
              </div>
              <div className="absolute flex items-center justify-between top-10 w-full">
                <span className="text-[0.6rem] -mr-2">ارزان ترین</span>
                <span className="text-[0.6rem] -ml-2">گران ترین</span>
              </div>
            </div>
          </div>
        }
        headerComponent={
          <TextWithIconContainer>
            <MoneyBag className="!w-6 !h-6" color="black" iconStyle="Bold" />
            <p className="font-medium text-lg">
              محدوده قیمت <span className="text-sm">(تومان)</span>
            </p>
          </TextWithIconContainer>
        }
      />
      <button onClick={handleSubmitFilters} type="submit">
        fsdfsdf
      </button>
    </>
  );
};
export default Filters;
