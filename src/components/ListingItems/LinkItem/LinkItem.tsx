import React from 'react';
import { LinkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';

// Set header types, changes the default <LinkItem.Title as="h3">
type TitleTypeProps = 'h2' | 'h3';

// Set props for LinkItem
export interface LinkItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

const LinkItemBase = ({ as: Component, children, link }: any) => {
  return (
    <Component>
      <a
        href={link}
        className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <div className="flex-none w-auto">
            <LinkIcon className="flex-none w-4 h-4 mr-2 text-cu-red" />
          </div>
          {children}
        </div>
        <ChevronRightIcon
          className="flex-none w-5 h-5 ml-auto text-cu-black-300"
          aria-hidden="true"
        />
      </a>
    </Component>
  );
};

const Content = ({ children }: LinkItemProps) => {
  return <div className="flex flex-col flex-auto gap-1">{children}</div>;
};

const Title = ({
  as = 'h3',
  fontSize = 'base',
  title,
}: TitleProps & LinkItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title
  );
};

// Set default for base component as props
LinkItemBase.defaultProps = {
  as: 'li',
};

LinkItemBase.displayName = 'LinkItem';
Content.displayName = 'LinkItem.Content';
Title.displayName = 'LinkItem.Title';

export const LinkItem = Object.assign(LinkItemBase, {
  Content,
  Title,
});
