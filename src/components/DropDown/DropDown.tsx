import { Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';
import { HeroIcon, IconName } from '../HeroIcon/HeroIcon';
import Link from '../Link/Link';

export interface DropDownItemProps {
  title: string;
  icon?: IconName;
  href?: string;
  onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export interface DropDownProps {
  children?: React.ReactNode;
  buttonText?: string;
  renderAs?: 'button' | 'div';
  menuAlign?: 'left' | 'right';
  listItems: DropDownItemProps[];
  wrapLink?: any;
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
  wrapLink,
}: DropDownProps) => {
  return (
    <Menu as="div" className="relative flex-shrink-0 inline-block">
      <div>
        <Menu.Button as={renderAs} className="cursor-pointer">
          <span className="sr-only">Open menu</span>
          {children && !buttonText ? (
            children
          ) : (
            <p className="flex">
              {buttonText}
              <ChevronDownIcon
                className="w-4 h-4 mt-1 ml-1"
                aria-hidden="true"
              />
            </p>
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
          {listItems.map((item, index) => (
            <Menu.Item key={index}>
              {({ active, close }) => (
                <Link
                  href={item.href ? item.href : '#'}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'group flex items-center px-4 py-2 text-sm'
                  )}
                  onClick={e => {
                    item.onClick && e.preventDefault();
                    item.onClick && item.onClick(e);
                    close();
                  }}
                  wrapper={wrapLink}
                >
                  {item.icon && (
                    <HeroIcon icon={item.icon} aria-hidden="true" size="4" />
                  )}
                  <span className={item.icon ? 'ml-3' : ''}>{item.title}</span>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
