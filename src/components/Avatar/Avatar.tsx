import React from 'react';
import { UserInfoType } from '../../types/UserInfo';
import {
  rdsSquareSize,
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
  core: `inline-block bg-white overflow-hidden focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2`,
  'no-image': `bg-cu-black-100 flex items-center justify-center font-semibold`,
  shadow: `shadow-lg`,
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
  const noImageTextSize =
    size === 'xs' || size === 'sm' ? 'text-base' : 'text-2xl';
  const hasOnClick = onClick ? 'cursor-pointer' : '';

  return (
    <>
      {image && (
        <img
          className={`${styles.core} ${rdsSquareSize[size]} ${roundedStyle} ${borderWidthStyle} ${borderColorStyle} ${borderColorStyle} ${shadowStyle} ${hasOnClick}`}
          src={image.src}
          alt={image.alt || `Avatar of ${firstName} ${lastName}`}
          aria-hidden="true"
        />
      )}

      {!image && (
        <div
          className={`${styles.core} ${styles['no-image']} ${noImageTextSize} ${rdsSquareSize[size]} ${roundedStyle} ${borderWidthStyle} ${borderColorStyle} ${borderColorStyle} ${shadowStyle} ${hasOnClick}`}
        >
          {initials}
        </div>
      )}
    </>
  );
};
