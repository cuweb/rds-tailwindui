import { Transition, Dialog, Combobox } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { Fragment, useState } from 'react';
import { rdsBgColor } from '../../utils/tailwindClasses';

export interface SearchProps {
  bgColor?: 'white' | 'grey';
}

export interface dataProp {
  id: string;
  name: string;
  url: URL;
}

const people = [
  {
    id: 58,
    name: 'Gussi',
    url: 'http://dummyimage.com/239x100.png/dddddd/000000',
  },
  {
    id: 94,
    name: 'Tally',
    url: 'http://dummyimage.com/119x100.png/dddddd/000000',
  },
  {
    id: 81,
    name: 'Ruby',
    url: 'http://dummyimage.com/156x100.png/cc0000/ffffff',
  },
  {
    id: 48,
    name: 'Cristionna',
    url: 'http://dummyimage.com/243x100.png/ff4444/ffffff',
  },
  {
    id: 6,
    name: 'Calley',
    url: 'http://dummyimage.com/167x100.png/cc0000/ffffff',
  },
  {
    id: 27,
    name: 'Nilson',
    url: 'http://dummyimage.com/175x100.png/dddddd/000000',
  },
  {
    id: 62,
    name: 'Papageno',
    url: 'http://dummyimage.com/214x100.png/ff4444/ffffff',
  },
  {
    id: 95,
    name: 'Myrlene',
    url: 'http://dummyimage.com/224x100.png/5fa2dd/ffffff',
  },
  {
    id: 46,
    name: 'Archer',
    url: 'http://dummyimage.com/138x100.png/ff4444/ffffff',
  },
  {
    id: 79,
    name: 'Stephana',
    url: 'http://dummyimage.com/105x100.png/ff4444/ffffff',
  },
  {
    id: 52,
    name: 'Tine',
    url: 'http://dummyimage.com/134x100.png/dddddd/000000',
  },
  {
    id: 67,
    name: 'Jorrie',
    url: 'http://dummyimage.com/210x100.png/cc0000/ffffff',
  },
  {
    id: 35,
    name: 'Elisabetta',
    url: 'http://dummyimage.com/106x100.png/5fa2dd/ffffff',
  },
  {
    id: 77,
    name: 'Maurice',
    url: 'http://dummyimage.com/226x100.png/cc0000/ffffff',
  },
  {
    id: 68,
    name: 'Nerta',
    url: 'http://dummyimage.com/230x100.png/ff4444/ffffff',
  },
  {
    id: 21,
    name: 'Gregory',
    url: 'http://dummyimage.com/101x100.png/cc0000/ffffff',
  },
  {
    id: 97,
    name: 'Quinta',
    url: 'http://dummyimage.com/132x100.png/dddddd/000000',
  },
  {
    id: 12,
    name: 'Remus',
    url: 'http://dummyimage.com/173x100.png/dddddd/000000',
  },
  {
    id: 65,
    name: 'Kristos',
    url: 'http://dummyimage.com/174x100.png/cc0000/ffffff',
  },
  {
    id: 40,
    name: 'Paxton',
    url: 'http://dummyimage.com/131x100.png/dddddd/000000',
  },
  {
    id: 46,
    name: 'Isak',
    url: 'http://dummyimage.com/209x100.png/5fa2dd/ffffff',
  },
  {
    id: 18,
    name: 'Anastassia',
    url: 'http://dummyimage.com/188x100.png/5fa2dd/ffffff',
  },
  {
    id: 2,
    name: 'Lee',
    url: 'http://dummyimage.com/187x100.png/cc0000/ffffff',
  },
  {
    id: 35,
    name: 'Kara-lynn',
    url: 'http://dummyimage.com/231x100.png/5fa2dd/ffffff',
  },
  {
    id: 62,
    name: 'Maisey',
    url: 'http://dummyimage.com/163x100.png/5fa2dd/ffffff',
  },
  {
    id: 83,
    name: 'Mikey',
    url: 'http://dummyimage.com/169x100.png/dddddd/000000',
  },
  {
    id: 77,
    name: 'Boothe',
    url: 'http://dummyimage.com/189x100.png/5fa2dd/ffffff',
  },
  {
    id: 76,
    name: 'Alon',
    url: 'http://dummyimage.com/121x100.png/dddddd/000000',
  },
  {
    id: 92,
    name: 'Ermina',
    url: 'http://dummyimage.com/104x100.png/5fa2dd/ffffff',
  },
  {
    id: 56,
    name: 'Zelig',
    url: 'http://dummyimage.com/204x100.png/ff4444/ffffff',
  },
];

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export const Search = ({ bgColor = 'white' }: SearchProps) => {
  const [query, setQuery] = useState('');

  const [open, setOpen] = useState(true);

  const filteredPeople =
    query === ''
      ? []
      : people.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className={` ${rdsBgColor[bgColor]}`}>
      <Transition.Root
        show={open}
        as={Fragment}
        afterLeave={() => setQuery('')}
        appear
      >
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div
            className={`fixed inset-0 ${rdsBgColor[bgColor]} border border-cu-black-200 bg-opacity-25 transition-opacity`}
          />

          <div
            className={`fixed inset-0 ${rdsBgColor[bgColor]} z-10 overflow-y-auto p-4 sm:p-6 md:p-20`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl  ${rdsBgColor[bgColor]}shadow-2xl ring-1 ring-black ring-opacity-5 transition-all`}
              >
                {/* <Combobox onChange={person => (window.location = person.url)}> */}
                <Combobox>
                  <div className="relative bg-white">
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Combobox.Input
                      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Search..."
                      onChange={event => setQuery(event.target.value)}
                    />
                  </div>

                  {filteredPeople.length > 0 && (
                    <Combobox.Options
                      static
                      className="max-h-72 scroll-py-2 bg-white overflow-y-auto py-2 text-sm text-gray-800"
                    >
                      {filteredPeople.map(person => (
                        <Combobox.Option
                          key={person.id}
                          value={person}
                          className={({ active }) =>
                            classNames(
                              'cursor-default select-none px-4 py-2',
                              active && 'bg-indigo-600 text-white'
                            )
                          }
                        >
                          {person.name}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredPeople.length === 0 && (
                    <p className="p-4 text-sm bg-white text-gray-500">
                      No data found.
                    </p>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
