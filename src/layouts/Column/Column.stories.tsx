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

const TwoColTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Two Column</p>
    <p className={`${styles.column}`}>Two Column</p>
  </Column>
);

const ThreeColTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Three Column</p>
    <p className={`${styles.column}`}>Three Column</p>
    <p className={`${styles.column}`}>Three Column</p>
  </Column>
);

const FourColTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
    <p className={`${styles.column}`}>Four Column</p>
  </Column>
);

const OneThirdTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Single Column</p>
    <p className={`${styles.column}`}>Two Column Span</p>
  </Column>
);

const TwoThirdTemplate: Story<ColumnProps> = args => (
  <Column maxWidth={args.maxWidth} cols={args.cols} gridGap={args.gridGap}>
    <p className={`${styles.column}`}>Two Column Span</p>
    <p className={`${styles.column}`}>Single Column</p>
  </Column>
);

// const Template: Story<ColumnProps> = args => <Column {...args} />;

export const Default = DefaultTemplate.bind({});
Default.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '1',
  isNested: false,
};

export const TwoColum = TwoColTemplate.bind({});
TwoColum.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '2',
  isNested: false,
};

export const ThreeColumn = ThreeColTemplate.bind({});
ThreeColumn.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '3',
  isNested: false,
};

export const FourColumn = FourColTemplate.bind({});
FourColumn.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '4',
  isNested: false,
};

export const OneThird = OneThirdTemplate.bind({});
OneThird.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '1/3',
  isNested: false,
};

export const TwoThird = TwoThirdTemplate.bind({});
TwoThird.args = {
  maxWidth: '7xl',
  gridGap: '8',
  cols: '2/3',
  isNested: false,
};
