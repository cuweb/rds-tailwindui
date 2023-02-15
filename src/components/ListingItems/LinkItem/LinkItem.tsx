import React from 'react';
import { LinkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';
import { Link } from '../../Link/Link';

// Set types for as props
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';

export interface LinkItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  link?: string;
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

const LinkItemBase = ({
  as: Component = 'div',
  children,
  link,
}: BaseItemProps & LinkItemProps) => {
  return (
    <Component>
      <Link
        href={link}
        className="relative flex items-center gap-2 p-6 cursor-pointer not-prose group hover:bg-gray-50 focus:outline-none"
      >
        <div className="flex items-center gap-1">
          <div className="flex-none w-auto">
            <LinkIcon className="flex-none w-4 h-4 mr-2 text-cu-red" />
          </div>
          {children}
        </div>
        <ChevronRightIcon
          className="flex-none w-5 h-5 ml-auto text-cu-black-300"
          aria-hidden="true"
        />
      </Link>
    </Component>
  );
};

const Content = ({ children }: LinkItemProps) => {
  return <div className="flex flex-col flex-auto gap-2">{children}</div>;
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
