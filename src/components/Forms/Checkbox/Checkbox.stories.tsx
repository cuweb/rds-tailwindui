import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form } from '../BaseForm/Form';

export default {
  title: 'Components/Forms/Checkbox',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

const DefaultTemplate: Story<any> = args => (
  <Form onSubmit={() => {}} schema={{}}>
    <Form.Checkbox {...args} />
  </Form>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Terms of Service',
  name: 'tos',
  type: 'checkbox',
  checked: false,
  caption: 'Accept the TOS to continue',
};
