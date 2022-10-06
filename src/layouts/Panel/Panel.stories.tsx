import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Panel, PanelProps } from './Panel';

const content = {
  spacing: `p-6`,
  paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id augue id est iaculis auctor. Vestibulum lobortis hendrerit enim, sit amet viverra velit tincidunt a. Sed lobortis consectetur sapien a egestas. Ut vestibulum turpis non molestie aliquam. Quisque dictum iaculis tellus, vel vehicula diam lobortis non.`,
};

export default {
  title: 'Layouts/Panel',
  component: Panel,
  argTypes: {
    hasBorder: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    hasShadow: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Panel>;

const DefaultTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
    <p className={content.spacing}>{content.paragraph}</p>
  </Panel>
);

const WithBorderTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder}>
    <p className={content.spacing}>{content.paragraph}</p>
  </Panel>
);

const WithShadowTemplate: Story<PanelProps> = args => (
  <Panel hasShadow={args.hasShadow}>
    <p className={content.spacing}>{content.paragraph}</p>
  </Panel>
);

const ShadowAndBorderTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
    <p className={content.spacing}>{content.paragraph}</p>
  </Panel>
);

const WithTitleTemplate: Story<PanelProps> = args => (
  <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
    <Panel.Title>Panel Title</Panel.Title>
    <p className={content.spacing}>{content.paragraph}</p>
  </Panel>
);

const ConsecutiveTemplate: Story<PanelProps> = args => (
  <>
    <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
      <Panel.Title>Panel Title</Panel.Title>
      <p className={content.spacing}>{content.paragraph}</p>
    </Panel>
    <Panel hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
      <Panel.Title>Panel Title</Panel.Title>
      <p className={content.spacing}>{content.paragraph}</p>
    </Panel>
  </>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  hasBorder: false,
  hasShadow: false,
};

export const WithBorder = WithBorderTemplate.bind({});
WithBorder.args = {
  hasBorder: true,
  hasShadow: false,
};

export const WithShadow = WithShadowTemplate.bind({});
WithShadow.args = {
  hasBorder: false,
  hasShadow: true,
};

export const ShadowAndBorder = ShadowAndBorderTemplate.bind({});
ShadowAndBorder.args = {
  hasBorder: true,
  hasShadow: true,
};

export const WithTitle = WithTitleTemplate.bind({});
WithTitle.args = {
  ...ShadowAndBorder.args,
};

export const Consecutive = ConsecutiveTemplate.bind({});
Consecutive.args = {
  ...ShadowAndBorder.args,
};

Default.storyName = 'Default item';
WithBorder.storyName = 'With border';
WithShadow.storyName = 'With shadow';
ShadowAndBorder.storyName = 'With border & shadow';
WithTitle.storyName = 'With a title';
Consecutive.storyName = 'Consecutive panels';
