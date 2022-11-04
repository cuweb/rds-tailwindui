import { Combobox, Dialog, Transition } from '@headlessui/react';
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon';
import React, { useState, Fragment, useEffect, ReactNode } from 'react';

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}
export interface CommandPalletProps {
  searchDatabase: any;
  searchOn?: string;
  children?: ReactNode;
}

export default function CommandPallet({
  searchOn = 'title',
  searchDatabase,
  children,
}: CommandPalletProps) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  const filteredDatabase =
    query === ''
      ? []
      : searchDatabase.filter((searchDatabase: { [x: string]: string }) => {
          return searchDatabase[searchOn]
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  const searchAvatar = children ? (
    children
  ) : (
    <MagnifyingGlassIcon
      className=" cursor-pointer left-4 h-5 w-5 text-gray-400"
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
    <>
      <button onClick={() => setOpen(true)}>{searchAvatar}</button>

      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery('')}
        appear
      >
        <Dialog as="div" className="relative z-100" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-100 overflow-y-auto p-4 sm:p-6 md:p-20">
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
                  onChange={searchDatabase =>
                    (window.location = searchDatabase?.url)
                  }
                  value={searchDatabase.searchOn}
                >
                  <div className="relative">
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Combobox.Input
                      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
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
                      className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                    >
                      {filteredDatabase.map((searchDatabase: any) => (
                        <Combobox.Option
                          key={searchDatabase.id}
                          value={searchDatabase}
                          className={({ active }) =>
                            classNames(
                              'cursor-default select-none px-4 py-2',
                              active && 'bg-cu-red text-white'
                            )
                          }
                        >
                          {searchDatabase[searchOn]}
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
}