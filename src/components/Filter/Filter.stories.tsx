import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Filter, FilterProps } from './Filter';
import data from './FilterData.json';

export default {
  title: 'Components/Inputs/Filter',
  component: Filter,
  argTypes: {},
} as Meta<typeof Filter>;

const Template: Story<FilterProps> = args => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortOptions: data.sortOptions,
  filters: data.filters,
};

export const NoSorting = Template.bind({});
NoSorting.args = {
  filters: data.filters,
};

Default.storyName = 'With Sorting';
NoSorting.storyName = 'Without Sorting';
