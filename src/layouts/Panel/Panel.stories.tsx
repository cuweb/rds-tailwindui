import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Panel, PanelProps } from './Panel';

const content = {
  paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id augue id est iaculis auctor. Vestibulum lobortis hendrerit enim, sit amet viverra velit tincidunt a. Sed lobortis consectetur sapien a egestas. Ut vestibulum turpis non molestie aliquam. Quisque dictum iaculis tellus, vel vehicula diam lobortis non.`,
};

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
    <p className="p-8">{content.paragraph}</p>
  </Panel>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  hasBorder: false,
  hasShadow: false,
};

const WithBorderTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder}>
    <p className="p-8">{content.paragraph}</p>
  </Panel>
);

export const WithBorder = WithBorderTemplate.bind({});
WithBorder.args = {
  hasBorder: true,
  hasShadow: false,
};

const WithShadowTemplate: Story<PanelProps> = args => (
  <Panel hasShadow={args.hasShadow}>
    <p className="p-8">{content.paragraph}</p>
  </Panel>
);

export const WithShadow = WithShadowTemplate.bind({});
WithShadow.args = {
  hasBorder: false,
  hasShadow: true,
};

const ShadowAndBorderTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
    <p className="p-8">{content.paragraph}</p>
  </Panel>
);

export const ShadowAndBorder = ShadowAndBorderTemplate.bind({});
ShadowAndBorder.args = {
  hasBorder: true,
  hasShadow: true,
};

const WithTitleTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
    <Panel.Title>Panel Title</Panel.Title>
    <p className="p-8">{content.paragraph}</p>
  </Panel>
);

export const WithTitle = WithTitleTemplate.bind({});
WithTitle.args = {
  hasBorder: true,
  hasShadow: true,
};
