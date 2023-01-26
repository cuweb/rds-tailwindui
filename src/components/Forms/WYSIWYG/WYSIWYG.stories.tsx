import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form } from '../BaseForm/Form';

export default {
  title: 'Components/Forms/WSYWIG',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

const DefaultTemplate: Story<any> = args => (
  <Form onSubmit={() => {}} schema={{}}>
    <Form.WYSIWYG {...args} />
  </Form>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'Description',
  name: 'description',
  type: 'text',
  placeholder: 'Enter the description...',
};
