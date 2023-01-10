import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, AlertBaseProps } from './Alert';

export default {
  title: 'Components/Alert/Alert',
  component: Alert,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Alert>;

interface AlertStoryProps {
  title: string;
  content: string;
}

const AlertStory = [
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

const DefaultTemplate: Story<AlertStoryProps & AlertBaseProps> = args => (
  <Alert.Alerter>
    <Alert key={111} type={args.type}>
      <Alert.Title>{args.title}</Alert.Title>
    </Alert>
  </Alert.Alerter>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Success',
  type: 'success',
};

const MultilineTemplate: Story<AlertStoryProps & AlertBaseProps> = args => (
  <Alert.Alerter>
    <Alert key={111} type={args.type}>
      <Alert.Title>{args.title}</Alert.Title>
      <Alert.Content>{args.content}</Alert.Content>
    </Alert>
  </Alert.Alerter>
);

export const Multiline = MultilineTemplate.bind({});
Multiline.args = {
  title: 'Success',
  content: 'Successfully created',
  type: 'success',
};

const StackedTemplate: Story = () => (
  <Alert.Alerter>
    {AlertStory.map((alert: any, index: number) => {
      return (
        <Alert key={index} type={alert.type}>
          <Alert.Title>{alert.title}</Alert.Title>
          <Alert.Content>{alert.content}</Alert.Content>
        </Alert>
      );
    })}
  </Alert.Alerter>
);

export const Stacked = StackedTemplate.bind({});
Stacked.args = {};
