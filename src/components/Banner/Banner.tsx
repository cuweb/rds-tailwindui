import React from 'react';
import { rdsFontSizes } from '../../utils/tailwindClasses';

export interface BannerProps {
  children: React.ReactNode;
  title?: string;
  fontSize?: '4xl' | '5xl' | '6xl';
}

const BannerBase = ({ children, title, fontSize = '4xl' }: BannerProps) => {
  return (
    <header className="relative bg-gradient-to-b from-white to-cu-black-100">
      <div className="relative flex flex-col items-center justify-between max-w-5xl gap-8 px-8 py-8 mx-auto lg:py-16 lg:px-8">
        <h1
          className={`text-3xl font-medium text-cu-black-800 text-center ${rdsFontSizes[fontSize]}`}
        >
          {title}
        </h1>
        {children}
      </div>
    </header>
  );
};

const ButtonGroup = ({ children }: BannerProps) => {
  return <div className="flex flex-wrap justify-center gap-6">{children}</div>;
};

export const Banner = Object.assign(BannerBase, {
  ButtonGroup,
});

BannerBase.displayName = 'Banner';
ButtonGroup.displayName = 'Banner.ButtonGroup';
