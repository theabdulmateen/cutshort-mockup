import React from 'react';

interface SubmitButtonProps {
  label?: string;
}

export const SubmitButton = ({
  label = 'Create Workspace',
}: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full px-4 py-3 text-base font-semibold text-center text-white rounded-md bg-primary-main"
    >
      {label}
    </button>
  );
};
