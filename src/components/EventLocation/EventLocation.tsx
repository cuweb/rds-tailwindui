import React from 'react';
import {
  GoogleMap,
  MarkerF,
  useLoadScript,
  InfoWindowF,
} from '@react-google-maps/api';
export interface EventLocationProps {
  apiKey: string;
  lat?: string;
  lng?: string;
  location?: string;
}
export const EventLocation = ({
  apiKey,
  lat,
  lng,
  location,
}: EventLocationProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  });
  const [showInfo, setShowInfo] = React.useState(false);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map: any) => {
    mapRef.current = map;
  }, []);

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

  return isLoaded ? (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: Number(lat), lng: Number(lng) }}
        zoom={15}
        options={options}
        onLoad={onMapLoad}
      >
        <MarkerF
          title={location}
          onClick={() => setShowInfo(true)}
          position={{ lat: Number(lat), lng: Number(lng) }}
        />

        {showInfo && (
          <InfoWindowF
            position={{
              lat: Number(lat) + 0.0009,
              lng: Number(lng),
            }}
            onCloseClick={() => setShowInfo(false)}
          >
            <div>
              <p className="text-center text-base font-regular">{location}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${location}&z=15`}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-center font-medium text-blue-600">
                  View on Google Maps
                </p>
              </a>
            </div>
          </InfoWindowF>
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};
