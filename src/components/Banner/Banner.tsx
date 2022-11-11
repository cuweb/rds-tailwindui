import React from 'react';
import { rdsFontSizes, rdsPaddingY } from '../../utils/tailwindClasses';

export interface BannerProps {
  children: React.ReactNode;
  title?: string;
  fontSize?: '4xl' | '5xl' | '6xl';
  spacing?: 'base' | 'md' | 'lg' | 'xl' | 'full';
  isType?: 'image' | 'wave' | 'gradient';
}

export interface BannerImageProps {
  imageUrl?: string;
}

const BannerBase = ({
  children,
  title,
  fontSize = '4xl',
  isType,
  spacing = isType ? 'lg' : 'base',
}: BannerProps) => {
  const textWhite = isType ? 'text-white' : 'text-cu-black-800';

  let bgStyle;
  switch (isType) {
    case 'image':
      bgStyle = 'bg-cu-black-900';
      break;
    case 'wave':
      bgStyle = 'bg-gradient-to-b from-cu-red to-cu-red-900';
      break;
    default:
      bgStyle = 'bg-gradient-to-b from-white to-cu-black-100';
  }

  return (
    <header className="relative bg-cu-black-50">
      <div
        className={`flex flex-col items-center justify-center gap-8 px-8 py-8 lg:px-8 ${bgStyle} ${rdsPaddingY[spacing]}`}
      >
        <h1
          className={`relative z-50 max-w-5xl mx-auto text-3xl font-medium ${textWhite} ${rdsFontSizes[fontSize]}`}
        >
          {title}
        </h1>
        {children}
      </div>
    </header>
  );
};

const Image = ({}: BannerImageProps) => {
  return (
    <div className="absolute inset-0">
      <img
        className="object-cover w-full h-full"
        src="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
        alt=""
      />
      <div
        className="absolute inset-0 bg-cu-black-800 mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
  );
};

const Wave = () => {
  return (
    <div className="absolute inset-0 bg-bottom bg-no-repeat bg-contain bg-cu-waves-white-20 md:bg-cover"></div>
  );
};

const ButtonGroup = ({ children }: BannerProps) => {
  return (
    <div className="relative z-50 flex flex-wrap justify-center gap-6 mx-auto max-w-7xl">
      {children}
    </div>
  );
};

export const Banner = Object.assign(BannerBase, {
  Image,
  Wave,
  ButtonGroup,
});

BannerBase.displayName = 'Banner';
ButtonGroup.displayName = 'Banner.ButtonGroup';
