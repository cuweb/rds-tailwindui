import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Filter, FilterProps } from './Filter';
import data from './FilterData.json';
//console.log(data.filters);
const meta: Meta = {
  title: 'Components/Filter',
  component: Filter,
};

export default meta;

const Template: Story<FilterProps> = args => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortOptions: data.sortOptions,
  filters: data.filters,
};
