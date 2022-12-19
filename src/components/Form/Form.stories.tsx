import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Form, FormProps } from './Form';
import * as yup from 'yup';

export default {
  title: 'Components/Elements/Form',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

const initialValues = {
  name: '',
  role: '',
  tos: false,
};

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Required'),
  role: yup
    .string()
    .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
    .required('Required'),
  tos: yup.boolean().oneOf([true], 'Please accept the terms of service'),
});

const onSubmitForm = async (values: any) => {
  alert('Submitted');
  console.log(values);
};

const DefaultTemplate: Story<FormProps> = args => (
  <Form
    {...args}
    onSubmit={onSubmitForm}
    initialValues={initialValues}
    validationSchema={validationSchema}
  >
    <div className="mt-6">
      <Form.Input
        label="Name"
        name="name"
        type="text"
        placeholder="Enter your name"
      />
    </div>

    <div className="mt-6">
      <Form.Select label="Role" name="role" placeholder="Please select a role">
        <option value="">Please select a job type</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Product Manager</option>
        <option value="other">Other</option>
      </Form.Select>
    </div>

    <div className="mt-6">
      <Form.Checkbox
        label="TOS"
        type="checkbox"
        name="tos"
        caption="Accept the TOS to continue"
      />
    </div>

    <div className="mt-6">
      <Form.Submit title="Save" />
    </div>
  </Form>
);

export const Default = DefaultTemplate.bind({});
