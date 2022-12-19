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

// Form schema, if you want to add more parameters you can dynamically create a form
const formSchema = {
  name: {
    value: '',
    validation: yup
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Required'),
  },
  role: {
    value: '',
    validation: yup
      .string()
      .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
      .required('Required'),
  },
  tos: {
    value: false,
    validation: yup
      .boolean()
      .oneOf([true], 'Please accept the terms of service'),
  },
};

// Form Submit method
const formOnSubmit = async (values: any) => {
  alert('Submitted');
  console.log(values);
};

// You can also use <option value=''>Select</option> syntax inside Form.Select
const roleOptions = [
  {
    value: '',
    label: 'Please select a job type',
  },
  {
    value: 'developer',
    label: 'Developer',
  },
  {
    value: 'designer',
    label: 'Designer',
  },
  {
    value: 'manager',
    label: 'Product Manager',
  },
  {
    value: 'other',
    label: 'Other',
  },
];

const DefaultTemplate: Story<FormProps> = args => (
  <Form {...args} onSubmit={formOnSubmit} schema={formSchema}>
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
        <Form.Options options={roleOptions} />
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
