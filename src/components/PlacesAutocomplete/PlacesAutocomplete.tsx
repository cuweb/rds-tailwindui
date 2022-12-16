import { Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { EventLocation } from '../EventLocation/EventLocation';


export interface ComponentProps {
  children: React.ReactNode;
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const libraries: (
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'places'
  | 'visualization'
)[] = ['places'];
export const PlacesAutoComplete = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY || '',
    libraries: libraries,
  });
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0,
  });

  const handleSelect = async (value: any) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return isLoaded ? (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <Combobox value={address} onChange={handleSelect}>
              <div className="relative">
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <Combobox.Input
                  className="h-12 rounded-lg w-full border-2 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                  {...getInputProps({ placeholder: 'Type address' })}
                />
                {address && (
                  <XMarkIcon
                    className="absolute top-3.5 right-4 h-4 w-4 text-gray-400"
                    aria-hidden="true"
                    onClick={() => {
                      setAddress('');
                      setCoordinates({ lat: 0, lng: 0 });
                    }}
                  />
                )}
              </div>

              <Combobox.Options
                static
                className="max-h-72 scroll-py-2 overflow-y-auto  text-sm text-gray-800 bg-slate-200"
              >
                {suggestions.map(suggestion => {
                  return (
                    <Combobox.Option
                      {...getSuggestionItemProps(suggestion)}
                      key={suggestion.index}
                      value={suggestion}
                      className={({ active }) =>
                        classNames(
                          'cursor-default select-none px-4 py-2',
                          active && 'bg-cu-red text-white'
                        )
                      }
                    >
                      {suggestion.description}
                    </Combobox.Option>
                  );
                })}
              </Combobox.Options>
            </Combobox>
          </div>
        )}
      </PlacesAutocomplete>
      <div className='py-12'>
      <EventLocation
        apiKey={process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_API_KEY || ''}
        lat={coordinates.lat.toString()}
        lng={coordinates.lng.toString()}
        location={address}
        isLoaded1={isLoaded}
      
      />
      </div>
    </div>
  ) : (
    <></>
  );
};
