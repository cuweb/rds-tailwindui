import React from 'react';
import {
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';
import { Badge } from '../../Badge';

// Set header types, changes the default <EventItem.Title as="h3">
type BaseItemTypeProps = 'li' | 'div';

// Set header types, changes the default <EventItem.Title as="h3">
type TitleTypeProps = 'h2' | 'h3';

// Set props for EventItem
export interface EventItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
  location?: string;
  time?: string;
  month?: string;
  day?: string;
  date?: string;
  category?: string;
}

export interface BaseItemProps {
  as?: BaseItemTypeProps;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

export interface EventItemBaseProps {
  as?: keyof JSX.IntrinsicElements
  children?: React.ReactNode;
  link?: string | undefined;
}

const EventItemBase = ({
  as: Component = "div",
  children,
  link,
}: EventItemBaseProps): JSX.Element => {
  return (
    <Component>
      <a
        href={link}
        className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center gap-4">{children}</div>
        <ChevronRightIcon
          className="flex-none w-5 h-5 ml-auto text-cu-black-300"
          aria-hidden="true"
        />
      </a>
    </Component>
  );
};

const Content = ({ children }: EventItemProps) => {
  return <div className="flex flex-col flex-auto gap-2">{children}</div>;
};

const Title = ({
  as = 'h3',
  fontSize = 'base',
  title,
}: TitleProps & EventItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title
  );
};

const DateBox = ({ month, day }: EventItemProps) => {
  return (
    <div className="flex-none w-16 md:w-20">
      <div className="flex flex-col justify-center flex-none w-auto h-16 text-center rounded-lg shadow bg-gray-50 md:h-20">
        <p className="text-xs font-bold uppercase text-cu-red">{month}</p>
        <p className="text-2xl font-bold uppercase text-cu-black">{day}</p>
      </div>
    </div>
  );
};

const Details = ({ date, time, location }: EventItemProps) => {
  return (
    <ul className="flex flex-wrap sm:gap-8">
      <li className="flex items-center text-sm text-cu-black-700">
        <ClockIcon
          className="flex-shrink-0 w-5 h-5 mr-1 text-cu-red-300"
          aria-hidden="true"
        />

        <time dateTime={date}>{time}</time>
      </li>
      <li className="flex items-center mt-2 text-sm text-cu-black-700 sm:mt-0">
        <MapPinIcon
          className="flex-shrink-0 w-5 h-5 mr-1 text-cu-red-300"
          aria-hidden="true"
        />
        {location}
      </li>
    </ul>
  );
};

const Category = ({ category }: EventItemProps) => {
  return (
    <div>
      <Badge>{category}</Badge>
    </div>
  );
};

// Set default for base component as props
EventItemBase.defaultProps = {
  as: 'li',
};

EventItemBase.displayName = 'EventItem';
Content.displayName = 'EventItem.Content';
Title.displayName = 'EventItem.Title';
DateBox.displayName = 'EventItem.DateBox';
Details.displayName = 'EventItem.Details';
Category.displayName = 'EventItem.Category';

export const EventItem = Object.assign(EventItemBase, {
  Content,
  Title,
  DateBox,
  Details,
  Category,
});
