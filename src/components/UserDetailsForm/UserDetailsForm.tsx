import React, { Dispatch, SetStateAction } from 'react';

import { Formik, Form } from 'formik';
import { motion } from 'framer-motion';

import { InputField } from '@/components/InputField/InputField';
import { SubmitButton } from '@/components/SubmitButton/SubmitButton';

interface UserDetailsFormProps {
  setActiveFormIndex: Dispatch<SetStateAction<FormIndex>>;
}

export const UserDetailsForm = ({
  setActiveFormIndex,
}: UserDetailsFormProps) => {
  const handleSubmit = () => {
    // API call goes here

    setActiveFormIndex(1);
  };

  return (
    <motion.div>
      <header className="text-center">
        <h4 className="text-4xl font-semibold text-black">
          Welcome! First Things first...
        </h4>

        <p className="mt-2 text-zinc-500">You can always change them later.</p>
      </header>

      <Formik
        initialValues={{ fullName: '', displayName: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col max-w-2xl gap-6 pb-24 mt-12 text-lg text-zinc-600/80">
          <InputField
            placeholder="Steve Jobs"
            label="Full Name"
            name="fullName"
            type="text"
          />

          <InputField
            placeholder="Steve"
            label="Display Name"
            name="displayName"
            type="text"
          />

          <SubmitButton />
        </Form>
      </Formik>
    </motion.div>
  );
};
