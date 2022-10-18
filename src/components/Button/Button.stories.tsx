import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { PlusIcon } from '@heroicons/react/20/solid';

const meta: Meta = {
  title: 'Components/Input/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    title: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Storybook Button',
  disabled: false,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const GhostButton = Template.bind({});
GhostButton.args = {
  title: 'Storybook Button',
  disabled: false,
  onClick: () => {
    alert('button has been clicked ');
  },
  ghost: true,
};

export const GreyButton = Template.bind({});
GreyButton.args = {
  title: 'Storybook Button',
  grey: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const WhiteButton = Template.bind({});
WhiteButton.args = {
  title: 'Storybook Button',
  white: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  title: 'Storybook Button',
  full: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const centeredButton = Template.bind({});
centeredButton.args = {
  title: 'Storybook Button',
  center: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const ChildrenInButton: Story = args => (
  <Button {...args}>
    <PlusIcon className="-ml-0.5 h-4 w-4" aria-hidden="true" />
    Sample Button
  </Button>
);
ChildrenInButton.args = {
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const IconButton: Story = args => (
  <Button {...args}>
    <PlusIcon className="-ml-0.5 h-4 w-4" aria-hidden="true" />
  </Button>
);
IconButton.args = {
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const disabledButton = Template.bind({});
disabledButton.args = {
  title: 'Storybook Button',
  disabled: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};
