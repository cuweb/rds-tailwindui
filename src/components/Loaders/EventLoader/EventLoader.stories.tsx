import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EventLoader } from './EventLoader';
import { Column } from '../../../layouts';

export default {
  title: 'Loading Screens/Event Loader',
  component: EventLoader,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof EventLoader>;

const DefaultTemplate: Story = () => (
  <Column>
    <EventLoader />
  </Column>
);

const MultiColTemplate: Story = () => (
  <Column cols="3">
    <EventLoader />
    <EventLoader />
    <EventLoader />
  </Column>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const MultiCol = MultiColTemplate.bind({});
MultiCol.args = {};
