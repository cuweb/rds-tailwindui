import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';

// Set header types, changes the default <NewsItem.Title as="h3">
type TitleTypeProps = 'h2' | 'h3';

// Set props for NewsItem
export interface NewsItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
  cost?: string;
  image?: string;
  alt?: string;
  date?: string;
  excerpt?: string;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

const NewsItemBase = ({ as: Component, children, link }: any) => {
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

const Content = ({ children }: NewsItemProps) => {
  return <div className="flex flex-col flex-auto gap-2">{children}</div>;
};

const Title = ({
  as = 'h3',
  fontSize = 'base',
  title,
}: TitleProps & NewsItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-base font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title
  );
};

const Image = ({ image, alt }: NewsItemProps) => {
  return (
    <div className="flex-none hidden w-20 md:w-32 lg:block">
      <img className="w-auto h-auto rounded" src={image} alt={alt} />
    </div>
  );
};

const Date = ({ date }: NewsItemProps) => {
  return <p className="mr-4 text-sm italic text-cu-black-700">{date}</p>;
};

const Excerpt = ({ excerpt }: NewsItemProps) => {
  return <p className="text-base text-cu-black-900">{excerpt}</p>;
};

// Set default for base component as props
NewsItemBase.defaultProps = {
  as: 'li',
};

NewsItemBase.displayName = 'NewsItem';
Content.displayName = 'NewsItem.Content';
Title.displayName = 'NewsItem.Title';
Image.displayName = 'NewsItem.Image';
Date.displayName = 'NewsItem.Date';
Excerpt.displayName = 'NewsItem.Excerpt';

export const NewsItem = Object.assign(NewsItemBase, {
  Content,
  Title,
  Image,
  Date,
  Excerpt,
});
