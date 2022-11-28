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
  children: <p className="px-8">Empty Toast</p>,
};
