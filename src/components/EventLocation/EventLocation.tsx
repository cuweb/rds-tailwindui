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
  };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
    panControl: true,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  const containerStyle = {
    height: '50vh',
    width: '100%',
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY || '',
    libraries: ['places'],
  });
  // if(loadError) return "Error laoding maps";
  // if(!isLoaded) return "Loading maps"

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
          {/* Child components, such as markers, info windows, etc. */}
          <MarkerF
            icon={{
              url: require('../../assets/map-pin.svg'),
              anchor: new window.google.maps.Point(15, 15),
              labelOrigin: new google.maps.Point(
                address.lat + 85,
                address.lng + 90
              ),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
            label={{
              text: 'hello',
              fontFamily: 'Arial',
              fontSize: '14px',
              color: '#FF0000',
            }}
            onMouseOver={() => !showInfo && setShowInfo(true)}
            onMouseOut={() => showInfo && setShowInfo(false)}
            position={{ lat: address.lat, lng: address.lng }}
          />

          {showInfo ? (
            <InfoWindow
              position={{
                lat: address.lat + 0.0004,
                lng: address.lng + 0.0004,
              }}
            >
              <p>{"Carleton University Raven's Nest"}</p>
            </InfoWindow>
          ) : null}
        </GoogleMap>
      </div>
    </Column>
  ) : (
    <></>
  );
};
