import React from 'react';
import { Meta, Story } from '@storybook/react';
import exampleTableData from './exampleTableData.json';
import { Table, TableProps, ColumnDefinitionType } from './Table';

interface Table {
  id: number;
  title: string;
}

const data: Table[] = exampleTableData;

const columns: ColumnDefinitionType<Table, keyof Table>[] = [
  {
    key: 'id',
    header: 'ID',
    sort: {
      sortable: true,
    },
  },
  {
    key: 'title',
    header: 'Title',
    sort: {
      sortable: true,
    },
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
