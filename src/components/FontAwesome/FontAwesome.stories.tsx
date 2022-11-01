import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FontAwesome, FontAwesomeProps } from './FontAwesome';

export default {
  title: 'Components/Icons/Font Awesome',
  component: FontAwesome,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FontAwesome>;

const Template: Story<FontAwesomeProps> = args => (
  <FontAwesome {...args} aria-hidden={true} />
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
