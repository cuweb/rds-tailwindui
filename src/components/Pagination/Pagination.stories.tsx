import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Components/Input/Pagination',
  component: Pagination,
  argTypes: {},
} as Meta<typeof Pagination>;

const Template: Story<PaginationProps> = args => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalCount: 48,
  siblingCount: 1,
  pageSize: 5,
};
