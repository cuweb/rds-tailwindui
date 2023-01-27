import { Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { EventLocation } from '../EventLocation/EventLocation';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

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
                      key={suggestion.index}
                      value={suggestion}
                      className={({ active }) =>
                        classNames(
                          'cursor-default select-none px-4 py-2',
                          active && 'bg-cu-red text-white'
                        )
                      }
                    >
                      <div {...getSuggestionItemProps(suggestion)}>
                        {suggestion.description}
                      </div>
                    </Combobox.Option>
                  );
                })}
              </Combobox.Options>
            </Combobox>
          </div>
        )}
      </PlacesAutocomplete>
      <div className="py-12">
        <EventLocation
          lat={coordinates?.lat.toString()}
          lng={coordinates?.lng.toString()}
          location={address}
        />
      </div>
    </div>
  );
};
