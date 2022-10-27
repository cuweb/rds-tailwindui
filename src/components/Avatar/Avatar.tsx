import React from 'react';
import { UserInfoType } from '../../types/UserInfo';

export interface AvatarProps {
  rounded?: boolean;
  noBorder?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
  user: UserInfoType;
  caption?: string;
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

export const Avatar = ({
  size = 'xl',

  user,
  noBorder = false,
  rounded,
  caption,
  onClick,
}: AvatarProps) => {
  const { firstName, lastName, image } = user;
  const initials =
    !image && `${firstName.split('')[0]}${lastName.split('')[0]}`;

  const roundedClassName = rounded ? 'rounded-full' : '';
  const hasonClick = onClick ? 'cursor-pointer' : '';
  const hasBorder = noBorder ? '' : 'ring-2 ring-cu-black-100';

  return (
    <div
      className={`inline-block bg-white ${roundedClassName}  ${sided[size]} ${hasonClick} focus:ring-2 focus:ring-cu-black-100 focus:ring-offset-2 `}
      onClick={onClick}
    >
      {image && (
        <img
          className={`inline-block ${sided[size]}  ${roundedClassName} ${hasBorder} `}
          src={image.src}
          alt={image.alt || `Avatar of ${firstName} ${lastName}`}
          aria-hidden="true"
        />
      )}

      {!image && (
        <div
          className={`font-medium aspect-square flex items-center place-content-center overflow-hidden text-cu-black-800 bg-cu-black-50 ${roundedClassName} ${hasBorder}`}
        >
          {initials}
        </div>
      )}
      {caption && (
        <figcaption className="text-center text-sm py-2">
          {`${caption}`}
        </figcaption>
      )}
    </div>
  );
};
