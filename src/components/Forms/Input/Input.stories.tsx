import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form } from '../BaseForm/Form';

export default {
  title: 'Components/Forms/Text Input',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

const DefaultTemplate: Story<any> = args => (
  <Form onSubmit={() => {}} schema={{}}>
    <Form.Input {...args} />
  </Form>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Name',
  name: 'name',
  type: 'text',
  placeholder: 'Enter your name',
};
