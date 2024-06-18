'use client';

import { ISelectOption, ISelectProps } from './interface';
import React, { JSX, useEffect, useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import classes from './index.module.css';
import { default as Sel } from 'react-select';

export default function Select<TData extends FieldValues, TOption extends object>({
  control,
  name,
  label,
  options: op = [],
  /* @ts-ignore */
  optionMapper = (option: TOption) => ({ label: option.name, value: option.id }),
  direction = 'rtl',
  placeholder = 'انتخاب کنید',
  className,
  multiple = false,
  clearable = false,
  disabled = false,
  readOnly = false,
  required = false,
  loading = false,
  validate,
  searchMinimumOptionCount = 5,
}: ISelectProps<TData, TOption>): JSX.Element {
  const [portal, setPortal] = useState<HTMLElement>();
  const [options, setOptions] = useState<(TOption & ISelectOption)[]>([]);

  useEffect(() => {
    setOptions(
      op.map((item) => ({
        ...item,
        ...optionMapper(item),
      }))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [op]);

  useEffect(() => {
    setPortal(document.body);
  }, [setPortal]);

  const v: ISelectProps<TData, TOption>['validate'] = (value, values) => {
    if (required && !value) {
      return 'فیلد اجباری';
    }

    if (validate) {
      return validate(value, values);
    }

    return true;
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{ validate: v }}
        render={({ field: { value: v, onChange }, fieldState: { invalid, error } }: any) => {
          const value = Array.isArray(v) ? v.map((item) => ({ ...item, ...optionMapper(item) })) : v ? { ...v, ...optionMapper(v) } : null;

          return (
            <div className={`${classes.Select} ${className} ${invalid ? classes.invalid : ''} ${classes[direction]}`}>
              {label && (
                <label htmlFor={name} className={classes.label}>
                  {label} :
                  {required && <span> *</span>}
                </label>
              )}
              <Sel
                className={`w-full mousetrap  ${invalid ? 'error' : ''}`}
                placeholder={placeholder}
                menuShouldScrollIntoView={true}
                isRtl={direction === 'rtl'}
                isSearchable={options.length > searchMinimumOptionCount}
                isClearable={clearable}
                required={required}
                isDisabled={disabled || readOnly}
                value={value}
                isLoading={loading}
                isMulti={multiple}
                menuPosition={'fixed'}
                menuPortalTarget={portal}
                menuPlacement={'auto'}
                options={options}
                classNamePrefix={'react-select'}
                closeMenuOnSelect={!multiple}
                onChange={(newValue) => {
                  onChange(newValue as ISelectOption);
                }}
                styles={{
                  control(style, state) {
                    return {
                      ...style,
                      '&:hover': {},
                    };
                  },
                  menuPortal(style, state) {
                    return {
                      ...style,
                      zIndex: 100,
                    };
                  },
                }}
                formatOptionLabel={({ tags, label }) => {
                  if (!tags) return label;

                  return (
                    <>
                      {label}{' '}
                      {tags.map((item: string, index: number) => (
                        <span key={index}>{item}</span>
                      ))}
                    </>
                  );
                }}
                noOptionsMessage={() => 'موردی پیدا نشد'}
                loadingMessage={() => 'در حال دریافت'}
              />
              {invalid && <p className={classes.error}>{error?.message}</p>}
            </div>
          );
        }}
      />
    </>
  );
}
