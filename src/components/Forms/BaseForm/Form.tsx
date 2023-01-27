import React from 'react';
import { Button } from '../../Button';
import { Checkbox } from '../Checkbox/Checkbox';
import { DateTimePicker } from '../DateTimePicker';
import { Input } from '../Input/Input';
import { PlacesAutoComplete } from '../PlacesAutocomplete';
import { Radio } from '../Radio/Radio';
import { Select } from '../Select/Select';
import { WYSIWYG } from '../WYSIWYG/WYSIWYG';

import { Form as FormWrapper, Formik } from 'formik';
import * as yup from 'yup';

export interface FormProps {
  children?: React.ReactNode;
  onSubmit?: any;
  schema: {
    [k: string]: {
      value?: any;
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
      <FormWrapper className="space-y-5">{children}</FormWrapper>
    </Formik>
  );
};

FormBase.displayName = 'Form';
Submit.displayName = 'Form.Submit';

export const Form = Object.assign(FormBase, {
  Input,
  Select,
  Checkbox,
  Radio,
  Submit,
  WYSIWYG,
  DateTimePicker,
  PlacesAutoComplete,
});
