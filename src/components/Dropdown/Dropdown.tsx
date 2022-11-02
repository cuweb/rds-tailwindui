import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';

export interface DropDownItemProps {
  title: string;
}

export interface DropDownProps {
  children?: React.ReactNode;
  buttonText?: string;
  renderAs?: 'button' | 'div';
  menuAlign?: 'left' | 'right';
  listItems: DropDownItemProps[];
}

const styles = {
  core: `absolute z-10 w-48 py-1 mt-2 origin-top-left bg-white border rounded-md shadow-lg border-cu-black-100 focus:outline-none`,
};

export const DropDown = ({
  children,
  buttonText,
  renderAs = 'div',
  listItems,
  menuAlign = 'left',
}: DropDownProps) => {
  return (
    <Menu as="div" className="relative flex-shrink-0 inline-block">
      <div>
        <Menu.Button as={renderAs} className="flex cursor-pointer">
          <span className="sr-only">Open menu</span>
          {children && !buttonText ? (
            children
          ) : (
            <>
              <p>{buttonText}</p>
              <ChevronDownIcon
                className="w-4 h-4 mt-1 ml-1"
                aria-hidden="true"
              />
            </>
          )}
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
        <Menu.Items
          className={`${styles.core} ${
            menuAlign === 'left' ? 'left-0' : 'right-0'
          }`}
        >
          {listItems.map(({ title }) => (
            <Menu.Item>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-cu-black-800 hover:bg-cu-black-50"
              >
                {title}
              </a>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
