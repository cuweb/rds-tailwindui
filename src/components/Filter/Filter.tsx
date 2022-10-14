import React, { Fragment, useState, useEffect } from 'react';
import {
  Dialog,
  Disclosure,
  Menu,
  Popover,
  Transition,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const styles = {
  dropDownTitles: `inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900`,
  chevron: `flex-shrink-0 w-5 h-5 ml-1 text-cu-black-300 group-hover:text-cu-black-600`,
};

export interface FilterProps {
  sortOptions: {
    name: string;
    href: string;
    current: boolean;
  }[];
  filters: {
    id: string;
    name: string;
    options: {
      value: string;
      label: string;
      checked: boolean;
    }[];
  }[];
}

//const activeFilters: any[] = ['Planning', 'Project Management', 'General'];
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

// export const Filter: React.FC<FilterProps> = ({
//   sortOptions,
//   filters,
// }): JSX.Element => {

export const Filter = ({ sortOptions, filters }: FilterProps) => {
  const [open, setOpen] = useState(false);
  const [sortItem, setSortItem] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const isSelected = (name: string) => selectedItems.includes(name);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSelect = (name: string) => {
    const selected: string = name;
    if (!selectedItems.includes(selected)) {
      return setSelectedItems([...selectedItems, selected]);
    }
    return setSelectedItems(
      [...selectedItems].filter(item => item !== selected)
    );
  };

  const handleRemove = (name: string) => {
    const selected: string = name;
    return setSelectedItems(
      [...selectedItems].filter(item => item !== selected)
    );
  };

  useEffect(() => {
    setSortItem(sortItem);
    setActiveFilters(selectedItems);
  }, [sortItem, selectedItems]);

  return (
    <div>
      {/* Mobile filter dialog */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 sm:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-white shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4">
                  {filters.map(section => (
                    <Disclosure
                      as="div"
                      key={section.name}
                      className="px-4 py-6 border-t border-gray-200"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="flow-root -mx-2 -my-3">
                            <Disclosure.Button className="flex items-center justify-between w-full px-2 py-3 text-sm text-gray-400 bg-white">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="flex items-center ml-6">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? '-rotate-180' : 'rotate-0',
                                    'h-5 w-5 transform'
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={optionIdx}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.label}
                                    type="checkbox"
                                    onChange={() => handleSelect(option.label)}
                                    defaultChecked={isSelected(option.label)}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>

        {/* Filter selectors */}
        <div className="py-4 border rounded-tl-lg rounded-tr-lg border-cu-black-100 bg-gray-50">
          <div className="flex justify-between px-4 sm:px-6">
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className={styles.dropDownTitles}>
                  Sort
                  <ChevronDownIcon
                    className={styles.chevron}
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                {/* Sort drop down menu */}
                <Menu.Items className="absolute z-10 w-40 mt-2 bg-white rounded-md shadow-lg -left-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map(option => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              // TODO: update styles
                              option.name === sortItem
                                ? 'font-medium text-cu-black-800'
                                : 'text-cu-black-600',
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            <span onClick={() => setSortItem(option.name)}>
                              {option.name}
                            </span>
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
              onClick={() => setOpen(true)}
            >
              Filters
            </button>

            <div className="hidden sm:block">
              <div className="flow-root">
                <Popover.Group className="flex items-center -mx-4 divide-x divide-gray-200">
                  {filters.map((section, sectionIdx) => (
                    <Popover
                      key={sectionIdx}
                      className="relative inline-block px-4 text-left"
                    >
                      <Popover.Button className={styles.dropDownTitles}>
                        <span>{section.name}</span>
                        <ChevronDownIcon
                          className={styles.chevron}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute right-0 z-10 p-4 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={optionIdx}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.label}
                                  type="checkbox"
                                  onChange={() => handleSelect(option.label)}
                                  defaultChecked={isSelected(option.label)}
                                  className="w-4 h-4 rounded border-cu-black-200 text-cu-red focus:ring-cu-red-100"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="pr-6 ml-3 text-sm text-cu-black-600 whitespace-nowrap"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  ))}
                </Popover.Group>
              </div>
            </div>
          </div>
        </div>

        {/* Active filters */}
        <div className="bg-white border border-t-0 rounded-bl-lg rounded-br-lg border-cu-black-100">
          <div className="px-4 py-3 sm:flex sm:items-center sm:px-6">
            <h3 className="py-1 text-sm text-cu-black-600">
              Filters
              <span className="sr-only">, active</span>
            </h3>

            <div
              aria-hidden="true"
              className="hidden w-px h-5 bg-gray-300 sm:ml-4 sm:block"
            />

            <div className="mt-4 sm:mt-0 sm:ml-4">
              <div className="flex flex-wrap items-center gap-3 -m-1">
                {activeFilters.map((activeFilter, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center py-1 pl-3 pr-2 text-sm bg-white border rounded-lg border-cu-black-100 text-cu-black-600"
                  >
                    <span>{activeFilter}</span>
                    <button
                      type="button"
                      onClick={() => handleRemove(activeFilter)}
                      className="inline-flex flex-shrink-0 w-4 h-4 p-1 ml-1 rounded-full text-cu-black-400 hover:bg-cu-red hover:text-white"
                    >
                      <span className="sr-only">
                        Remove filter for {activeFilter}
                      </span>
                      <svg
                        className="w-2 h-2"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 8 8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeWidth="1.5"
                          d="M1 1l6 6m0-6L1 7"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
