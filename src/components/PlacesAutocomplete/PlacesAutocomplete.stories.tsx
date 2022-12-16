import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { PlacesAutoComplete } from './PlacesAutocomplete';
import { Column } from '../../layouts';
import { EventLocation } from '../EventLocation/EventLocation';

export default {
  title: 'Components/Elements/PlacesAutoComplete',
  component: PlacesAutoComplete,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof PlacesAutoComplete>;

export const Default = () => {
  const [coordinates,setCoordinates] = useState({lat:0,lng:0,address:''})
  const handleCallback = (coord:any)=> {
    setCoordinates(coord)
  }
  console.log("corrdinates",coordinates)
return  <Column maxWidth="5xl">
<PlacesAutoComplete parentCallback = {handleCallback}/>
 <EventLocation
    apiKey={process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY || ''}
    lat={ coordinates?.lat.toString()}
    lng={coordinates?.lng.toString()}
    location={coordinates?.address}
  />

</Column>
}
 
;
