import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';

// Set header types, changes the default <DetailsItem.Title as="h3">
type TitleTypeProps = 'h2' | 'h3';

// Set props for DetailsItem
export interface DetailsItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  description?: string;
  //   icon?: string;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

const DetailsItemBase = ({ as: Component, children }: any) => {
  return (
    <Component>
      <div className="relative flex items-center gap-2 p-6 cursor-pointer group hover:bg-gray-50 focus:outline-none">
        <div className="flex items-start gap-4">{children}</div>
      </div>
    </Component>
  );
};

const Content = ({ children }: DetailsItemProps) => {
  return <div className="flex flex-col flex-auto gap-2">{children}</div>;
};

const Title = ({
  as = 'h3',
  fontSize = 'base',
  title,
}: TitleProps & DetailsItemProps) => {
  return React.createElement(
    as,
    {
      className: `text-base font-semibold text-cu-black group-hover:text-cu-red ${rdsFontSizes[fontSize]}`,
    },
    title
  );
};

const Icon = () => {
  return (
    <div className="flex-none w-auto">
      {/* <props.icon className="flex-none w-6 h-6 text-cu-black-400" /> */}
      <MapPinIcon className="flex-none w-6 h-6 text-cu-black-400" />
    </div>
  );
};

const Description = ({ description }: DetailsItemProps) => {
  return <p className="text-base text-cu-black-900">{description}</p>;
};

// Set default for base component as props
DetailsItemBase.defaultProps = {
  as: 'li',
};

DetailsItemBase.displayName = 'DetailsItem';
Content.displayName = 'DetailsItem.Content';
Title.displayName = 'DetailsItem.Title';
Icon.displayName = 'DetailsItem.Icon';
Description.displayName = 'DetailsItem.Description';

export const DetailsItem = Object.assign(DetailsItemBase, {
  Content,
  Title,
  Icon,
  Description,
});
