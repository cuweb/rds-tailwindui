import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeroIcon, HeroIconProps } from './HeroIcon';
import { BugAntIcon as BugAntIconSolid } from '@heroicons/react/24/solid';
import { BugAntIcon as BugAntIconOutline } from '@heroicons/react/24/outline';

export default {
  title: 'Components/HeroIcon',
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
  icon: BugAntIconSolid,
};

export const Outline = Template.bind({});
Outline.args = {
  icon: BugAntIconOutline,
};

export const Red = Template.bind({});
Red.args = {
  icon: BugAntIconSolid,
  color: 'red',
};

Default.storyName = 'Default';
Outline.storyName = 'Outlined Icon';
Red.storyName = 'Red Icon';
