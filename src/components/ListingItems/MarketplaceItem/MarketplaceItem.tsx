import React from 'react';
import {
  ChevronRightIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';

// Set header types, changes the default <MarketplaceItem.Title as="h3">
type TitleTypeProps = 'h2' | 'h3';

// Set props for MarketplaceItem
export interface MarketplaceItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
  image?: string;
  cost?: string;
  condition?: string;
  category?: string;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

const MarketplaceItemBase = ({ as: Component, children, link }: any) => {
  return (
    <Component>
      <a
        href={link}
        className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center gap-3">{children}</div>
        <ChevronRightIcon
          className="flex-none w-5 h-5 ml-auto text-cu-black-300"
          aria-hidden="true"
        />
      </a>
    </Component>
  );
};

const Content = ({ children }: MarketplaceItemProps) => {
  return <div className="flex flex-col flex-auto gap-1">{children}</div>;
};

const Title = ({
  as = 'h3',
  fontSize = 'base',
  title,
}: TitleProps & MarketplaceItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title
  );
};

const Image = ({ image }: MarketplaceItemProps) => {
  return (
    <div className="flex-none w-16 md:w-20">
      <img className="w-auto h-auto rounded lg:w-24" src={image} alt="" />
    </div>
  );
};

const Details = ({ cost, condition }: MarketplaceItemProps) => {
  return (
    <ul className="flex flex-wrap sm:gap-2">
      <li className="flex items-center mr-2 text-sm text-cu-black-700">
        <CurrencyDollarIcon
          className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
          aria-hidden="true"
        />
        {condition} condition for {cost}
      </li>
      {/* <li className="flex items-center mt-2 text-sm text-cu-black-700 sm:mt-0">
          <CurrencyDollarIcon
            className="mr-1.5 h-5 w-5 flex-shrink-0 text-cu-red-300"
            aria-hidden="true"
          />
          {location}
        </li> */}
    </ul>
  );
};

const Category = ({ category }: MarketplaceItemProps) => {
  return (
    <div className="mt-1">
      <p>{category}</p>
      {/* <Badge>Fair</Badge>
        <Badge>Available</Badge> */}
    </div>
  );
};

// Set default for base component as props
MarketplaceItemBase.defaultProps = {
  as: 'li',
};

MarketplaceItemBase.displayName = 'MarketplaceItem';
Content.displayName = 'MarketplaceItem.Content';
Title.displayName = 'MarketplaceItem.Title';
Image.displayName = 'MarketplaceItem.Image';
Details.displayName = 'MarketplaceItem.Details';
Category.displayName = 'MarketplaceItem.Category';

export const MarketplaceItem = Object.assign(MarketplaceItemBase, {
  Content,
  Title,
  Image,
  Details,
  Category,
});
