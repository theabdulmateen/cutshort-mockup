import React from 'react';

import clsx from 'clsx';
import { Field } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  optional?: boolean;
  leftAdornment?: string | JSX.Element;
  type?: string;
}

export const InputField = ({
  name,
  label,
  placeholder,
  optional,
  leftAdornment,
  type = 'text',
}: InputFieldProps) => {
  return (
    <label className="flex flex-col gap-2 ">
      <p className="text-base font-semibold text-black/60">
        {label}
        {optional && <span className="ml-2 text-black/20">(Optional)</span>}
      </p>

      <div className="relative w-full border rounded-md focus-within:ring-2 focus-within:ring-black border-zinc-600/20">
        {leftAdornment && (
          <span className="absolute grid h-full px-4 transform -translate-y-1/2 pointer-events-none rounded-l-md bg-primary-main/5 place-items-center text-black/40 top-1/2 ">
            {leftAdornment}
          </span>
        )}

        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          className={clsx('w-full px-4 outline-none rounded-md py-3', {
            'pl-44': Boolean(leftAdornment),
          })}
        />
      </div>
    </label>
  );
};
