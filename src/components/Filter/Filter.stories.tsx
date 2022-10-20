import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Filter, FilterProps } from './Filter';
import data from './FilterData.json';

export default {
  title: 'Components/Input/Filter',
  component: Filter,
  argTypes: {},
} as Meta<typeof Filter>;

const Template: Story<FilterProps> = args => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortOptions: data.sortOptions,
  filters: data.filters,
};
