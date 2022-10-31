import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';
import { Badge } from '../../Badge';

// Set types for as props
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';

export interface FeedItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
  date?: string;
  excerpt?: string;
  category?: string;
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

const FeedItemBase = ({
  as: Component = 'div',
  children,
  link,
}: ItemBaseProps & FeedItemProps) => {
  return (
    <Component>
      <a
        href={link}
        className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-start gap-4">{children}</div>
        <ChevronRightIcon
          className="flex-none w-5 h-5 ml-auto text-cu-black-300"
          aria-hidden="true"
        />
      </a>
    </Component>
  );
};

const Content = ({ children }: FeedItemProps) => {
  return <div className="flex flex-col flex-auto gap-2">{children}</div>;
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
  return <p className="mr-4 text-sm italic text-cu-black-700">{date}</p>;
};

const Excerpt = ({ excerpt }: FeedItemProps) => {
  return <p className="text-sm text-cu-black-900">{excerpt}</p>;
};

const Category = ({ category }: FeedItemProps) => {
  return (
    <div>
      <Badge>{category}</Badge>
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
