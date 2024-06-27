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
import { IAccordionFilterProps, IFiltersForm } from "../interface";
import { useEffect, useRef } from "react";
import noUiSlider from "nouislider";

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
          {options.map(({ label, name }) => (
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

const Filters = () => {
  const { control, handleSubmit } = useForm<IFiltersForm>({
    defaultValues: {},
  });
  const handleClick = handleSubmit((data) => {
    console.log(data, "data");
  });

  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (sliderRef.current && !sliderRef.current.noUiSlider) {
      noUiSlider.create(sliderRef.current, {
        start: [4000, 11000], // Start positions for two handles
        range: {
          min: [1000],
          max: [15000],
        },
        tooltips: [true, true],
        connect: true,
      });
    }

    return () => {
      if (sliderRef.current && sliderRef.current.noUiSlider) {
        sliderRef.current.noUiSlider.destroy();
      }
    };
  }, []);

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
        bodyComponent={<div ref={sliderRef} className="slider" />}
        headerComponent={
          <TextWithIconContainer>
            <MoneyBag className="!w-6 !h-6" color="black" iconStyle="Bold" />
            <p className="font-medium text-lg">
              محدوده قیمت <span className="text-sm">(تومان)</span>
            </p>
          </TextWithIconContainer>
        }
      />
      <button onClick={handleClick} type="submit">
        fsdfsdf
      </button>
    </>
  );
};
export default Filters;
