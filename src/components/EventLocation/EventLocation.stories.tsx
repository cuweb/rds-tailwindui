import React from 'react';
import { Meta } from '@storybook/react';
import  {EventLocation}  from './EventLocation';

export default {
  title: 'Components/Elements/Location',
  component: EventLocation,
   argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof EventLocation>;

export const Default = () => (
  <EventLocation googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>
  
);
