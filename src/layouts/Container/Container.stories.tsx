import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container, ContainerProps } from './Container';

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

const GrayTemplate: Story<ContainerProps> = args => (
  <Container bgColor={args.bgColor}>
    <p>Gray Container</p>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  bgColor: 'white',
};

export const GrayBackground = GrayTemplate.bind({});
GrayBackground.args = {
  bgColor: 'gray',
};
