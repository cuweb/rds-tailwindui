import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Tags } from '../../../types/Tags';
import { Badge } from '../../Badge';
import { Link } from '../../Link/Link';

type BaseItemTypeProps = 'li' | 'div';

export interface PeopleItemsProps {
  children?: React.ReactNode;
  firstName?: string;
  lastName?: string;
  designation?: string;
  email?: string;
  phoneNumber?: string;
  tags?: Tags;
  profileImage?: string;
  link?: string;
  alt?: string;
}

export interface BaseItemProps {
  as?: BaseItemTypeProps;
}

const PeopleItemBase = ({
  as: Component = 'div',
  children,
  link,
}: BaseItemProps & PeopleItemsProps) => {
  return (
    <Component className="not-prose group relative overflow-hidden @container">
      <Link
        href={link}
        className="group relative flex cursor-pointer flex-row gap-4 bg-white p-6 hover:bg-slate-50 focus:outline-none md:gap-5 @sm:md:flex-col @lg:md:flex-row @lg:lg:gap-8"
      >
        {children}

        <div className="absolute top-1/2 right-4 -mt-3">
          <ChevronRightIcon
            className="flex-none w-5 h-5 ml-auto text-cu-black-300"
            aria-hidden="true"
          />
        </div>
      </Link>
    </Component>
  );
};

const Image = ({
  profileImage,
  alt,
  firstName,
  lastName,
}: PeopleItemsProps) => {
  const initials = `${firstName?.split('')[0]}${lastName?.split('')[0]}`;
  return (
    <div className="h-28 w-28 @sm:md:h-36 @sm:md:w-36 @lg:md:h-60 @lg:md:w-60">
      {profileImage && (
        <img
          className="w-full overflow-hidden rounded-lg border-4 border-white object-cover shadow-md"
          src={profileImage}
          alt={alt}
        />
      )}
      {!profileImage && (
        <div
          className={` w-full h-full overflow-hidden rounded-lg border-4  object-cover shadow-md flex items-center justify-center font-semibold  @sm:text-xl @lg:text-6xl bg-cu-black-100`}
        >
          {initials}
        </div>
      )}
    </div>
  );
};

const Details = ({ children }: PeopleItemsProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1.5 pr-6 pt-1 md:gap-px @sm:md:pt-0 @lg:md:pt-2">
      {children}
    </div>
  );
};

const Name = ({ firstName, lastName }: PeopleItemsProps) => {
  return (
    <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red md:text-xl @lg:md:text-2xl">
      {firstName + ' ' + lastName}
    </h3>
  );
};
const Designation = ({ designation }: PeopleItemsProps) => {
  return (
    <p className="text-sm italic text-cu-black-600 @md:md:text-base @2xl:md:text-lg">
      {designation}
    </p>
  );
};

const Contact = ({ children }: PeopleItemsProps) => {
  return <ul className="space-y-1.5 pt-4">{children}</ul>;
};

const Email = ({ email }: PeopleItemsProps) => {
  return (
    <li className="text-sm text-cu-black-700 @2xl:lg:text-base">
      <a
        href="mailto:webdevs@carleton.ca"
        className="font-semibold text-cyan-700 hover:text-cu-red"
      >
        {email}
      </a>
    </li>
  );
};

const PhoneNumber = ({ phoneNumber }: PeopleItemsProps) => {
  return (
    <li className="text-sm text-cu-black-700 hover:text-cu-red @2xl:lg:text-base">
      <a href="#" className="">
        {phoneNumber}
      </a>
    </li>
  );
};

const PeopleTags = ({ tags }: PeopleItemsProps) => {
  return (
    <div className="mt-4 @lg:md:mt-auto ">
      {tags?.category?.map(tag => (
        <Badge key={tag.id}>{tag.name}</Badge>
      ))}
    </div>
  );
};

PeopleItemBase.displayName = 'PeopleItems';
Image.displayName = 'PeopleItems.Image';
Name.displayName = 'PeopleItems.Name';
Designation.displayName = 'PeopleItems.Designation';
Details.displayName = 'PeopleItems.Details';
Contact.displayName = 'PeopleItems.Contact';
PhoneNumber.displayName = 'PeopleItems.PhoneNumber';
Email.displayName = 'PeopleItems.Email';
PeopleTags.displayName = 'PeopleItems.PeopleTags';

export const PeopleItems = Object.assign(PeopleItemBase, {
  Image,
  Details,
  Contact,
  Email,
  PhoneNumber,
  Name,
  Designation,
  PeopleTags,
});
