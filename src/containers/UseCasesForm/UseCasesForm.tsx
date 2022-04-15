import React, { Dispatch, SetStateAction } from 'react';

import { UserGroupIcon, UserIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { Formik, Form } from 'formik';
import { motion } from 'framer-motion';

import { SubmitButton } from '@/components/SubmitButton/SubmitButton';
import { formVariants } from '@/constants/variants';

interface UseCasesFormProps {
  setActiveFormIndex: Dispatch<SetStateAction<FormIndex>>;
}

export const UseCasesForm = ({ setActiveFormIndex }: UseCasesFormProps) => {
  const handleSubmit = (values: Forms.UseCaseForm) => {
    // API call goes here
    // eslint-disable-next-line no-console
    console.log({ values });

    setActiveFormIndex(3);
  };

  return (
    <motion.div
      variants={formVariants}
      key="use-cases-form"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <header className="text-center">
        <h4 className="text-4xl font-semibold text-black">
          How are you planning to use Eden?
        </h4>

        <p className="mt-2 text-zinc-500">
          We&apos;ll streamline your setup experience accordingly.
        </p>
      </header>

      <Formik<Forms.UseCaseForm>
        initialValues={{ plan: 'self' }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form className="grid max-w-md grid-cols-2 gap-4 pb-24 mx-auto mt-12 text-lg text-zinc-600/80">
            <div
              className={clsx(
                'relative flex flex-col gap-2 p-6 border rounded-md hover:border-primary-main focus-within:border-primary-main',
                {
                  'border-primary-main': values.plan === 'self',
                }
              )}
            >
              <UserIcon
                width={25}
                height={25}
                color={values.plan === 'self' ? '#5A4AD1' : '#40434A'}
              />

              <button
                onClick={() => setFieldValue('plan', 'self')}
                className="static self-start mt-4 font-semibold text-zinc-600 before:cursor-pointer before:absolute before:inset-0"
                type="button"
              >
                For myself
              </button>

              <p>Write better. think more clearly. Stay organized.</p>
            </div>

            <div
              className={clsx(
                'relative flex flex-col gap-2 p-6 border rounded-md hover:border-primary-main focus-within:border-primary-main',
                {
                  'border-primary-main': values.plan === 'team',
                }
              )}
            >
              <UserGroupIcon
                width={25}
                height={25}
                color={values.plan === 'team' ? '#5A4AD1' : '#40434A'}
              />

              <button
                onClick={() => setFieldValue('plan', 'team')}
                className="static self-start mt-4 font-semibold text-zinc-600 before:cursor-pointer before:absolute before:inset-0"
                type="button"
              >
                With my team
              </button>

              <p>Wikis, docs, tasks & projects, all in one place.</p>
            </div>

            <div className="col-span-2 mt-4">
              <SubmitButton />
            </div>
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};
