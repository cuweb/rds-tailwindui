import React from 'react';
import { Meta } from '@storybook/react';
import { EventLocation } from './EventLocation';
import { useLoadScript } from '@react-google-maps/api';


export default {
  title: 'Components/Elements/Location',
  component: EventLocation,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof EventLocation>;
const address = {
  lat: '45.3850225',
  lng: '-75.6946679',
  location: "Carleton University Raven's Nest",
};
export const Default = () => {
  const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY || '',
      });
 return isLoaded ? <EventLocation
    lat={address.lat}
    lng={address.lng}
    location={address.location}
    isLoaded1={isLoaded}

  /> :<></>
};
