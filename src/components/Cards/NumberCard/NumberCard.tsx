import React from 'react';

type TitleTypeProps = 'h2' | 'h3';

export interface NumberCardProps {
  children?: React.ReactNode;
  title?: string;
  content?: string;
  isCenter?: boolean;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

const NumberCardBase = ({ children, isCenter }: NumberCardProps) => {
  const textAlign = isCenter ? 'text-center' : '';

  return (
    <div
      className={`relative flex flex-col max-w-md gap-2 px-6 py-5 border rounded-lg shadow-lg border-cu-black-100 ${textAlign}`}
    >
      {children}
    </div>
  );
};

const Title = ({ as = 'h3', title }: TitleProps & NumberCardProps) => {
  return React.createElement(
    as,
    {
      className: `text-sm font-light text-cu-black-600 md:text-base`,
    },
    title
  );
};

const Content = ({ content }: NumberCardProps) => {
  return (
    <p className="text-3xl font-semibold text-cu-black-800 md:text-4xl">
      {content}
    </p>
  );
};

export const NumberCard = Object.assign(NumberCardBase, {
  Content,
  Title,
});
