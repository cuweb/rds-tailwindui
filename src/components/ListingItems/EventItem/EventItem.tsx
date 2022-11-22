import React from 'react';
import {
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';
import { Badge } from '../../Badge';
import { parseISO, getMonth, getDate } from 'date-fns';

// Set types for as props
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';

export interface EventItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  name?: string;
  link?: string;
  startDateTime?: string;
  endDateTime?: string;
  featuredImage?: string;
  description?: string;
  on_campus?: boolean;
  on_campus_building?: string | null;
  on_campus_room_number?: string | null;
  event_address?: string;
  tags?: { id: number; type: string; name: string; slug: string }[];
}

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements;
}

export interface BaseItemProps {
  as?: BaseItemTypeProps;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

const EventItemBase = ({
  as: Component = 'div',
  children,
  link,
}: ItemBaseProps & EventItemProps) => {
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
  name,
}: TitleProps & EventItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    name
  );
};

const DateBox = ({ startDateTime }: EventItemProps) => {
  const getMonthName = (month: any, short: boolean = false) => {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString('default', {
      month: short ? 'short' : 'long',
    });
    return monthName;
  };

  const startDate = startDateTime && parseISO(startDateTime);
  const eventStartDate = startDate && getDate(startDate);
  const eventStartMonth = startDate && getMonth(startDate);

  return (
    <div className="flex-none w-16 md:w-20">
      <div className="flex flex-col justify-center flex-none w-auto h-16 text-center rounded-lg shadow bg-gray-50 md:h-20">
        <p className="text-xs font-bold uppercase text-cu-red">
          {getMonthName(eventStartMonth, true)}
        </p>
        <p className="text-2xl font-bold uppercase text-cu-black">
          {eventStartDate}
        </p>
      </div>
    </div>
  );
};

const Details = ({
  startDateTime,
  event_address,
  on_campus,
  on_campus_building,
  on_campus_room_number,
}: EventItemProps) => {
  const startDate = startDateTime && parseISO(startDateTime);

  const formatTime = (date: any) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };

  return (
    <ul className="flex flex-wrap sm:gap-8">
      <li className="flex items-center text-sm text-cu-black-700">
        <ClockIcon
          className="flex-shrink-0 w-5 h-5 mr-1 text-cu-red-300"
          aria-hidden="true"
        />

        <time dateTime={startDateTime}>{formatTime(startDate)}</time>
      </li>
      <li className="flex items-center mt-2 text-sm text-cu-black-700 sm:mt-0">
        <MapPinIcon
          className="flex-shrink-0 w-5 h-5 mr-1 text-cu-red-300"
          aria-hidden="true"
        />
        {on_campus
          ?  on_campus_room_number + ', ' + on_campus_building 
          : event_address}
      </li>
    </ul>
  );
};

const Category = ({ tags }: EventItemProps) => {
  return (
    <div>
      {tags?.map(tag => (
        <Badge>{tag.name}</Badge>
      ))}
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
