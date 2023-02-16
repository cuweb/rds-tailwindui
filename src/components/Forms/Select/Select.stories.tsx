import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form } from '../BaseForm/Form';
import { SelectData } from './SelectData';

export default {
  title: 'Forms/Select List',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

const DefaultTemplate: Story<any> = args => (
  <Form onSubmit={() => {}} schema={{}}>
    <Form.Select {...args} options={args.options} />
  </Form>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'What is your favorite 90s sitcom?',
  name: 'favsitcom',
  options: [...SelectData],
};
