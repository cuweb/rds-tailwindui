import React from 'react';
import { Meta, Story } from '@storybook/react';
import { WYSIWYG } from '../WYSIWYG';

export default {
  title: 'Components/Forms/WYSIWYG',
  component: WYSIWYG,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof WYSIWYG>;

const DefaultTemplate: Story<any> = () => <WYSIWYG />;

export const Default = DefaultTemplate.bind({});
Default.args = {};
