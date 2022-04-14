import React from 'react';

import { Field } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  placeholder: string;
  disabled?: boolean;
  type?: string;
}

export const InputField = ({
  name,
  label,
  placeholder,
  type = 'text',
}: InputFieldProps) => {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-base font-semibold text-black/60">{label}</span>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="px-4 py-3 border rounded-md border-zinc-600/20"
      />
    </label>
  );
};
