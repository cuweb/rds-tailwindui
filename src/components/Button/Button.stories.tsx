import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { PlusIcon, MapPinIcon } from '@heroicons/react/20/solid';

export default {
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
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Button',
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const GhostButton = Template.bind({});
GhostButton.args = {
  title: 'Ghost Button',
  isType: 'ghost',
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const GreyButton = Template.bind({});
GreyButton.args = {
  title: 'Grey Button',
  isType: 'grey',
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const WhiteButton = Template.bind({});
WhiteButton.args = {
  title: 'White Button',
  isType: 'white',
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  title: 'Full Width Button',
  isFull: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const centeredButton = Template.bind({});
centeredButton.args = {
  title: 'Centered Button',
  isCenter: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const IconTextButton = Template.bind({});
IconTextButton.args = {
  title: 'Button with Icon',
  icon: <MapPinIcon className="-ml-0.5 h-4 w-4" aria-hidden="true" />,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <PlusIcon className="-ml-0.5 h-6 w-6" aria-hidden="true" />,
  onClick: () => {
    alert('button has been clicked ');
  },
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  title: 'Disabled Button',
  disabled: true,
  onClick: () => {
    alert('button has been clicked ');
  },
};
