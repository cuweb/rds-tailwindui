import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FooterWave } from './FooterWave';

export default {
  title: 'Components/Footer/Footer Wave',
  component: FooterWave,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FooterWave>;

const DefaultTemplate: Story = () => <FooterWave />;

export const Default = DefaultTemplate.bind({});
