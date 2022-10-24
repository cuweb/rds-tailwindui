import React, { ReactNode } from 'react';
import { UserInfoType } from '../../types/UserInfo';

// PROP NAME UPDATE REQUIRED
// REMOVE CHILDREN IF NO CHILDREN WILL BE PASSED TO COMPONENT
// REPLACE {bgColor} WITH PROPS AND ACCEPTABLE OPTIONS IF APPLICABLE
export interface AvatarProps {
  className?: string;
  rounded?: boolean;
  noBorder?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
  user?: UserInfoType;
  caption?: string;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const styles = {
  core: `inline-flex items-center justify-center px-4 py-3 font-medium text-white rounded-md focus:outline-none`,
  default: `bg-cu-red hover:bg-cu-black-600`,
  ghost: `border border-1 border-cu-red text-cu-red bg-white hover:bg-cu-red hover:text-white`,
  grey: `text-cu-black-800 bg-cu-black-50 hover:bg-cu-black-600 hover:text-white`,
  white: `border border-1 border-cu-black-200 text-cu-black bg-white hover:bg-cu-black hover:text-white`,
  shadow: `shadow-sm`,
  disabled:
    'disabled:border-slate-300 disabled:border-1 disabled:bg-slate-300 disabled:cursor-default disabled:text-cu-black-600',
};
function sizedetails(size: string) {
  switch (size) {
    case 'xs':
      return `h-8 w-8`;
    case 'sm':
      return `h-16 w-16`;
    case 'md':
      return `h-24 w-24`;
    case 'ld':
      return `h-32 w-32`;
    case 'xl':
      return `h-40 w-40`;
    case '2xl':
      return `h-48 w-48`;
    case '4xl':
      return 'h-56 w-56';
    default:
      return `h-40 w-40`;
  }
}

export const Avatar = ({
  size = 'xl',
  className = '',
  user,
  noBorder = false,
  rounded,
  caption,
  onClick,
}: AvatarProps) => {
  console.log('user details', user);
  // const { firstName, lastName, image } = user;
  // const initials =
  //   !image && `${firstName.split('')[0]} ${lastName.split('')[0]}`;

  // console.log(initials);

  const sizeclass = sizedetails(size);

  const roundedClassName = rounded
    ? 'rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    : '';
  const hasonClick = onClick ? 'cursor-pointer' : '';

  return (
    <>
      <div
        className={`inline-block relative ${sizeclass}  bg-white text-sm ${hasonClick} `}
      >
        {/* <span className="sr-only">Open user menu</span> */}
        <img
          // className="h-8 w-8 rounded-full"
          className={`inline-block ${sizeclass}  ${roundedClassName}`}
          src="https://i.carleton.ca/wp-content/uploads/2016/10/danny-brown-1-1-300x300.jpg"
          alt=""
          onClick={onClick}
          // aria-hidden="true"
        />

        {/* if no image then Initials  */}
        {/* <span className="text-sm font-medium leading-none text-white">TW</span> */}
        {caption && (
          <figcaption className="text-center py-2"> {`${caption}`}</figcaption>
        )}
      </div>
    </>
  );
};
