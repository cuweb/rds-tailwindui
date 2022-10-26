import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { rdsFontSizes } from '../../../utils/tailwindClasses';

// Set types for as props
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';

export interface DetailsItemProps {
  children?: React.ReactNode;
  fontSize?: 'base' | 'lg' | 'xl';
  title?: string;
  description?: string;
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

const DetailsItemBase = ({
  as: Component = 'div',
  children,
}: ItemBaseProps & DetailsItemProps) => {
  return (
    <Component>
      <div className="relative flex items-center gap-2 p-6 focus:outline-none">
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
      className: `text-base font-semibold text-cu-black ${rdsFontSizes[fontSize]}`,
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
