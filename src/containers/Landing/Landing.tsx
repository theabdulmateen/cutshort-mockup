import React, { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { StepperButton } from '@/components/StepperButton/StepperButton';
import { Feedback } from '@/containers/Feedback/Feedback';
import { UseCasesForm } from '@/containers/UseCasesForm/UseCasesForm';
import { UserDetailsForm } from '@/containers/UserDetailsForm/UserDetailsForm';
import { WorkspaceForm } from '@/containers/WorkspaceForm/WorkspaceForm';

export const Landing = () => {
  const [activeFormIndex, setActiveFormIndex] = useState<FormIndex>(0);

  const ActiveForm = () => {
    switch (activeFormIndex) {
      case 0:
        return <UserDetailsForm setActiveFormIndex={setActiveFormIndex} />;
      case 1:
        return <WorkspaceForm setActiveFormIndex={setActiveFormIndex} />;
      case 2:
        return <UseCasesForm setActiveFormIndex={setActiveFormIndex} />;
      case 3:
        return <Feedback setActiveFormIndex={setActiveFormIndex} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid w-full place-items-center">
      <div>
        <header className="flex flex-col items-center gap-20">
          <div>
            <h4 className="flex items-center gap-2 text-4xl font-semibold">
              <Image
                src={require('@/images/logo.png')}
                width={45}
                height={45}
                alt="Eden Logo"
              />
              <span>Eden</span>
            </h4>
          </div>

          <div className="flex gap-[30px] md:gap-[60px] relative">
            {Array.from({ length: 4 }).map((_, index) => (
              <StepperButton
                key={`stepper-button-${index}`}
                activeFormIndex={activeFormIndex}
                formIndex={index as FormIndex}
                setActiveFormIndex={setActiveFormIndex}
              />
            ))}
          </div>
        </header>

        <section className="px-4 mt-20">
          <AnimatePresence exitBeforeEnter>
            <ActiveForm />
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
};
