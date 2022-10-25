import React from 'react';
import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';

export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;

export interface HeroIconProps {
  icon: IconName;
  outline?: boolean;
}

const styles = {
  core: `w-8 h-8 text-cu-black-800`,
};

export const HeroIcon = ({ icon, outline = false }: HeroIconProps) => {
  const Icon = outline ? OutlineIcons[icon] : SolidIcons[icon];
  return <Icon className={`${styles.core}`} aria-hidden={true} />;
};
