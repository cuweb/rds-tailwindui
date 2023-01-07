import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form } from '../BaseForm/Form';
import { SelectData } from './SelectData';

export default {
  title: 'Components/Forms/Select List',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

const DefaultTemplate: Story<any> = args => (
  <Form onSubmit={() => {}} schema={{}}>
    <Form.Select {...args}>
      <Form.Select.Options options={args.options} />
    </Form.Select>
  </Form>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Role',
  name: 'role',
  options: [...SelectData],
};
