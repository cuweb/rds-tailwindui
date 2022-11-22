import React from 'react';
import {
  ClockIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { Badge } from '../Badge/index';
import { isSameDay, parseISO, getMonth, getDate } from 'date-fns';

export interface CardsProps {
  name?: string;
  link?: string;
  startDateTime: string;
  endDateTime: string;
  featuredImage?: string;
  description?: string;
  on_campus: boolean;
  on_campus_building?: string | null;
  on_campus_room_number?: string | null;
  event_address?: string;
  tags?:{ id: number, type:string, name: string, slug:string}[];
}

export const Cards = ({
  name,
  link = 'https://carleton.ca',
  startDateTime,
  endDateTime,
  featuredImage,
  on_campus,
  on_campus_building,
  on_campus_room_number,
  event_address,
  tags
}: CardsProps) => {
  const defaultImage =
    'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80';

  const getMonthName = (month: any, short: boolean = false) => {
    const d = new Date();
    d.setMonth(month - 1);
    const monthName = d.toLocaleString('default', {
      month: short ? 'short' : 'long',
    });
    return monthName;
  }

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
          className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
          aria-hidden="true"
        />
      );
    } else {
      return (
        <ClockIcon
          className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
          aria-hidden="true"
        />
      );
    }
  };

  return (
    <div className="relative flex flex-col overflow-hidden duration-300 ease-in rounded-lg shadow-lg group hover:scale-105">
      <a href={link} className="cursor-pointer ">
      <div className="absolute px-6 top-48">
        <div className="flex-none w-16 md:w-20">
          <div className="flex flex-col justify-center flex-none w-auto h-16 text-center duration-300 ease-in transform -translate-y-1/2 rounded-lg shadow bg-gray-50 group-hover:bg-cu-red md:h-20">
            <p className="text-xs font-bold uppercase duration-300 ease-in text-cu-red group-hover:text-white">
            {getMonthName(eventStartMonth, true)}  
            </p>
            <p className="text-2xl font-bold uppercase duration-300 ease-in text-cu-black-800 group-hover:text-white">
            {eventStartDate}
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="object-cover w-full h-48"
          src={featuredImage ? featuredImage : defaultImage}
          alt=""
        />
      </div>

      <div className="bg-white p-7">
        <div className="mt-8">
          <h3 className="text-xl font-semibold duration-300 ease-in text-cu-black group-hover:text-cu-red">
            {name}
          </h3>
          <ul className="flex flex-col gap-3 mt-4">
            <li className="flex items-start text-sm text-cu-black-600">
              {multiDayDisplay()}
              {isEventSameDay
                ? formatTime(startDate) + '-' + formatTime(endDate)
                : getMonthName(eventStartMonth) +
                  ' ' +
                  eventStartDate +
                  ' - ' +
                  eventEndDate}
            </li>

            <li className="flex items-start text-sm text-cu-black-600">
              <MapPinIcon
                className="flex-shrink-0 w-5 h-5 mr-2 text-cu-red-300"
                aria-hidden="true"
              />
              {on_campus
                ? on_campus_building + ',' + on_campus_room_number
                : event_address}
            </li>
          </ul>
          <div className="mt-4">
            {tags?.map(tag=><Badge>{tag.name}</Badge>)}
          </div>
        </div>
      </div>
      </a>
    </div>
  );
};
