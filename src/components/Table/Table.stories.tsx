import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Table, TableProps } from './Table';

const data = [
  {
    name: 'Mittens',
    color: 'black',
    age: 2,
    gender: 'female',
    activityLevel: 'hight',
    favoriteFood: 'milk',
  },
  {
    name: 'Mons',
    color: 'grey',
    age: 2,
    gender: 'male',
    favoriteFood: 'old socks',
    activityLevel: 'medium',
  },
  {
    name: 'Luna',
    color: 'black',
    age: 2,
    gender: 'female',
    activityLevel: 'medium',
    favoriteFood: 'fish',
  },
  {
    name: 'Bella',
    color: 'grey',
    age: 1,
    gender: 'female',
    activityLevel: 'high',
    favoriteFood: 'mice',
  },
  {
    name: 'Oliver',
    color: 'orange',
    age: 1,
    gender: 'male',
    activityLevel: 'low',
    favoriteFood: 'fish',
  },
];

const columns = [
  {
    key: 'name',
    header: 'Name',
    width: 150,
  },
  {
    key: 'age',
    header: 'Age in years',
  },
  {
    key: 'color',
    header: 'Color',
  },
];

export default {
  title: 'Path/Component',
  component: Table,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Table>;

const DefaultTemplate: Story<TableProps<any, any>> = () => (
  <Table data={data} columns={columns} />
);

// ADD COMPONENT ARGS WITH DEFAULT SETTINGS
export const Default = DefaultTemplate.bind({});
