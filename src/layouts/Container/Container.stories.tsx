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

const GrayBgTemplateTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <p className="px-8">Gray Container</p>
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

const WithPanelsTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <Column cols="2">
      <Panel hasBorder hasShadow>
        <Panel.Title>Panel Header</Panel.Title>
        <p className="p-8">{content.paragraph}</p>
      </Panel>
      <Panel hasBorder hasShadow>
        <Panel.Title>Panel Header</Panel.Title>
        <p className="p-8">{content.paragraph}</p>
      </Panel>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  bgColor: 'white',
};

export const GrayBackground = GrayBgTemplateTemplate.bind({});
GrayBackground.args = {
  bgColor: 'gray',
};

export const WithTwoColumns = WithTwoColumnsTemplate.bind({});
WithTwoColumns.args = {
  ...GrayBackground.args,
};

export const WithPanels = WithPanelsTemplate.bind({});
WithPanels.args = {
  ...GrayBackground.args,
};

Default.storyName = 'Default white bg';
GrayBackground.storyName = 'Gray background';
WithTwoColumns.storyName = 'With two columns';
WithPanels.storyName = 'Two column panels';
