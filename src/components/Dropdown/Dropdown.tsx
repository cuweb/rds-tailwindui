import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

export interface DropdownItemProps {
  title: string;
}
export interface DropdownProps {
  children?: React.ReactNode;
  isType?: 'button' | 'icon' | 'avatar';
  menuAlign?: 'left' | 'right';
  listItems: DropdownItemProps[];
}

const styles = {
  core: `absolute z-10 w-48 py-1 mt-2 origin-top-left bg-white border rounded-md shadow-lg border-cu-black-100 focus:outline-none`,
};

export const Dropdown = ({
  children,
  isType = 'button',
  listItems,
  menuAlign = 'left',
}: DropdownProps) => {
  console.log(listItems);
  return (
    <Menu
      as={isType === 'button' ? 'div' : 'button'}
      className="relative flex-shrink-0 inline-block"
    >
      <div>
        <Menu.Button as={isType === 'button' ? 'div' : 'button'}>
          <span className="sr-only">Open menu</span>
          {children}
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
