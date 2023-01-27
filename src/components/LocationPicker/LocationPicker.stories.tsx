import React from 'react';
import { Meta } from '@storybook/react';
import { LocationPicker } from './LocationPicker';
import { Column } from '../../layouts';

export default {
  title: 'Components/Elements/LocationPicker',
  component: LocationPicker,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof LocationPicker>;

export const Default = () => {
  return (
    <Column maxWidth="5xl">
      <LocationPicker />
    </Column>
  );
};
