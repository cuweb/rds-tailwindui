import React from 'react';
import { CalendarIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';

// Set header types, changes the default <JobItem.Title as="h3">
type TitleTypeProps = 'h2' | 'h3';

// Set props for JobItem
export interface JobItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
  department?: string;
  dateData?: string;
  date?: string;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

const JobItemBase = ({ as: Component, children, link }: any) => {
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

const Content = ({ children }: JobItemProps) => {
  return <div className="flex flex-col flex-auto gap-2">{children}</div>;
};

const Title = ({
  as = 'h3',
  fontSize = 'base',
  title,
}: TitleProps & JobItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title
  );
};

const Details = ({ dateData, date }: JobItemProps) => {
  return (
    <p className="flex text-xs text-cu-black-900">
      <CalendarIcon className="w-4 h-4 mr-1 text-cu-red" aria-hidden="true" />
      <time dateTime={dateData}>Closes {date}</time>
    </p>
  );
};

// Set default for base component as props
JobItemBase.defaultProps = {
  as: 'li',
};

JobItemBase.displayName = 'JobItem';
Content.displayName = 'JobItem.Content';
Title.displayName = 'JobItem.Title';
Details.displayName = 'JobItem.Details';

export const JobItem = Object.assign(JobItemBase, {
  Content,
  Title,
  Details,
});
