import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: React.ReactNode;
  ghost?: boolean;
  full?: boolean;
  center?: boolean;
  grey?: boolean;
  white?: boolean;
}

const styles = {
  default: `items-center justify-center inline-flex rounded-md  px-4 py-3 font-medium shadow-sm focus:outline-none`,
  normal: `bg-cu-red hover:bg-cu-black text-white border border-transparent`,
  ghost: `border-cu-red text-cu-red bg-white border border-1 hover:bg-cu-red hover:text-white`,
  grey: `border border-transparent text-cu-black bg-slate-100 hover:bg-cu-black hover:text-white`,
  white: `border border-1 border-slate-200 text-cu-black bg-white hover:bg-cu-black hover:text-white`,
  disabled:
    'disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600',
};

export const Button = ({
  disabled,
  title,
  icon,
  ghost,
  full,
  center,
  white,
  grey,
  ...rest
}: ButtonProps) => {
  const isGhost = ghost ? styles.ghost : '';
  const isGrey = grey ? styles.grey : '';
  const isWhite = white ? styles.white : '';
  const isFull = full ? 'w-full' : '';
  const isCenter = center ? 'relative left-1/2 -translate-x-1/2 ' : '';
  const isDisabled = disabled ? styles.disabled : '';
  //icon sr-only for only icon

  return (
    <button
      type="button"
      className={`${styles.default} ${!ghost &&
        !grey &&
        !white &&
        !disabled &&
        styles.normal} ${isGhost} ${isGrey} ${isWhite} ${isFull} ${isCenter} ${isDisabled}`}
      disabled={disabled}
      {...rest}
    >
      {/* margin with icon when title exist  */}
      <span className={`${title ? 'mr-1' : ''} `}>{icon}</span>
      {title}
    </button>
  );
};
