import { Disclosure } from '@headlessui/react';
import React from 'react';
import CommandPallet from '../CommandPallet/CommandPallet';
import { DropdownPrev, DropdownPrevItemProps } from '../DropDownPrev';
import Link from '../Link/Link';
import shield from '../../assets/cu-shield.svg';
import { AvatarPrev } from '../AvatarPrev';
import { UserInfoType } from '../../types/UserInfo';
import { Button } from '../Button';

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
}

export const TopNav = ({
  children,
  url,
  title = 'Carleton',
  sticky,
  navLinks,
  brand,
  wrapLink,
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

  return (
    <Disclosure
      as="nav"
      className={` ${
        sticky ? 'sticky' : ''
      } top-0 z-50 border-t-2 border-cu-red bg-white shadow`}
    >
      {({ open }) => (
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

          {/* Navigation specific to TopNav, will be a optional subComponent */}
          {/* dropdown as a menu item  */}
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
                  {/* add link wrapper as well and a drop down submenu  option for menu  */}
                </li>
              ))}
          </ul>

          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {children}
          </div>
        </div>
      )}
    </Disclosure>
  );
};
