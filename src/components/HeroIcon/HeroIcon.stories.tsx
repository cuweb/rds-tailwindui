import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeroIcon, HeroIconProps } from './HeroIcon';

export default {
  title: 'Components/HeroIcons',
  component: HeroIcon,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof HeroIcon>;

const Template: Story<HeroIconProps> = args => (
  <HeroIcon {...args} aria-hidden={true} />
);

export const Default = Template.bind({});
Default.args = {
  icon: 'BugAntIcon',
};

export const Outline = Template.bind({});
Outline.args = {
  icon: 'BugAntIcon',
  outline: true,
};
