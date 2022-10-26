import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: React.ReactNode;
  shadow?: boolean;
  ghost?: boolean;
  full?: boolean;
  center?: boolean;
  grey?: boolean;
  white?: boolean;
}

const styles = {
  core: `inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md focus:outline-none`,
  default: `bg-cu-red hover:bg-cu-black-600`,
  ghost: `border border-1 border-cu-red text-cu-red bg-white hover:bg-cu-red hover:text-white`,
  grey: `text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600 hover:text-white`,
  white: `border border-1 border-cu-black-200 text-cu-black bg-white hover:bg-cu-black hover:text-white`,
  shadow: `shadow-sm`,
  disabled:
    'disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600',
};

export const Button = ({
  disabled,
  title,
  icon,
  shadow,
  ghost,
  full,
  center,
  white,
  grey,
  ...rest
}: ButtonProps) => {
  const hasShadow = shadow ? styles.shadow : '';
  const isGhost = ghost ? styles.ghost : '';
  const isGrey = grey ? styles.grey : '';
  const isWhite = white ? styles.white : '';
  const isFull = full ? 'w-full' : '';
  const isCenter = center ? 'relative left-1/2 -translate-x-1/2 ' : '';
  const isDisabled = disabled ? styles.disabled : '';

  return (
    <button
      type="button"
      aria-label={title ? title : 'Icon button'}
      className={`${styles.core} ${
        !ghost && !grey && !white && !disabled && styles.default
      } ${hasShadow} ${isGhost} ${isGrey} ${isWhite} ${isFull} ${isCenter} ${isDisabled}`}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className={`${title ? 'mr-2' : ''} `}>{icon}</span>}
      {title}
    </button>
  );
};
