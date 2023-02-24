import React from 'react';
import { rdsWidth, rdsHeight, rdsTextColor } from '../../utils/tailwindClasses';

export interface HeroIconProps {
  icon: any;
  color?: 'black' | 'white' | 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow';
  size?: '4' | '5' | '6' | '7' | '8' | '12' | '16' | '20';
}

export const HeroIcon = ({ icon, color, size = '8' }: HeroIconProps) => {
  const Icon = icon;
  const hasColor = color ? rdsTextColor[color] : '';

  return (
    <Icon
      className={`${hasColor} ${rdsWidth[size]} ${rdsHeight[size]} `}
      aria-hidden={true}
    />
  );
};
