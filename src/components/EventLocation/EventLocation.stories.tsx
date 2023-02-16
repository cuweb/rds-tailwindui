import React from 'react';
import { Meta } from '@storybook/react';
import { EventLocation } from './EventLocation';

export default {
  title: 'Components/Location',
  component: EventLocation,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
  isLoaded: true,
} as Meta<typeof EventLocation>;
const address = {
  lat: '45.3850225',
  lng: '-75.6946679',
  location: "Carleton University Raven's Nest",
};
export const Default = () => (
  <EventLocation
    lat={address.lat}
    lng={address.lng}
    location={address.location}
  />
);
