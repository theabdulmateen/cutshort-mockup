import React, { useState } from 'react';

import { FireIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';

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
        return <div>form 3</div>;
      case 3:
        return <div>form 4</div>;
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
              <FireIcon width={50} height={50} color="#5A4AD1" />
              <span>Eden</span>
            </h4>
          </div>

          <div className="flex gap-[30px] md:gap-[60px] relative">
            <div className="absolute w-full -translate-y-1/2 z-[-1] top-1/2">
              <div
                className={clsx('h-[1px] bg-zinc-500 w-full transition-all')}
              />
            </div>

            <button
              onClick={() => setActiveFormIndex(0)}
              className="w-10 h-10 text-white rounded-full bg-primary-main"
            >
              1
            </button>
            <button
              onClick={() => setActiveFormIndex(1)}
              className="w-10 h-10 text-white rounded-full bg-primary-main"
            >
              2
            </button>
            <button
              onClick={() => setActiveFormIndex(2)}
              className="w-10 h-10 text-white rounded-full bg-primary-main"
            >
              3
            </button>
            <button
              onClick={() => setActiveFormIndex(3)}
              className="w-10 h-10 text-white rounded-full bg-primary-main"
            >
              4
            </button>
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
