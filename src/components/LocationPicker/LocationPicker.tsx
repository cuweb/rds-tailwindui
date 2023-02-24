import { Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Location } from '../Location/Location';

export const LocationPicker = () => {
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

  return (
    <div className="not-prose">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <Combobox value={address} onChange={handleSelect}>
            <div className="relative">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute top-3.5 left-3.5 h-5 w-5 text-cu-black-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="w-full h-12 pl-10 pr-4 bg-white border rounded-lg border-cu-black-200 placeholder-cu-black-400 text-cu-black-800 sm:text-sm focus:outline-none focus:ring-0 focus:border-cu-black-400"
                {...getInputProps({ placeholder: 'Type address' })}
              />
              {address && (
                <XMarkIcon
                  className="absolute top-3.5 right-3.5 h-5 w-5 text-cu-black-400"
                  aria-hidden="true"
                  onClick={() => {
                    setAddress('');
                    setCoordinates({ lat: 0, lng: 0 });
                  }}
                />
              )}
            </div>
            <Combobox.Options className="px-1.5 mt-3 overflow-y-auto text-sm bg-white divide-y divide-cu-black-100 text-cu-black-800 max-h-80">
              {suggestions.map(suggestion => {
                return (
                  <Combobox.Option key={suggestion.index} value={suggestion}>
                    {({ active }) => (
                      <li
                        {...getSuggestionItemProps(suggestion)}
                        className={`p-4 text-cu-black-600 hover:cursor-pointer ${
                          active
                            ? 'bg-cu-black-50 text-cu-black-900'
                            : 'bg-white'
                        }`}
                      >
                        {suggestion.description}
                      </li>
                    )}
                  </Combobox.Option>
                );
              })}
            </Combobox.Options>
          </Combobox>
        )}
      </PlacesAutocomplete>
      <div className="py-5">
        <Location
          lat={coordinates?.lat.toString()}
          lng={coordinates?.lng.toString()}
          location={address}
        />
      </div>
    </div>
  );
};
