import React from 'react';
import { Meta, Story } from '@storybook/react';

// COMPONENT AND PROP NAME UPDATE REQUIRED
// UPDATE FILE NAME FOR IMPORT
import { Component, ComponentProps } from './Component';

// COMPONENT TITLE UPDATE REQUIRED
// COMPONENT NAME UPDATE REQUIRED
// COMPONENT NAME IN {typeof} REQUIRED
export default {
  title: 'Path/Component',
  component: Component,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Component>;

// PROP NAME UPDATE REQUIRED
// ADD ARGS TO COMPONENTS IF APPLICABLE
// ADD COMPONENT MARKUP TO BUILD DEFAULT EXAMPLE
const DefaultTemplate: Story<ComponentProps> = args => (
  <Component bgColor={args.bgColor}>
    <p className="px-8">Empty Component</p>
  </Component>
);

// ADD COMPONENT ARGS WITH DEFAULT SETTINGS
export const Default = DefaultTemplate.bind({});
Default.args = {
  bgColor: 'white',
};
