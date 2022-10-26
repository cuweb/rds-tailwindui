import React from 'react';
import { HeroIcon } from '../HeroIcon';
import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  icon?: keyof typeof SolidIcons | keyof typeof OutlineIcons;
  isType?: 'default' | 'ghost' | 'grey' | 'white' | 'disabled';
  size?: 'sm' | 'base' | 'lg';
  hasShadow?: boolean;
  isFull?: boolean;
  isCenter?: boolean;
  disabled: boolean;
}

const styles = {
  core: `inline-flex gap-2 items-center justify-center font-medium rounded-md focus:outline-none`,
  default: `bg-cu-red text-white hover:bg-cu-black-600`,
  ghost: `border border-1 border-cu-red text-cu-red bg-white hover:bg-cu-red hover:text-white`,
  grey: `text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600 hover:text-white`,
  white: `border border-1 border-cu-black-200 text-cu-black bg-white hover:bg-cu-black hover:text-white`,
  shadow: `shadow-sm`,
  disabled:
    'disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600',
};

const buttonSizes = {
  sm: `px-3 py-2 text-sm`,
  base: `px-4 py-3 text-base`,
  lg: `px-6 py-4 text-xl`,
};

export const Button = ({
  isType = 'default',
  size = 'base',
  title,
  icon,
  hasShadow,
  isFull,
  isCenter,
  disabled = false,
  ...rest
}: ButtonProps) => {
  console.log('the type is', isType);

  const shadowStyles = hasShadow ? styles.shadow : '';
  const fullStyles = isFull ? 'w-full' : '';
  const centerStyles = isCenter ? 'relative left-1/2 -translate-x-1/2 ' : '';
  const iconSize = size === 'lg' ? '6' : '4';

  return (
    <button
      type="button"
      aria-label={title ? title : 'Icon button'}
      className={`${styles.core}  ${styles[isType]}  ${buttonSizes[size]} ${shadowStyles} ${fullStyles} ${centerStyles}  `}
      disabled={disabled}
      {...rest}
    >
      {icon && (
        <span className={icon && title ? 'mr-0.5' : ''}>
          <HeroIcon icon={icon} size={iconSize} />
        </span>
      )}

      {title}
    </button>
  );
};
