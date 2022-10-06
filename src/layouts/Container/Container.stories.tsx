import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, ContainerProps } from './Container';
import { Column } from '../Column';

export default {
  title: 'Layouts/Container',
  component: Container,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Container>;

const Template: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <p>Empty Container</p>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  bgColor: 'white',
};

const GrayTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <p>Gray Container</p>
  </Container>
);

export const GrayBackground = GrayTemplate.bind({});
GrayBackground.args = {
  bgColor: 'gray',
};

const GrayTwoColTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <Column>
      <p>Gray Container</p>
      <p>Gray Container</p>
    </Column>
  </Container>
);

export const WithTwoColumns = GrayTwoColTemplate.bind({});
WithTwoColumns.args = {
  bgColor: 'gray',
};
