import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HeroIcon, HeroIconProps } from './HeroIcon';

export default {
  title: 'Components/Icons/HeroIcon',
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

export const Red = Template.bind({});
Red.args = {
  icon: 'BugAntIcon',
  color: 'red',
};

Default.storyName = 'Default';
Outline.storyName = 'Outlined Icon';
Red.storyName = 'Red Icon';
