import React from 'react';
import { Meta, Story } from '@storybook/react';
import exampleTableData from './exampleTableData.json';
import { Table, TableProps, ColumnDefinitionType } from './Table';
import Link from '../Link/Link';

interface Table {
  id: number;
  title: string;
  link: React.ReactNode;
}

const data = exampleTableData;

const tableData = data.map(obj => {
  let link = 'http://thing/' + obj.id;
  return {
    ...obj,
    link: (
      <>
        <Link className="text-cu-red" href={link}>
          Edit
        </Link>
      </>
    ),
  };
});

const finalTableData: Table[] = tableData;

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
  {
    key: 'link',
    header: 'Edit',
    sort: {
      sortable: false,
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
  <Table data={finalTableData} columns={columns} />
);

// ADD COMPONENT ARGS WITH DEFAULT SETTINGS
export const Default = DefaultTemplate.bind({});
