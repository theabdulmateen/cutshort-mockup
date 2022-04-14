import React from 'react';

interface SubmitButtonProps {
  onClick?: () => void;
  label?: string;
  type?: 'button' | 'submit';
}

export const SubmitButton = ({
  onClick,
  label = 'Create Workspace',
  type = 'submit',
}: SubmitButtonProps) => {
  return (
    <button
      type={type}
      className="w-full px-4 py-3 text-base font-semibold text-center text-white rounded-md bg-primary-main"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
