import React from 'react';
import { Meta, Story } from '@storybook/react';
import Filter from './Filter';
import data from './FilterData.json';
//console.log(data.filters);
const meta: Meta = {
  title: 'Input/Filter',
  component: Filter,
};

export default meta;

const Template: Story = args => (
  <Filter filters={[]} sortOptions={[]} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sortOptions: data.sortOptions,
  filters: data.filters,
};
