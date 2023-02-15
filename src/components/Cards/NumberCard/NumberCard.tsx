import React from 'react';

type TitleTypeProps = 'h2' | 'h3';

export interface NumberCardProps {
  children?: React.ReactNode;
  title: string;
  content: string;
  isCenter?: boolean;
}

export interface TitleProps {
  as?: TitleTypeProps;
}

export const NumberCard = ({ title, content, isCenter }: NumberCardProps) => {
  const textAlign = isCenter ? 'text-center' : '';

  return (
    <div
      className={`relative flex flex-col gap-2 px-6 py-5 bg-white border border-l-8 rounded-lg shadow-lg not-prose border-cu-black-100 border-l-cyan-300 md:max-w-lg ${textAlign}`}
    >
      <p className="text-sm font-light text-cu-black-600 md:text-base">
        {title}
      </p>
      <p className="text-3xl font-semibold text-cu-black-800 md:text-4xl">
        {content}
      </p>
    </div>
  );
};
