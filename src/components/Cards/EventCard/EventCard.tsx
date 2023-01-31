import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { getDate, getMonth, isSameDay, parseISO } from 'date-fns';
import React from 'react';
import { Badge } from '../../Badge/index';

interface Tags {
  category: { id: number; name: string; slug: string }[];
  audience: { id: number; name: string; slug: string }[];
}

export interface EventCardProps {
  title?: string;
  heading?: 'h2' | 'h3';
  link: string;
  startDateTime: string;
  endDateTime: string;
  featuredImage?: string;
  description?: string;
  onCampus: boolean;
  onCampusBuilding?: string | null;
  onCampusRoomNumber?: string | null;
  eventAddress?: string;
  tags?: Tags;
}

export const EventCard = ({
  title,
  heading: HeadLevel = 'h3',
  link,
  startDateTime,
  endDateTime,
  featuredImage,
  onCampus,
  onCampusBuilding,
  onCampusRoomNumber,
  eventAddress,
  tags,
}: EventCardProps) => {
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

  const startDate = parseISO(startDateTime);
  const endDate = parseISO(endDateTime);

  const eventStartDate = getDate(startDate);
  const eventStartMonth = getMonth(startDate);
  const eventEndDate = getDate(endDate);
  const isEventSameDay = isSameDay(startDate, endDate);

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
    <div className="not-prose group relative overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
      <a href={link} className="relative flex flex-col h-full cursor-pointer">
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 @sm:md:aspect-h-6">
            <img
              className="object-cover w-full"
              src={featuredImage ? featuredImage : defaultImage}
              alt=""
            />
          </div>
          <div className="absolute z-10 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-md shadow-md left-6 -bottom-10 group-hover:bg-cu-red">
            <p className="text-xs font-bold uppercase text-cu-red group-hover:text-white">
              {getMonthName(eventStartMonth, true)}
            </p>
            <p className="text-2xl font-bold uppercase text-cu-black-800 group-hover:text-white">
              {eventStartDate}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-px pt-16 pb-8 px-7">
          <HeadLevel className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
            {title}
          </HeadLevel>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="flex text-sm text-cu-black-600 @sm:md:text-base">
              {multiDayDisplay()}
              {isEventSameDay
                ? formatTime(startDate) + '-' + formatTime(endDate)
                : getMonthName(eventStartMonth) +
                  ' ' +
                  eventStartDate +
                  ' - ' +
                  eventEndDate}
            </li>
            <li className="flex text-sm text-cu-black-600 @sm:md:text-base">
              <MapPinIcon
                className="flex-shrink-0 w-6 h-6 mr-2 text-cu-red-300"
                aria-hidden="true"
              />
              {onCampus
                ? onCampusBuilding + ', ' + onCampusRoomNumber
                : eventAddress}
            </li>
          </ul>
        </div>

        <div className="pb-5 mt-auto px-7">
          {tags?.category?.map(tag => (
            <Badge key={tag.id}>{tag.name}</Badge>
          ))}
        </div>
      </a>
    </div>
  );
};
