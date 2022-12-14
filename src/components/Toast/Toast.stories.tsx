import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toast } from './Toast';

export default {
  title: 'Components/Toast/Toast',
  component: Toast,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Toast>;

const ToastStory = [
  {
    type: 'success',
    title: 'Success!',
    content: 'Records have been updated.',
  },
  {
    type: 'error',
    title: 'Error!',
    content: 'Unable to save record.',
  },
  {
    type: 'warning',
    title: 'Warning',
    content: 'You have lost internet connectivity',
  },
  {
    type: 'info',
    title: 'Information',
    content: 'You look like you need some coffee.',
  },
];

const DefaultTemplate: Story = () => (
  <Toast.Toaster>
    {ToastStory.map((toast: any) => {
      return (
        <Toast type={toast.type}>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Content>{toast.content}</Toast.Content>
        </Toast>
      );
    })}
  </Toast.Toaster>
);

export const Default = DefaultTemplate.bind({});
