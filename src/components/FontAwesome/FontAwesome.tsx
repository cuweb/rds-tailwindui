import React from 'react';
import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';
import { rdsWidth, rdsHeight, rdsTextColor } from '../../utils/tailwindClasses';

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

export interface FontAwesomeProps {
  icon: IconName;
  outline?: boolean;
  color?: 'black' | 'white' | 'red' | 'grey' | 'dark-grey';
  size?: '4' | '6' | '8' | '12' | '16' | '20';
}

export const FontAwesome = ({
  icon,
  outline = false,
  color,
  size = '8',
}: FontAwesomeProps) => {
  const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon];
  const hasColor = color ? rdsTextColor[color] : '';

  return (
    <Icon
      className={`${hasColor} ${rdsWidth[size]} ${rdsHeight[size]} `}
      aria-hidden={true}
    />
  );
};
