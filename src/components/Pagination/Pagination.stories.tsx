import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Components/Inputs/Pagination',
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

export const Border = Template.bind({});
Border.args = {
  hasBorder: true,
  totalCount: 48,
  siblingCount: 1,
  pageSize: 5,
};

export const Spacing = Template.bind({});
Spacing.args = {
  hasBorder: true,
  hasSpacing: true,
  totalCount: 48,
  siblingCount: 1,
  pageSize: 5,
};

Default.storyName = 'Default item';
Border.storyName = 'With Top Border';
Spacing.storyName = 'With Spacing';
