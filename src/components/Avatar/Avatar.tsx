import React from 'react';
import { UserInfoType } from '../../types/UserInfo';
import {
  rdsRounded,
  rdsBorderWidth,
  rdsBorderColor,
} from '../../utils/tailwindClasses';

export interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
  rounded?: 'lg' | 'full';
  borderWidth?: '1' | '2' | '4' | '8';
  borderColor?: 'black' | 'white' | 'red' | 'grey' | 'dark-grey';
  hasShadow?: boolean;
  user: UserInfoType;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const styles = {
  core: `inline-block bg-white text-cu-black-800 overflow-hidden focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2`,
  'no-image': `bg-cu-black-100 flex items-center justify-center font-semibold`,
  shadow: `shadow-lg`,
};

const avatarSizes = {
  xs: `text-xs h-8 w-8`,
  sm: `text-base h-16 w-16`,
  md: `text-lg h-24 w-24`,
  lg: `text-2xl h-32 w-32`,
  xl: `text-4xl h-40 w-40`,
  '2xl': `text-6xl h-48 w-48`,
  '4xl': 'text-7xl h-56 w-56',
};

export const Avatar = ({
  size = 'xl',
  rounded,
  borderWidth,
  borderColor,
  hasShadow,
  user,
  onClick,
}: AvatarProps) => {
  const { firstName, lastName, image } = user;
  const initials = `${firstName.split('')[0]}${lastName.split('')[0]}`;
  const shadowStyle = hasShadow ? styles.shadow : '';
  const roundedStyle = rounded ? rdsRounded[rounded] : '';
  const borderWidthStyle = borderWidth ? rdsBorderWidth[borderWidth] : '';
  const borderColorStyle = borderColor ? rdsBorderColor[borderColor] : '';
  const hasOnClick = onClick ? 'cursor-pointer' : '';

  return (
    <>
      {image && (
        <img
          className={`${styles.core} ${avatarSizes[size]} ${roundedStyle} ${borderWidthStyle} ${borderColorStyle} ${borderColorStyle} ${shadowStyle} ${hasOnClick}`}
          src={image.src}
          alt={image.alt || `Avatar of ${firstName} ${lastName}`}
          aria-hidden="true"
        />
      )}

      {!image && (
        <div
          className={`${styles.core} ${styles['no-image']} ${avatarSizes[size]} ${roundedStyle} ${borderWidthStyle} ${borderColorStyle} ${borderColorStyle} ${shadowStyle} ${hasOnClick}`}
        >
          {initials}
        </div>
      )}
    </>
  );
};
