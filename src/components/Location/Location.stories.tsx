import React from 'react';
import { Meta } from '@storybook/react';
import { Location } from './Location';

export default {
  title: 'Components/Location',
  component: Location,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
  isLoaded: true,
} as Meta<typeof Location>;
const address = {
  lat: '45.3850225',
  lng: '-75.6946679',
  location: "Carleton University Raven's Nest",
};
export const Default = () => (
  <Location lat={address.lat} lng={address.lng} location={address.location} />
);
