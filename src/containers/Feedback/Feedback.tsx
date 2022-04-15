import React, { Dispatch, SetStateAction } from 'react';

import { CheckIcon } from '@heroicons/react/solid';
import { motion } from 'framer-motion';

import { SubmitButton } from '@/components/SubmitButton/SubmitButton';
import { formVariants } from '@/constants/variants';

interface UseCasesFormProps {
  setActiveFormIndex: Dispatch<SetStateAction<FormIndex>>;
}

export const Feedback = ({ setActiveFormIndex }: UseCasesFormProps) => {
  const handleLaunchWorkspace = () => {
    // API call goes here
    // eslint-disable-next-line no-console

    setActiveFormIndex(0);
  };

  return (
    <motion.div
      variants={formVariants}
      key="feedback-form"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <header className="flex flex-col items-center text-center">
        <div className="grid w-16 h-16 rounded-full bg-primary-main place-items-center">
          <CheckIcon width={25} height={25} color="white" />
        </div>

        <h4 className="mt-12 text-4xl font-semibold text-black">
          Congratulations, Eren!
        </h4>

        <p className="mt-2 text-zinc-500">
          You have completed onboarding, you can start using the Eden!
        </p>
      </header>

      <div className="mt-8">
        <SubmitButton
          type="button"
          label="Launch Eden"
          onClick={handleLaunchWorkspace}
        />
      </div>
    </motion.div>
  );
};
