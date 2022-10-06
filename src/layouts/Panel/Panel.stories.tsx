import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Panel, PanelProps } from './Panel';

export default {
  title: 'Layouts/Panel',
  component: Panel,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Panel>;

const DefaultTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
    <p className="p-5">Default Panel</p>
  </Panel>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  hasBorder: false,
  hasShadow: false,
};

const WithBorderTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder}>
    <p className="p-5">Panel with border</p>
  </Panel>
);

export const WithBorder = WithBorderTemplate.bind({});
WithBorder.args = {
  hasBorder: true,
  hasShadow: false,
};

const WithShadowTemplate: Story<PanelProps> = args => (
  <Panel hasShadow={args.hasShadow}>
    <p className="p-5">Panel with shadow</p>
  </Panel>
);

export const WithShadow = WithShadowTemplate.bind({});
WithShadow.args = {
  hasBorder: false,
  hasShadow: true,
};

const ShadowAndBorderTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
    <p className="p-5">Panel with board &amp; shadow</p>
  </Panel>
);

export const ShadowAndBorder = ShadowAndBorderTemplate.bind({});
ShadowAndBorder.args = {
  hasBorder: true,
  hasShadow: true,
};
