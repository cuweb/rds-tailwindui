import React from 'react';
import { Meta } from '@storybook/react';
import { PlacesAutoComplete } from './PlacesAutocomplete';
import { Column } from '../../layouts';

export default {
  title: 'Components/Elements/PlacesAutoComplete',
  component: PlacesAutoComplete,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof PlacesAutoComplete>;

export const Default = () => <Column maxWidth='5xl'><PlacesAutoComplete /></Column>;
