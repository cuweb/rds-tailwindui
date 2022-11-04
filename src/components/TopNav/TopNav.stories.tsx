import React from 'react';
import { Meta, Story } from '@storybook/react';

import { TopNav, TopNavProps } from './TopNav';

export default {
  title: 'Components/Input/TopNav',
  component: TopNav,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof TopNav>;

const NavLinks = [
  {
    id: 1,
    title: 'Weekly',
    link: '#',
  },
  {
    id: 2,
    title: 'Monthly',
    link: '#',
  },
  {
    id: 3,
    title: 'Single',
    link: '#',
  },
];

const DefaultTemplate: Story<TopNavProps> = args => <TopNav {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Event',
  url: 'https://carleton.ca/',
  navLinks: NavLinks,
};

export const CustomLogo = DefaultTemplate.bind({});
CustomLogo.args = {
  title: 'Event',
  url: 'https://carleton.ca/',
  brand:
    'https://sprott.carleton.ca/wp-content/uploads/CU_Sprott_Logo_Primary_RBG_Red_Black_on_lightBG_300-1024x343.jpg',
};
