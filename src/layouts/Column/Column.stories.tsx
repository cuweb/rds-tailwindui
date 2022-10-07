import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Column, ColumnProps } from './Column';

const styles = {
  column: `p-8 bg-slate-200`,
};

export default {
  title: 'Layouts/Column',
  component: Column,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Column>;

const DefaultTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
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

const TwoColumTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Two Column</p>
    <p className={`${styles.column}`}>Two Column</p>
  </Column>
);

export const TwoColum = TwoColumTemplate.bind({});
TwoColum.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '2',
  isNested: false,
};

const ThreeColumnTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Three Column</p>
    <p className={`${styles.column}`}>Three Column</p>
    <p className={`${styles.column}`}>Three Column</p>
  </Column>
);

export const ThreeColumn = ThreeColumnTemplate.bind({});
ThreeColumn.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '3',
  isNested: false,
};

const FourColumnTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
  </Column>
);

export const FourColumn = FourColumnTemplate.bind({});
FourColumn.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '4',
  isNested: false,
};

const OneThirdTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Single Column</p>
    <p className={`${styles.column}`}>Two Column Span</p>
  </Column>
);

export const OneThird = OneThirdTemplate.bind({});
OneThird.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '1/3',
  isNested: false,
};

const TwoThirdTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Two Column Span</p>
    <p className={`${styles.column}`}>Single Column</p>
  </Column>
);

export const TwoThird = TwoThirdTemplate.bind({});
TwoThird.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '2/3',
  isNested: false,
};
