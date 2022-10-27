import { Menu, Transition } from '@headlessui/react';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';
import React, { Fragment } from 'react';
import { HeroIcon, IconName } from '../HeroIcon';

export interface DropdownItemProps {
  title: string;
  icon?: IconName;
  href?: string;
  onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
}

export interface DropdownProps {
  button?: string;
  component?: React.ReactNode;
  items: DropdownItemProps[];
  noArrow?: boolean;
  shadow?: boolean;
  border?: boolean;
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export const Dropdown = ({
  button,
  items,
  noArrow = false,
  shadow = false,
  border = false,
  component,
}: DropdownProps) => {
  const shawdowStyle = shadow ? 'shadow-sm' : '';
  const borderStyle = border ? ' border border-gray-300' : '';

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {button && !component && (
          <Menu.Button
            className={` ${shawdowStyle} ${borderStyle} inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-cu-red-400 focus:ring-offset-2 focus:ring-offset-gray-100`}
          >
            {button}
            {!noArrow && (
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            )}
          </Menu.Button>
        )}
        {component && <Menu.Button>{component}</Menu.Button>}
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href={item.href ? item.href : '#'}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    )}
                    onClick={e => {
                      {
                        item.onClick && e.preventDefault();
                      }
                      item.onClick && item.onClick(e);
                    }}
                  >
                    {item.icon && (
                      <HeroIcon icon={item.icon} aria-hidden="true" size="4" />
                    )}
                    <span className={item.icon ? 'ml-3' : ''}>
                      {item.title}
                    </span>
                  </a>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
