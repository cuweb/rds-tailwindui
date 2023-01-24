import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form } from '../BaseForm/Form';

export default {
  title: 'Components/Forms/File Upload',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

const DefaultTemplate: Story<any> = args => (
  <Form onSubmit={() => {}} schema={{}}>
    <Form.FileUpload {...args} />
  </Form>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  label: 'File Upload',
  name: 'fileUpload',
  type: 'file',
  // placeholder: 'Enter your name',
};
