import React, { Dispatch, SetStateAction } from 'react';

import clsx from 'clsx';

interface StepperButtonProps {
  formIndex: FormIndex;
  activeFormIndex: FormIndex;
  setActiveFormIndex: Dispatch<SetStateAction<FormIndex>>;
}

export const StepperButton = ({
  formIndex,
  activeFormIndex,
  setActiveFormIndex,
}: StepperButtonProps) => {
  return (
    <button
      onClick={() => setActiveFormIndex(formIndex)}
      className={clsx(
        'w-10 h-10 relative rounded-full bg-white border border-zinc-200 transition-all duration-500',
        {
          '!bg-primary-main !text-white': formIndex <= activeFormIndex,
          'before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:transition-all before:duration-500 before:w-[100px] before:z-[-2] before:h-[1px] before:bg-zinc-500/50':
            formIndex < 3,
          'after:absolute after:top-1/2 after:w-[0px] after:-translate-y-1/2 after:left-0 after:z-[-1] after:transition-all after:duration-500 after:h-[1px] after:bg-primary-main':
            formIndex < 3,
          'after:!w-[100px] ': formIndex < activeFormIndex, // 40px (button size) + 60px (gap)
          'after:!w-[70px] ': formIndex === activeFormIndex, // 40px (button size) + 60px/2 (gap / 2)
        }
      )}
    >
      {formIndex}
    </button>
  );
};
