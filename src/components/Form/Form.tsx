import React from 'react';
import { Input } from './Input';
import { Select } from './Select';
import { Checkbox } from './Checkbox';
import { Options } from './Options';
import { Button } from '../Button';

import { Form as FormWrapper, Formik } from 'formik';
import * as yup from 'yup';

export interface FormProps {
  children?: React.ReactNode;
  onSubmit?: any;
  schema: {
    [k: string]: {
      value: any;
      validation: any;
      label?: string;
    };
  };
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
  schema,
}: FormProps) => {
  const defaults: any = {};
  const rules: any = {};

  Object.keys(schema).map(key => {
    defaults[key] = schema[key].value;
    rules[key] = schema[key].validation;
    return [defaults, rules];
  });

  return (
    <Formik
      initialValues={defaults}
      validationSchema={yup.object().shape(rules)}
      onSubmit={onSubmit}
    >
      <FormWrapper>{children}</FormWrapper>
    </Formik>
  );
};

export const Form = Object.assign(FormBase, {
  Input,
  Select,
  Checkbox,
  Options,
  Submit,
});
