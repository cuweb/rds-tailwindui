import React from 'react';
import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';
import { rdsWidth, rdsHeight, rdsTextColor } from '../../utils/tailwindClasses';

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

export interface HeroIconProps {
  icon: IconName;
  outline?: boolean;
  color?: 'black' | 'white' | 'red' | 'gray' | 'dark-gray';
  size?: '4' | '6' | '8' | '12' | '16' | '20';
}

export const HeroIcon = ({
  icon,
  outline = false,
  color = 'black',
  size = '8',
}: HeroIconProps) => {
  const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon];
  return (
    <Icon
      className={`${rdsTextColor[color]} ${rdsWidth[size]} ${rdsHeight[size]}`}
      aria-hidden={true}
    />
  );
};
