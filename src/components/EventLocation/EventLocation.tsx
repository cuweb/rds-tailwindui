import React from 'react';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
export interface EventLocationProps {
  lat?: string;
  lng?: string;
  location?: string;
  zoom?: number;
}
export const EventLocation = ({
  lat,
  lng,
  location,
  zoom = 15,
}: EventLocationProps) => {
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

  return (
    <div>
      <GoogleMap
        mapContainerClassName="w-full h-96"
        center={{ lat: Number(lat), lng: Number(lng) }}
        zoom={zoom}
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
  );
};
