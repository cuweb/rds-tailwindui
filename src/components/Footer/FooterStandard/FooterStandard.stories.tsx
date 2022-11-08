import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FooterStandard } from './FooterStandard';

export default {
  title: 'Components/Footer/Footer Standard',
  component: FooterStandard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FooterStandard>;

const DefaultTemplate: Story = () => <FooterStandard />;

export const Default = DefaultTemplate.bind({});
