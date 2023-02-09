import { Combobox } from '@headlessui/react';
import { FieldHookConfig, useField } from 'formik';
import React, { useEffect, useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { EventLocation } from '../../EventLocation/EventLocation';
import { formStyles } from '../../../utils/formClasses';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
export interface PickerProps {
  label?: string;
}
export const PlacesAutoComplete = ({
  label,
  ...props
}: PickerProps & FieldHookConfig<string>) => {
  const [field, meta, helper] = useField(props);

  const [address, setAddress] = useState('');

  const [coordinates, setCoordinates] = useState({
    lat: 45.3875812,
    lng: -75.69602019999999,
  });
  const defaultLocation = field.value;

  const handleSelect = async (locationValue: any) => {
    const results = await geocodeByAddress(locationValue);
    const latLng = await getLatLng(results[0]);
    setAddress(locationValue);
    setCoordinates(latLng);
    helper.setValue(locationValue);
  };
  useEffect(() => {
    const DefaultLocationCoordinates = async () => {
      const results = await geocodeByAddress(defaultLocation);
      console.log('results', results);
      const latLng = await getLatLng(results[0]);
      setCoordinates(latLng);
      helper.setValue(defaultLocation);
    };
    DefaultLocationCoordinates();
  }, [defaultLocation]);
  return (
    <div className={formStyles.elementSpace}>
      <label htmlFor={field.name} className={formStyles.label}>
        {label} {props.required && <span className="text-cu-red">*</span>}
      </label>
      <div
        {...field}
        id={field.name}
        aria-invalid={meta.touched && meta.error ? true : false}
      >
        <PlacesAutocomplete
          value={defaultLocation ? defaultLocation : address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div>
              <Combobox
                value={defaultLocation ? defaultLocation : address}
                onChange={handleSelect}
              >
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 rounded-lg w-full border-2 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                    {...getInputProps({ placeholder: 'Type address' })}
                  />
                  {(defaultLocation || address) && (
                    <XMarkIcon
                      className="absolute top-3.5 right-4 h-4 w-4 text-gray-400"
                      aria-hidden="true"
                      onClick={() => {
                        setAddress('');
                        setCoordinates({ lat: 0, lng: 0 });
                        helper.setValue('');
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
    </div>
  );
};
