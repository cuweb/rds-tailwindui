import React from 'react';
import { Meta, Story } from '@storybook/react';
import exampleTableData from './exampleTableData.json';
import { Table, TableProps, ColumnDefinitionType } from './Table';
import { Link } from '../Link/Link';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Table>;

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

const Template: Story<TableProps<any, any>> = args => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
};

export const WithStripes = Template.bind({});
WithStripes.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: true,
  hasBorder: false,
  hasShadow: false,
};

export const WithShadow = Template.bind({});
WithShadow.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: true,
};

export const WithBorder = Template.bind({});
WithBorder.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: true,
  hasBorder: true,
  hasShadow: false,
};

export const ShadowAndBorder = Template.bind({});
ShadowAndBorder.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: true,
  hasBorder: true,
  hasShadow: true,
};

export const WithRangeOne = Template.bind({});
WithRangeOne.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
  range: [1, 3],
};

export const WithRangeTwo = Template.bind({});
WithRangeTwo.args = {
  data: finalTableData,
  columns: columns,
  hasStripes: false,
  hasBorder: false,
  hasShadow: false,
  range: [4, 5],
};
