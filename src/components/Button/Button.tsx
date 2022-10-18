import PlusIcon from '@heroicons/react/20/solid/PlusIcon';
import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  ghost?: boolean;
  full?: boolean;
  center?: boolean;
  children?: React.ReactNode;
  grey?: boolean;
  white?: boolean;
}

const styles = {
  default: `items-center inline-flex rounded-md  px-4 py-3 font-medium shadow-sm focus:outline-none`,
  normal: `bg-cu-red hover:bg-cu-black text-white border border-transparent`,
  ghost: `border-cu-red text-cu-red bg-white border border-1 hover:bg-cu-red hover:text-white`,
  grey: `border border-transparent text-cu-black bg-slate-100 hover:bg-cu-black hover:text-white`,
  white: `border border-1 border-slate-200 text-cu-black bg-white hover:bg-cu-black hover:text-white`,
  disabled: 'disabled:border-gray-400 disabled:cursor-default',
};

export const Button = ({
  disabled,
  title,
  ghost,
  full,
  center,
  white,
  children,
  grey,
  ...rest
}: ButtonProps) => {
  const isGhost = ghost ? styles.ghost : '';
  const isGrey = grey ? styles.grey : '';
  const isWhite = white ? styles.white : '';
  const isFull = full ? 'w-full' : '';
  const isCenter = center ? 'relative left-1/2 -translate-x-1/2 ' : '';

  return (
    <button
      type="button"
      className={`${styles.default} ${!ghost &&
        !grey &&
        !white &&
        styles.normal} ${isGhost} ${isGrey} ${isWhite} ${isFull} ${isCenter}`}
      disabled={disabled}
      {...rest}
    >
      {children}
      {title}
    </button>
  );
};
