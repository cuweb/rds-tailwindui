import React from 'react';
import { rdsFontSizes, rdsPaddingY } from '../../utils/tailwindClasses';

export interface BannerProps {
  children: React.ReactNode;
  title?: string;
  fontSize?: '4xl' | '5xl' | '6xl';
  spacing?: 'base' | 'md' | 'lg' | 'xl' | 'full';
  hasBackground?: boolean;
}

export interface BannerImageProps {
  imageUrl?: string;
}

const BannerBase = ({
  children,
  title,
  fontSize = '4xl',
  spacing = 'base',
  hasBackground,
}: BannerProps) => {
  const textWhite = hasBackground ? 'text-white' : 'text-cu-black-800';

  return (
    <header className="relative bg-cu-black-50">
      <div
        className={`flex flex-col items-center justify-center max-w-5xl gap-8 px-8 py-8 mx-auto lg:px-8 ${rdsPaddingY[spacing]}`}
      >
        <h1
          className={`relative z-50 text-3xl font-medium ${textWhite} ${rdsFontSizes[fontSize]}`}
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

const ButtonGroup = ({ children }: BannerProps) => {
  return <div className="flex flex-wrap justify-center gap-6">{children}</div>;
};

export const Banner = Object.assign(BannerBase, {
  Image,
  ButtonGroup,
});

BannerBase.displayName = 'Banner';
ButtonGroup.displayName = 'Banner.ButtonGroup';
