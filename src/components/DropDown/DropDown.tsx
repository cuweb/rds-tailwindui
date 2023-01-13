import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';
import { HeroIcon, IconName } from '../HeroIcon/HeroIcon';
import { Link } from '../Link/Link';

export interface DropDownItemProps {
  title: string | React.ReactNode;
  icon?: IconName;
  href?: string;
  onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
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
    <Popover as="div" className="relative flex-shrink-0 inline-block">
      <div>
        <Popover.Button as={renderAs} className="cursor-pointer">
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
        </Popover.Button>
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
        <Popover.Panel
          static
          className={`${styles.core} ${
            menuAlign === 'left' ? 'left-0' : 'right-0'
          }`}
        >
          {({ close }) => (
            <>
              {listItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href ? item.href : ''}
                    className="hover:bg-gray-100 hover:text-gray-900 group text-gray-700 flex items-center px-4 py-2 text-sm"
                    wrapper={wrapLink}
                    onClick={e => {
                      item.onClick && e.preventDefault();
                      item.onClick && item.onClick(e);
                      close();
                    }}
                  >
                    {item.icon && (
                      <HeroIcon icon={item.icon} aria-hidden="true" size="4" />
                    )}
                    <span className={item.icon ? 'ml-3' : ''}>
                      {item.title}
                    </span>
                  </Link>
                </div>
              ))}
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
