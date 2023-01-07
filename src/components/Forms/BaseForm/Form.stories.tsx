import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from './Form';
import { FormSchema } from './FormData';
import { SelectData } from '../Select/SelectData';

export default {
  title: 'Components/Forms/Base Form',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

// Form Submit method
const formOnSubmit = async (values: any) => {
  alert('Submitted');
  console.log(values);
};

const DefaultTemplate: Story<FormProps> = () => (
  <Form onSubmit={() => {}} schema={{}}>
    Add input components inside the form as children
  </Form>
);

const ExampleTemplate: Story<FormProps> = args => (
  <Form {...args} onSubmit={formOnSubmit} schema={FormSchema}>
    <Form.Input
      label="First Name"
      name="firstname"
      type="text"
      placeholder="Enter your first name"
    />

    <Form.Input
      label="Last Name"
      name="lastname"
      type="text"
      placeholder="Enter your last name"
    />

    <Form.Select label="Role" name="role" placeholder="Please select a role">
      <Form.Select.Options options={SelectData} />
    </Form.Select>

    <Form.Checkbox
      label="TOS"
      type="checkbox"
      name="tos"
      caption="Accept the TOS to continue"
    />

    <Form.Submit title="Submit" />
  </Form>
);

export const Default = DefaultTemplate.bind({});
export const Example = ExampleTemplate.bind({});
