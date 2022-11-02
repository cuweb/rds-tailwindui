import { Combobox, Transition } from '@headlessui/react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { Fragment, useState } from 'react';

export interface SearchProps {
  searchDatabase: any;
  searchOn?: string;
  hasborder?: boolean;
  isFull?: boolean;
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export const Search = ({
  searchOn = 'title',
  searchDatabase,
  hasborder = false,
  isFull = false,
}: SearchProps) => {
  const [query, setQuery] = useState('');
  // const [selected, setSelected] = useState('');
  const hasBorderStyle = hasborder ? 'border border-cu-black-400' : '';
  const isFullStyle = isFull ? '' : 'max-w-xl';

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
      id="search-bar"
      className={` fixed mx-auto ${isFullStyle} relative z-10 transform divide-y ${hasBorderStyle}  divide-gray-100 overflow-hidden rounded-xl  first-line:shadow-2xl ring-1 ring-black ring-opacity-5 transition-all`}
    >
      <Combobox
        onChange={searchDatabase => (window.location = searchDatabase?.url)}
        value={searchDatabase.searchOn}
        // onChange={searchDatabase.searchOn}
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
              className="absolute top-3.5 right-4 h-4 w-4 text-gray-400"
              aria-hidden="true"
              onClick={() => {
                setQuery('');
              }}
            />
          )}
        </div>

        {filteredDatabase.length > 0 && (
          <Combobox.Options
            static
            className={`max-h-72 absolute scroll-py-2 bg-white  overflow-y-auto py-2 text-sm text-gray-800`}
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
        )}

        {/* // no result display  */}
        {query !== '' && filteredDatabase.length === 0 && (
          <p className="p-4 text-sm text-gray-500">Search not found</p>
        )}
      </Combobox>
    </div>
  );
};
