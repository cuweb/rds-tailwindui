import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StackedList, StackedListProps } from './StackedList';
import { Container } from '../Container';
import { Column } from '../Column';
import { Panel } from '../Panel';

const styles = {
  spacing: `p-5`,
};

export default {
  title: 'Layouts/Stacked List',
  component: StackedList,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof StackedList>;

const DefaultTemplate: Story<StackedListProps> = args => (
  <StackedList dividers={args.dividers}>
    <li className={`${styles.spacing}`}>List Item</li>
    <li className={`${styles.spacing}`}>List Item</li>
    <li className={`${styles.spacing}`}>List Item</li>
  </StackedList>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  dividers: false,
};

const WithDividersTemplate: Story<StackedListProps> = args => (
  <StackedList dividers={args.dividers}>
    <li className={`${styles.spacing}`}>List Item</li>
    <li className={`${styles.spacing}`}>List Item</li>
    <li className={`${styles.spacing}`}>List Item</li>
  </StackedList>
);

export const WithDividers = WithDividersTemplate.bind({});
WithDividers.args = {
  dividers: true,
};

const PanelAndDividersTemplate: Story<StackedListProps> = args => (
  <Container>
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <StackedList dividers={args.dividers}>
          <li className={`${styles.spacing}`}>List Item</li>
          <li className={`${styles.spacing}`}>List Item</li>
          <li className={`${styles.spacing}`}>List Item</li>
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

export const PanelAndDividers = PanelAndDividersTemplate.bind({});
PanelAndDividers.args = {
  dividers: true,
};
