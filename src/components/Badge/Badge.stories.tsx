import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Badge>;

const DefaultTemplate: Story<BadgeProps> = () => <Badge>Multi-Day</Badge>;

const SingleItemPanelTemplate: Story<BadgeProps> = () => (
  <>
    <Badge>Multi-Day</Badge>
    <Badge>Orientation</Badge>
    <Badge>Faculty</Badge>
  </>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const SingleItemPanel = SingleItemPanelTemplate.bind({});
SingleItemPanel.args = {
  ...Default.args,
};

Default.storyName = 'Single item';
SingleItemPanel.storyName = 'Row of items';
