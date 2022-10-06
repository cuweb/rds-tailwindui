import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FooterBasic } from './FooterBasic';

export default {
  title: 'Components/Footer/Footer Basic',
  component: FooterBasic,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FooterBasic>;

const DefaultTemplate: Story = () => <FooterBasic />;

export const Default = DefaultTemplate.bind({});
