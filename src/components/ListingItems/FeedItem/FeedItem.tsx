import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';

// Set header types, changes the default <FeedItem.Title as="h3">
type TitleTypeProps = 'h2' | 'h3';

// Set props for FeedItem
export interface FeedItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
  date?: string;
  excerpt?: string;
  category?: string;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

const FeedItemBase = ({ as: Component, children, link }: any) => {
  return (
    <Component>
      <a
        href={link}
        className="relative flex items-center gap-2 p-6 overflow-hidden cursor-pointer hover:bg-gray-50 focus:outline-none group"
      >
        <div className="flex items-start gap-3">{children}</div>
        <ChevronRightIcon
          className="flex-none w-5 h-5 ml-auto text-cu-black-300"
          aria-hidden="true"
        />
      </a>
    </Component>
  );
};

const Content = ({ children }: FeedItemProps) => {
  return <div className="flex-auto">{children}</div>;
};

const Title = ({
  as = 'h3',
  fontSize = 'base',
  title,
}: TitleProps & FeedItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title
  );
};

const Date = ({ date }: FeedItemProps) => {
  return (
    <p className="mt-1 mb-1 mr-4 text-sm italic text-cu-black-700">{date}</p>
  );
};

const Excerpt = ({ excerpt }: FeedItemProps) => {
  return <p className="mt-2 text-sm text-cu-black-900">{excerpt}</p>;
};

const Category = ({ category }: FeedItemProps) => {
  return (
    <div className="mt-2">
      {/* <Badge>{category}</Badge> */}
      <p className="mt-2 text-sm text-cu-black-900">{category}</p>
    </div>
  );
};

// Set default for base component as props
FeedItemBase.defaultProps = {
  as: 'li',
};

FeedItemBase.displayName = 'FeedItem';
Content.displayName = 'FeedItem.Content';
Title.displayName = 'FeedItem.Title';
Date.displayName = 'FeedItem.Date';
Excerpt.displayName = 'FeedItem.Excerpt';
Category.displayName = 'FeedItem.Category';

export const FeedItem = Object.assign(FeedItemBase, {
  Content,
  Title,
  Date,
  Excerpt,
  Category,
});
