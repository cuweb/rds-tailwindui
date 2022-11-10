import React from 'react';

export interface BannerProps {
  children: React.ReactNode;
  title?: string;
}

const BannerBase = ({ children, title }: BannerProps) => {
  return (
    <header className="relative bg-gradient-to-b from-white to-cu-black-100">
      <div className="relative flex flex-col items-center justify-between gap-8 px-8 py-8 mx-auto max-w-7xl lg:py-16 lg:px-8">
        <h1 className="text-3xl font-medium text-cu-black-800 lg:text-4xl">
          {title}
        </h1>
        {children}
      </div>
    </header>
  );
};

const ButtonGroup = ({ children }: BannerProps) => {
  return <div className="flex gap-6">{children}</div>;
};

export const Banner = Object.assign(BannerBase, {
  ButtonGroup,
});
