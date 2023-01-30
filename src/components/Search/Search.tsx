import { Combobox, Dialog, Transition } from '@headlessui/react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import React, { Fragment, ReactNode, useEffect, useState } from 'react';

export interface SearchProps {
  sourceData: any;
  searchOn?: string;
  children?: ReactNode;
}

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export const Search = ({
  searchOn = 'title',
  sourceData,
  children,
}: SearchProps) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filteredDatabase =
    query === ''
      ? []
      : sourceData.filter((sourceData: { [x: string]: string }) => {
          return sourceData[searchOn]
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  const searchAvatar = children ? (
    children
  ) : (
    <MagnifyingGlassIcon
      className="w-5 h-5 text-gray-400 cursor-pointer left-4"
      aria-hidden="true"
    />
  );

  useEffect(() => {
    function onKeydown(event: any) {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setOpen(!open);
      } else {
      }
    }

    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [open]);

  // Validations just checking on first , not in all

  if (!sourceData[0].hasOwnProperty('url')) {
    return (
      <p className="text-cu-red">
        Url Does not exisit on Passed Database Please pass appropriate data
      </p>
    );
  }

  if (!sourceData[0].hasOwnProperty(searchOn)) {
    return (
      <p className="text-cu-red">
        Passed search key does not exisit on passed Database
      </p>
    );
  }

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="search">
        {searchAvatar}
      </button>

      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery('')}
        appear
      >
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-cu-black/70" />
          </Transition.Child>

          <div className="fixed inset-0 p-4 overflow-y-auto z-100 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto mt-[20vh] max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox
                  onChange={sourceData => (window.location = sourceData?.url)}
                  value={sourceData.searchOn}
                >
                  <div className="relative">
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Combobox.Input
                      className="w-full h-12 pr-4 text-sm bg-transparent border rounded-lg text-cu-black-800 placeholder-cu-black-300 border-cu-black-100 pl-11 focus:border-cu-black-300 focus:ring-0"
                      placeholder="Search..."
                      onChange={event => setQuery(event.target.value)}
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
                      className="py-2 overflow-y-auto text-sm text-gray-800 max-h-72 scroll-py-2"
                    >
                      {filteredDatabase.map((sourceData: any) => (
                        <Combobox.Option
                          key={sourceData.id}
                          value={sourceData}
                          className={({ active }) =>
                            classNames(
                              'cursor-default select-none px-4 py-2',
                              active && 'bg-cu-red text-white'
                            )
                          }
                        >
                          {sourceData[searchOn]}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredDatabase.length === 0 && (
                    <p className="p-4 text-sm text-gray-500">
                      Search not found
                    </p>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
