import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SocialShare, SocialShareProps } from './SocialShare';

export default {
  title: 'Components/Inputs/SocialShare',
  component: SocialShare,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof SocialShare>;

const DefaultTemplate: Story<SocialShareProps> = args => (
  <SocialShare {...args} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'CarletonLink',
  link: 'https://carleton.ca/',
};
