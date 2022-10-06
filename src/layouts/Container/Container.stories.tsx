import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, ContainerProps } from './Container';
import { Column } from '../Column';
import { Panel } from '../Panel';

const content = {
  paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id augue id est iaculis auctor. Vestibulum lobortis hendrerit enim, sit amet viverra velit tincidunt a. Sed lobortis consectetur sapien a egestas. Ut vestibulum turpis non molestie aliquam. Quisque dictum iaculis tellus, vel vehicula diam lobortis non.`,
};

export default {
  title: 'Layouts/Container',
  component: Container,
  argTypes: {
    bgColor: {
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Container>;

const DefaultTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <p className="px-8">Empty Container</p>
  </Container>
);

const GreyBgTemplateTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <p className="px-8">Grey Container</p>
  </Container>
);

const WithTwoColumnsTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <Column cols="2">
      <p>{content.paragraph}</p>
      <p>{content.paragraph}</p>
    </Column>
  </Container>
);

const WithPanelGridTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <Column cols="2">
      <Panel hasBorder hasShadow>
        <Panel.Title>Panel Header</Panel.Title>
        <p className="p-6">{content.paragraph}</p>
      </Panel>
      <Panel hasBorder hasShadow>
        <Panel.Title>Panel Header</Panel.Title>
        <p className="p-6">{content.paragraph}</p>
      </Panel>
    </Column>
  </Container>
);

const WithPanelStackedTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <Panel hasBorder hasShadow hasGap>
      <Panel.Title>Panel Header</Panel.Title>
      <p className="p-6">{content.paragraph}</p>
    </Panel>
    <Panel hasBorder hasShadow>
      <Panel.Title>Panel Header</Panel.Title>
      <p className="p-6">{content.paragraph}</p>
    </Panel>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  bgColor: 'none',
};

export const GreyBackground = GreyBgTemplateTemplate.bind({});
GreyBackground.args = {
  bgColor: 'grey',
};

export const WithTwoColumns = WithTwoColumnsTemplate.bind({});
WithTwoColumns.args = {
  ...GreyBackground.args,
};

export const WithPanelGrid = WithPanelGridTemplate.bind({});
WithPanelGrid.args = {
  ...GreyBackground.args,
};

export const WithPanelStacked = WithPanelStackedTemplate.bind({});
WithPanelStacked.args = {
  ...GreyBackground.args,
};

Default.storyName = 'Default transparent bg';
GreyBackground.storyName = 'Grey background';
WithTwoColumns.storyName = 'With two columns';
WithPanelGrid.storyName = 'Two column panels';
WithPanelStacked.storyName = 'Stacked panels';
