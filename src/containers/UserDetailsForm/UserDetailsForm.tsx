import React, { Dispatch, SetStateAction } from 'react';

import { Formik, Form } from 'formik';
import { motion } from 'framer-motion';

import { InputField } from '@/components/InputField/InputField';
import { SubmitButton } from '@/components/SubmitButton/SubmitButton';
import { formVariants } from '@/constants/variants';

interface UserDetailsFormProps {
  setActiveFormIndex: Dispatch<SetStateAction<FormIndex>>;
}

export const UserDetailsForm = ({
  setActiveFormIndex,
}: UserDetailsFormProps) => {
  const handleSubmit = (values: Forms.UserDetailsForm) => {
    // API call goes here
    // eslint-disable-next-line no-console
    console.log({ values });

    setActiveFormIndex(1);
  };

  return (
    <motion.div
      variants={formVariants}
      key="user-details-form"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <header className="text-center">
        <h4 className="text-4xl font-semibold text-black">
          Welcome! First Things first...
        </h4>

        <p className="mt-2 text-zinc-500">You can always change them later.</p>
      </header>

      <Formik<Forms.UserDetailsForm>
        initialValues={{ fullName: '', displayName: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col max-w-md gap-6 pb-24 mx-auto mt-12 text-lg text-zinc-600/80">
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
