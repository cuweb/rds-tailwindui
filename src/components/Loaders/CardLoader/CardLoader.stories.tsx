import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CardLoader } from './CardLoader';
import { Column } from '../../../layouts';

export default {
  title: 'Load Screens/Card Loader',
  component: CardLoader,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof CardLoader>;

const DefaultTemplate: Story = () => (
  <Column>
    <CardLoader />
  </Column>
);

const MultiColTemplate: Story = () => (
  <Column cols="3">
    <CardLoader />
    <CardLoader />
    <CardLoader />
  </Column>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const MultiCol = MultiColTemplate.bind({});
MultiCol.args = {};
