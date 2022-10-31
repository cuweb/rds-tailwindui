import { Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

export interface SearchProps {
  searchDatabase: any;
  searchOn: string;
  hasborder?: boolean;
}

// export interface dataProp {
//   id: string;
//   name: string;
//   url: URL;
// }

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export const Search = ({
  searchOn,
  searchDatabase,
  hasborder = false,
}: SearchProps) => {
  const [query, setQuery] = useState('');
  const hasBorderStyle = hasborder ? 'border border-cu-black-400' : '';

  const filteredDatabase =
    query === ''
      ? []
      : searchDatabase.filter((searchDatabase: { [x: string]: string }) => {
          return searchDatabase[searchOn]
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  // Validations just checking on first , not in all
  if (!searchDatabase[0].hasOwnProperty('url')) {
    return (
      <p className="text-cu-red">
        Url Does not exisit on Passed Database Please pass appropriate data
      </p>
    );
  }

  if (!searchDatabase[0].hasOwnProperty(searchOn)) {
    return (
      <p className="text-cu-red">
        Passed search key does not exisit on passed Database
      </p>
    );
  }

  return (
    <div
      className={`mx-auto max-w-xl transform divide-y ${hasBorderStyle}  divide-gray-100 overflow-hidden rounded-xl  first-line:shadow-2xl ring-1 ring-black ring-opacity-5 transition-all`}
    >
      <Combobox
        onChange={searchDatabase => (window.location = searchDatabase?.url)}
        value={searchDatabase.searchOn}
      >
        <div className="relative bg-white ">
          <MagnifyingGlassIcon
            className="pointer-events-none absolute  top-3.5 left-4 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          <Combobox.Input
            className="h-12 w-full border-0 bg-transparent pl-11 pr-11  text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
            placeholder="Search..."
            onChange={event => setQuery(event.target.value)}
            // displayValue={searchDatabase => searchDatabase?[searchOn]}
          />

          {query && (
            <XMarkIcon
              className="  absolute top-3.5 right-4 h-4 w-4 text-gray-400"
              aria-hidden="true"
              onClick={() => {
                setQuery('');
              }}
            />
          )}
        </div>
        <Combobox.Options
          className={`max-h-72 scroll-py-2 bg-white  overflow-y-auto py-2 text-sm text-gray-800`}
        >
          {filteredDatabase.map((searchDatabase: any) => (
            <Combobox.Option
              key={searchDatabase.id}
              value={searchDatabase}
              className={({ active }) =>
                classNames(
                  'cursor-default select-none px-4 py-2',
                  active && 'bg-cu-red  text-white'
                )
              }
            >
              {searchDatabase[searchOn]}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};
