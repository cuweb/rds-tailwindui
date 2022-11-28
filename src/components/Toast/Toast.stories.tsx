import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toast, ToastProps } from './Toast';

export default {
  title: 'Components/Elements/Toast',
  component: Toast,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Toast>;

const DefaultTemplate: Story<ToastProps> = args => <Toast {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Toast',
};

export const Success = DefaultTemplate.bind({});
Success.args = {
  title: 'Success',
  alertType: 'success',
};

export const Error = DefaultTemplate.bind({});
Error.args = {
  title: 'Error',
  alertType: 'error',
};

export const Warn = DefaultTemplate.bind({});
Warn.args = {
  title: 'warning',
  alertType: 'warning',
};

export const Info = DefaultTemplate.bind({});
Info.args = {
  title: 'info',
  alertType: 'info',
};
