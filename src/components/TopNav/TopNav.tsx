import { Disclosure } from '@headlessui/react';
import React from 'react';
import Link from '../Link/Link';
import shield from '../../assets/cu-shield.svg';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { UserInfoType } from '../../types/UserInfo';
import { Avatar } from '../Avatar';
import { DropDown, DropDownItemProps } from '../DropDown';
import { Search } from '../Search';

export interface LinkProps {
  title: string;
  link: string;
}

export interface TopNavProps {
  title: string;
  logoUrl?: string;
  brand?: string;
  login?: React.ReactNode;
  hasSearch?: boolean;
  searchDatabase?: any;
  children?: React.ReactNode;
  sticky?: boolean;
  navLinks?: LinkProps[];
  mobileLink?: LinkProps[];
  wrapLink?: any;
  userMenu?: any;
  userInfo?: UserInfoType;
  searchOn?: string;
}

export const TopNav = ({
  children,
  logoUrl,
  title,
  brand,
  hasSearch,
  searchDatabase,
  searchOn,
  navLinks,
  mobileLink,
  userMenu,
  userInfo,
  sticky,
  login,
  wrapLink,
}: TopNavProps) => {
  const brandLogo = brand ? (
    <>
      <div className="flex flex-shrink-0 items-center">
        <h1 className="sr-only"> {title} </h1>
        <img className="h-16 w-auto" src={brand} alt={title} />
      </div>
    </>
  ) : (
    <>
      {/* add the svg  */}
      <div className="flex flex-shrink-0 items-center">
        <img className="h-10 w-auto" src={shield} alt="Carleton Shield" />
        <h1 className="items-center flex flex-shrink-0 pl-3 pr-2 text-2xl font-semibold">
          {title}
        </h1>
      </div>
    </>
  );

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
            {/* Logo  */}
            <div className="flex flex-shrink-0 items-center hover:text-cu-red">
              <Link href={logoUrl ? logoUrl : '/'} wrapper={wrapLink}>
                {brandLogo}
              </Link>
            </div>

            {/* mobile Menu open Button  */}
            <div className="flex items-center lg:hidden">
              <div className="absolute mx-4 right-4">
                {hasSearch && searchDatabase && (
                  <div className=" inline-flex items-center  p-2">
                    <Search
                      searchDatabase={searchDatabase}
                      searchOn={searchOn}
                    />
                  </div>
                )}

                <Disclosure.Button className="  inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cu-red-500">
                  <span className="sr-only">main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            {/* navigation Links  */}
            <ul className="hidden lg:flex lg:flex-1 lg:gap-6">
              {navLinks &&
                navLinks.map((item, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-cu-black-800 hover:border-cu-red hover:text-cu-red"
                  >
                    <Link href={item.link} wrapper={wrapLink}>
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>

            {/* Login , search and Other Childrens  */}

            <div className="hidden lg:flex lg:items-center lg:gap-6">
              {/* search */}
              {/* this will just search on title in detabase , we need to extend it to add other props search on to top nav  */}
              {hasSearch && searchDatabase && (
                <div className=" inline-flex items-center ">
                  <Search searchDatabase={searchDatabase} searchOn={searchOn} />
                </div>
              )}
              {children}

              {/* Login */}
              {!userInfo && login}
              {userInfo && !userMenu && (
                <Avatar user={userInfo} size="xs" rounded="full" />
              )}
              {userInfo && userMenu && (
                <DropDown listItems={userMenu} menuAlign="right">
                  <Avatar user={userInfo} size="xs" rounded="full" />
                </DropDown>
              )}
            </div>
          </div>
          {/* Mobile Menu  */}
          {/* active state on mobile */}
          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {/* active state css for
            block border-l-4 border-cu-red bg-gradient-to-r from-cu-red-50 to-white py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:bg-cu-red hover:text-cu-red */}
              {mobileLink &&
                // Disclosure button as link when in next to passa wrapper
                mobileLink.map((item, index) => (
                  <Disclosure.Button
                    key={index}
                    as="a"
                    href={item.link}
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red"
                  >
                    {item.title}
                  </Disclosure.Button>
                ))}
            </div>
            {/* login button */}
            {!userInfo && (
              <>
                <div className="py-2 pl-3 pr-4 items-center grid justify-items-center pt-4 pb-3 border-t border-gray-200">
                  {login}
                </div>
              </>
            )}

            {/* userInfo */}
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
                  {userMenu &&
                    userMenu.map((item: DropDownItemProps, index: any) => (
                      <Disclosure.Button
                        key={index}
                        as="a"
                        href={item.href ? item.href : '#'}
                        className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-cu-black-800 hover:border-cu-black-200 hover:bg-gray-50 hover:text-cu-red"
                      >
                        {item.title}
                      </Disclosure.Button>
                    ))}
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
