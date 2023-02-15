import React from 'react';
import { Link } from '../../Link/Link';
import {
  CalendarDaysIcon,
  MapPinIcon,
  ChevronRightIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { isSameDay, parseISO, getMonth, getDate } from 'date-fns';
import { Badge } from '../../Badge';

// import { rdsFontSizes } from '../../../utils/tailwindClasses';
// import { Badge } from '../../Badge';

// Set types for as props
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';

interface Tags {
  category: { id: number; name: string; slug: string }[];
  audience: { id: number; name: string; slug: string }[];
}
export interface EventItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
  startDateTime?: string;
  endDateTime?: string;
  featuredImage?: string;
  description?: string;
  on_campus?: boolean;
  on_campus_building?: string | null;
  on_campus_room_number?: string | null;
  event_address?: string;
  tags?: Tags;
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

export const EventItem = ({
  as: Component = 'div',
  link,
  title,
  startDateTime,
  endDateTime,
  featuredImage,
  on_campus,
  on_campus_building,
  on_campus_room_number,
  event_address,
  tags,
}: ItemBaseProps & EventItemProps) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80';

  const getMonthName = (month: any, short: boolean = false) => {
    const d = new Date();
    d.setMonth(month);
    const monthName = d.toLocaleString('default', {
      month: short ? 'short' : 'long',
    });
    return monthName;
  };

  const startDate = startDateTime && parseISO(startDateTime);
  const endDate = endDateTime && parseISO(endDateTime);
  const isEventSameDay = startDate && endDate && isSameDay(startDate, endDate);
  const eventStartMonth = startDate && getMonth(startDate);
  const eventStartDate = startDate && getDate(startDate);
  const eventEndDate = endDate && getDate(endDate);

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

  const multiDayDisplay = () => {
    if (!isEventSameDay) {
      return (
        <CalendarDaysIcon
          className="flex-shrink-0 w-6 h-6 mr-2 text-cu-red-300"
          aria-hidden="true"
        />
      );
    } else {
      return (
        <ClockIcon
          className="flex-shrink-0 w-6 h-6 mr-2 text-cu-red-300"
          aria-hidden="true"
        />
      );
    }
  };

  return (
    <Component className="not-prose group relative @container">
      <Link
        href={link}
        className="group relative flex cursor-pointer flex-col gap-6 bg-white p-6 hover:bg-slate-50 focus:outline-none @xl:md:flex-row @2xl:lg:gap-8"
      >
        <div className="hidden md:block relative max-w-[40%]">
          <img
            className="hidden w-full rounded-md object-cover @4xl:lg:block"
            src={featuredImage ? featuredImage : defaultImage}
            alt=""
          />
          <div className="hidden md:flex h-20 w-20 flex-col items-center justify-center rounded-md bg-white shadow-md group-hover:bg-cu-red @4xl:lg:hidden">
            <p className="text-xs font-bold uppercase text-cu-red group-hover:text-white">
              {getMonthName(eventStartMonth, true)}
            </p>
            <p className="text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white">
              {eventStartDate}
            </p>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-1.5 pr-6 md:gap-3.5 @lg:md:pt-1.5">
          <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @lg:md:text-xl @4xl:lg:text-2xl">
            {title}
          </h3>

          <ul className="flex flex-col flex-wrap gap-2 md:flex-row @lg:md:flex-col">
            <li className="flex items-center text-sm text-cu-black-700 @2xl:lg:text-base">
              {multiDayDisplay()}
              {isEventSameDay
                ? formatTime(startDate) + '-' + formatTime(endDate)
                : getMonthName(eventStartMonth) +
                  ' ' +
                  eventStartDate +
                  ' - ' +
                  eventEndDate}
            </li>
            <li className="flex items-start text-sm text-cu-black-700 @2xl:lg:text-base">
              <MapPinIcon className="flex-shrink-0 w-6 h-6 mr-2 text-cu-red-300" />
              {on_campus
                ? on_campus_room_number + ', ' + on_campus_building
                : event_address}
            </li>
          </ul>

          <div className="mt-auto">
            {tags?.category?.map(tag => (
              <Badge key={tag.id}>{tag.name}</Badge>
            ))}
          </div>
        </div>

        <div className="absolute -mt-3 top-1/2 right-4">
          <ChevronRightIcon
            className="flex-none w-6 h-6 ml-auto text-cu-black-300 group-hover:text-cu-red"
            aria-hidden="true"
          />
        </div>
      </Link>
    </Component>
  );
};
