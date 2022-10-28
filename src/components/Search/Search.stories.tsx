import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Search, SearchProps } from './Search';

export default {
  title: 'Components/Input/Search',
  component: Search,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Search>;

const DefaultTemplate: Story<SearchProps> = args => (
  <Search bgColor={args.bgColor} />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  bgColor: 'grey',
};
