import { Disclosure } from '@headlessui/react';
import React, { Children } from 'react';
import Link from '../Link/Link';
import shield from '../../assets/cu-shield.svg';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { UserInfoType } from '../../types/UserInfo';

import { DropdownPrev, DropdownPrevItemProps } from '../DropDownPrev';
import { HeroIcon } from '../HeroIcon/HeroIcon';
import { Avatar } from '../Avatar';

export interface NavLinkProps {
  id: string;
  title: string;
  url: string;
}

export interface TopNavProps {
  title: string;
  url: string | URL;
  children?: React.ReactNode;
  sticky?: boolean;
  navLinks?: any;
  brand?: string;
  wrapLink?: any;
  AvatarDropdownList?: any;
  userInfo?: UserInfoType;
}

export const TopNav = ({
  children,
  url,
  title = 'Carleton',
  sticky,
  navLinks,
  brand,
  wrapLink,
  AvatarDropdownList,
  userInfo,
}: TopNavProps) => {
  const brandLogo = brand ? (
    <img className="h-16 w-auto" src={brand} alt="Site Logo" />
  ) : (
    <>
      <img className="h-10 w-auto" src={shield} alt="Carleton" />
      <h1 className="items-center flex flex-shrink-0 pl-3 pr-2 text-2xl font-semibold">
        {title}
      </h1>
    </>
  );

  // const arrayChildren = Children.toArray(children);

  return (
    <Disclosure
      as="nav"
      className={` ${
        sticky ? 'sticky' : ''
      } top-0 z-50 border-t-2 border-cu-red bg-white shadow`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto flex h-20 max-w-7xl gap-6 px-2 sm:px-4 lg:px-8">
            <div className="flex flex-shrink-0 items-center hover:text-cu-red">
              <Link
                href={url}
                wrapper={wrapLink}
                className="flex flex-shrink-0 items-center"
              >
                {brandLogo}
              </Link>
            </div>

            <ul className="hidden lg:flex lg:flex-1 lg:gap-6">
              {navLinks &&
                navLinks.map(({ index, title, link }: any) => (
                  <li
                    key={index}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-cu-black-800 hover:border-cu-red hover:text-cu-red"
                  >
                    <Link href={link} wrapper={wrapLink}>
                      {title}
                    </Link>
                  </li>
                ))}
            </ul>
            {/* mobile Menu Button  */}
            <div className="flex items-center lg:hidden">
              <Disclosure.Button className=" absolute right-4 inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cu-red-500">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-6">
              {children}
              {userInfo && (
                <DropdownPrev
                  component={
                    <Avatar user={userInfo} size="xs" rounded="full" />
                  }
                  items={AvatarDropdownList}
                />
              )}
            </div>
          </div>
          {/* Mobile Menu  */}
          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              {/* block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50 */}
              {navLinks &&
                navLinks.map(({ index, title, link }: any) => (
                  <Disclosure.Button
                    key={index}
                    as="a"
                    href={link}
                    className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-cu-red-300 hover:bg-cu-red-100 hover:text-cu-red-800"
                  >
                    {title}
                  </Disclosure.Button>
                ))}
              {/* {children &&
                Children.map(children, (child, index) => {
                  <Disclosure.Button
                    key={index}
                    as="div"
                    className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
                  >
                    {child}
                  </Disclosure.Button>;
                })} */}
              {/* <Disclosure.Button
                as="div"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-600 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                
              </Disclosure.Button> */}
            </div>
            {userInfo && (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <Avatar user={userInfo} size="xs" rounded="full" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {userInfo.firstName + ' ' + userInfo.lastName}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  {AvatarDropdownList.map(
                    (item: DropdownPrevItemProps, index: any) => (
                      <Disclosure.Button
                        key={index}
                        as="a"
                        href={item.href ? item.href : '#'}
                        className=" px-4 py-2 group items-center flex text-base font-medium text-gray-500 hover:bg-cu-red-100 hover:text-cu-red-800"
                      >
                        {item.icon && (
                          <HeroIcon
                            icon={item.icon}
                            aria-hidden="true"
                            size="4"
                          />
                        )}
                        <span className={item.icon ? 'ml-3' : ''}>
                          {item.title}
                        </span>
                      </Disclosure.Button>
                    )
                  )}
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
