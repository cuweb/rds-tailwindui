import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: React.ReactNode;
  isType?: 'default' | 'ghost' | 'grey' | 'white';
  size?: 'sm' | 'base' | 'lg';
  hasShadow?: boolean;
  isFull?: boolean;
  isCenter?: boolean;
  isDisabled?: boolean;
}

// const styles = {
//   core: `inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md focus:outline-none`,
//   default: `bg-cu-red hover:bg-cu-black-600`,
//   ghost: `border border-1 border-cu-red text-cu-red bg-white hover:bg-cu-red hover:text-white`,
//   grey: `text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600 hover:text-white`,
//   white: `border border-1 border-cu-black-200 text-cu-black bg-white hover:bg-cu-black hover:text-white`,
//   shadow: `shadow-sm`,
//   disabled:
//     'disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600',
// };

const styles = {
  core: `inline-flex items-center justify-center font-medium text-white rounded-md focus:outline-none`,
  default: `bg-cu-red hover:bg-cu-black-600`,
  ghost: `border border-1 border-cu-red text-cu-red bg-white hover:bg-cu-red hover:text-white`,
  grey: `text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600 hover:text-white`,
  white: `border border-1 border-cu-black-200 text-cu-black bg-white hover:bg-cu-black hover:text-white`,
  shadow: `shadow-sm`,
  disabled:
    'disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600',
};

const buttonSizes = {
  sm: `px-1 py-1 text-sm`,
  base: `px-4 py-3 text-base`,
  lg: `px-8 py-8 text-2xl`,
};

export const Button = ({
  isType = 'default',
  size = 'base',
  title,
  icon,
  hasShadow,
  isFull,
  isCenter,
  isDisabled = false,
  ...rest
}: ButtonProps) => {
  const shadowStyles = hasShadow ? styles.shadow : '';
  const fullStyles = isFull ? 'w-full' : '';
  const centerStyles = isCenter ? 'relative left-1/2 -translate-x-1/2 ' : '';
  const disabledStyles = isDisabled ? styles.disabled : '';

  let buttonStyles = '';
  switch (isType) {
    case 'ghost':
      buttonStyles = styles.ghost;
      break;
    case 'grey':
      buttonStyles = styles.grey;
      break;
    case 'white':
      buttonStyles = styles.white;
      break;
    default:
      buttonStyles = styles.default;
  }

  let buttonSize = '';
  switch (size) {
    case 'sm':
      buttonSize = buttonSizes.sm;
      break;
    case 'lg':
      buttonSize = buttonSizes.lg;
      break;
    default:
      buttonSize = buttonSizes.base;
  }

  return (
    <button
      type="button"
      aria-label={title ? title : 'Icon button'}
      // className={`${styles.core} ${style.isType} ${buttonSizes.size} ${shadowStyles} ${fullStyles} ${centerStyles} ${disabledStyles}`}
      className={`${styles.core} ${buttonStyles} ${buttonSize} ${shadowStyles} ${fullStyles} ${centerStyles} ${disabledStyles}`}
      disabled={isDisabled}
      {...rest}
    >
      <span className={`${title && icon ? 'mr-2' : ''} `}>{icon}</span>
      {title}
    </button>
  );
};
