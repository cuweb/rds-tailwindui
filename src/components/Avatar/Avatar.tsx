import React from 'react';
import { UserInfoType } from '../../types/UserInfo';
import { rdsRounded } from '../../utils/tailwindClasses';

export interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
  hasBorder?: boolean;
  hasShadow?: boolean;
  rounded?: 'base' | 'md' | 'lg' | 'xl' | 'full' | 'none';
  user: UserInfoType;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const sided = {
  xs: `h-8 w-8 text-xs`,
  sm: `h-16 w-16 text-sm`,
  md: `h-24 w-24 text-base`,
  lg: `h-32 w-32 text-lg`,
  xl: `h-40 w-40 text-xl`,
  '2xl': `h-48 w-48 text-2xl`,
  '4xl': 'h-56 w-56 text-4xl',
};

const styles = {
  core: `inline-block bg-white overflow-hidden focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2`,
  shadow: `shadow-lg`,
};

export const Avatar = ({
  size = 'xl',
  hasShadow,
  user,
  //   noBorder = false,
  rounded = 'none',
  onClick,
}: AvatarProps) => {
  const { firstName, lastName, image } = user;
  const shadow = hasShadow ? styles.shadow : '';
  const hasOnClick = onClick ? 'cursor-pointer' : '';
  //   const initials = `${firstName.split('')[0]}${lastName.split('')[0]}`;
  //   const hasBorder = noBorder ? '' : 'ring-2 ring-cu-black-100';

  return (
    <>
      {image && (
        <img
          //   className={`inline-block ${sided[size]}  ${rounded} ${hasBorder} `}
          className={`${styles.core} ${rdsRounded[rounded]} ${shadow} ${sided[size]} ${hasOnClick}`}
          src={image.src}
          alt={image.alt || `Avatar of ${firstName} ${lastName}`}
          aria-hidden="true"
        />
      )}

      {/* {!image && (
        <div
          className={`font-medium aspect-square flex items-center place-content-center overflow-hidden text-cu-black-800 bg-cu-black-50 ${rounded} ${hasBorder}`}
        >
          {initials}
        </div>
      )} */}
    </>
  );
};
