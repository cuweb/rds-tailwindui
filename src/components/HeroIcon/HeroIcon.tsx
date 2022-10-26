import React from 'react';
import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';
import { rdsWidth, rdsHeight, rdsTextColor } from '../../utils/tailwindClasses';

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

export interface HeroIconProps {
  icon: IconName;
  outline?: boolean;
  color?: 'black' | 'white' | 'red' | 'grey' | 'dark-grey';
  size?: '4' | '6' | '8' | '12' | '16' | '20';
  className?: string;
}

export const HeroIcon = ({
  icon,
  outline = false,
  color,
  size = '8',
  className,
}: HeroIconProps) => {
  const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon];
  const hasColor = color ? rdsTextColor[color] : '';

  return (
    <Icon
      className={`${hasColor} ${rdsWidth[size]} ${rdsHeight[size]} ${className}`}
      aria-hidden={true}
    />
  );
};
