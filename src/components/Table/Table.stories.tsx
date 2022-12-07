import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Table, TableProps, ColumnDefinitionType } from './Table';
import { Button } from '../Button';

interface Table {
  name: string;
  age: number;
  gender?: string | React.ReactNode;
}

const data: Table[] = [
  {
    name: 'Mike',
    age: 2,
    gender: <Button title="Default" />,
  },
  {
    name: 'Mike',
    age: 2,
    gender: 'Male',
  },
  {
    name: 'Mike',
    age: 2,
    gender: 'Male',
  },
  {
    name: 'Mike',
    age: 2,
    gender: 'Male',
  },
  {
    name: 'Mike',
    age: 2,
    gender: 'Male',
  },
];

const columns: ColumnDefinitionType<Table, keyof Table>[] = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'age',
    header: 'Age in years',
  },
  {
    key: 'gender',
    header: 'Gender',
  },
];

export default {
  title: 'Components/Elements/Table',
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
