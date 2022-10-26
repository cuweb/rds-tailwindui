import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Column, ColumnProps } from './Column';

const styles = {
  column: `p-6 bg-slate-200`,
};

export default {
  title: 'Layouts/Column',
  component: Column,
  argTypes: {
    maxWidth: {
      control: 'select',
    },
    isNested: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Column>;

const DefaultTemplate: Story<ColumnProps> = (args) => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Single Column</p>
  </Column>
);

const TwoColumTemplate: Story<ColumnProps> = (args) => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Two Column</p>
    <p className={`${styles.column}`}>Two Column</p>
  </Column>
);

const ThreeColumnTemplate: Story<ColumnProps> = (args) => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Three Column</p>
    <p className={`${styles.column}`}>Three Column</p>
    <p className={`${styles.column}`}>Three Column</p>
  </Column>
);

const FourColumnTemplate: Story<ColumnProps> = (args) => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
  </Column>
);

const OneThirdTemplate: Story<ColumnProps> = (args) => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Single Column</p>
    <p className={`${styles.column}`}>Two Column Span</p>
  </Column>
);

const TwoThirdTemplate: Story<ColumnProps> = (args) => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Two Column Span</p>
    <p className={`${styles.column}`}>Single Column</p>
  </Column>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '1',
  isNested: false,
};

export const TwoColum = TwoColumTemplate.bind({});
TwoColum.args = {
  ...Default.args,
  cols: '2',
};

export const ThreeColumn = ThreeColumnTemplate.bind({});
ThreeColumn.args = {
  ...Default.args,
  cols: '3',
};

export const FourColumn = FourColumnTemplate.bind({});
FourColumn.args = {
  ...Default.args,
  cols: '4',
};

export const OneThird = OneThirdTemplate.bind({});
OneThird.args = {
  ...Default.args,
  cols: '1/3',
};

export const TwoThird = TwoThirdTemplate.bind({});
TwoThird.args = {
  ...Default.args,
  cols: '2/3',
};

Default.storyName = 'Single Column';
TwoColum.storyName = 'Two Columns';
ThreeColumn.storyName = 'Three Columns';
FourColumn.storyName = 'Four Columns';
OneThird.storyName = 'One Third';
TwoThird.storyName = 'Two Thirds';
