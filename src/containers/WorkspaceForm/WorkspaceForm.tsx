import React, { Dispatch, SetStateAction } from 'react';

import { Formik, Form } from 'formik';
import { motion } from 'framer-motion';

import { InputField } from '@/components/InputField/InputField';
import { SubmitButton } from '@/components/SubmitButton/SubmitButton';
import { formVariants } from '@/constants/variants';

interface WorkspaceFormProps {
  setActiveFormIndex: Dispatch<SetStateAction<FormIndex>>;
}

export const WorkspaceForm = ({ setActiveFormIndex }: WorkspaceFormProps) => {
  const handleSubmit = (values: Forms.WorkspaceForm) => {
    // API call goes here
    // eslint-disable-next-line no-console
    console.log({ values });

    setActiveFormIndex(2);
  };

  return (
    <motion.div
      variants={formVariants}
      key="workspace-form"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <header className="text-center">
        <h4 className="text-4xl font-semibold text-black">
          Let&apos;s set up a home for all your work
        </h4>

        <p className="mt-2 text-zinc-500">
          You can always create another workspace later.
        </p>
      </header>

      <Formik<Forms.WorkspaceForm>
        initialValues={{ name: '', url: '' }}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col max-w-md gap-6 pb-24 mx-auto mt-12 text-lg text-zinc-600/80">
          <InputField
            placeholder="Eden"
            label="Workspace Name"
            name="name"
            type="text"
            required
          />

          <InputField
            optional
            leftAdornment="www.eden.com/"
            placeholder="Example"
            label="Workspace URL"
            name="url"
            type="text"
            required
          />

          <SubmitButton />
        </Form>
      </Formik>
    </motion.div>
  );
};
