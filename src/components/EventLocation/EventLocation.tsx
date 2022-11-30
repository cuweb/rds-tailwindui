import React from 'react';
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  useLoadScript,
} from '@react-google-maps/api';
import { Column } from '../../layouts/Column/Column';

export const EventLocation = () => {
  const [showInfo, setShowInfo] = React.useState(false);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map: any) => {
    mapRef.current = map;
  }, []);

  const center = {
    lat: 45.3850225,
    lng: -75.6946679,
  };

  const address = {
    lat: 45.3850225,
    lng: -75.6946679,
    location: "Carleton University Raven's Nest",
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    panControl: true,
    streetViewControl: true,
  };

  const containerStyle = {
    height: '50vh',
    width: '100%',
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });
  
  return isLoaded ? (
    <Column maxWidth="5xl">
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={options}
          onLoad={onMapLoad}
        >
          <MarkerF
            title={address.location}
            onClick={() => setShowInfo(true)}
            position={{ lat: address.lat, lng: address.lng }}
          />

          {showInfo ? (
            <InfoWindow
              position={{
                lat: address.lat + 0.0009,
                lng: address.lng,
              }}
              onCloseClick={() => setShowInfo(false)}
            >
              <div>
                <p className="text-center text-base font-regular">
                  {address.location}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${address.location}&z=15`}
                  target="_blank"
                >
                  <p className="text-center font-medium text-blue-600">View on Google Maps</p>
                </a>
              </div>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </Column>
  ) : (
    <></>
  );
};
