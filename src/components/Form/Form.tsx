import React from 'react';
import { Input } from './Input';
import { Select } from './Select';
import { Checkbox } from './Checkbox';
import { Form as FormWrapper, Formik } from 'formik';
import { Button } from '../Button';

export interface FormProps {
  children?: React.ReactNode;
  onSubmit?: any;
  initialValues: any;
  validationSchema: any;
}
export interface SubmitProps {
  title?: string;
}

const Submit = ({ title = 'Submit' }: SubmitProps) => {
  return <Button type="submit" title={title} />;
};

const FormBase = ({
  children,
  onSubmit = (values: any) => console.log(values),
  initialValues,
  validationSchema,
}: FormProps) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <FormWrapper>{children}</FormWrapper>
    </Formik>
  );
};

export const Form = Object.assign(FormBase, {
  Input,
  Select,
  Checkbox,
  Submit,
});
