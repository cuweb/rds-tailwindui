import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Toast, ToastBaseProps } from './Toast';

export default {
  title: 'Components/Notifications/Toast',
  component: Toast,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Toast>;

interface ToastStoryProps {
  title: string;
  content: string;
}

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

const DefaultTemplate: Story<ToastStoryProps & ToastBaseProps> = args => (
  <Toast.Toaster>
    <Toast key={111} type={args.type}>
      <Toast.Title>{args.title}</Toast.Title>
      <Toast.Content>{args.content}</Toast.Content>
    </Toast>
  </Toast.Toaster>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Success',
  content: 'Successfully created',
  type: 'success',
};

const MultipleTemplate: Story = () => (
  <Toast.Toaster>
    {ToastStory.map((toast: any, index: number) => {
      return (
        <Toast key={index} type={toast.type}>
          <Toast.Title>{toast.title}</Toast.Title>
          <Toast.Content>{toast.content}</Toast.Content>
        </Toast>
      );
    })}
  </Toast.Toaster>
);

export const Multiple = MultipleTemplate.bind({});
Multiple.args = {};
