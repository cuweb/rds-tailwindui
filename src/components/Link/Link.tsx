import React, { forwardRef } from 'react';

export interface LinkProps {
  ref?: any;
  href?: string | undefined;
  as?: string | undefined;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  passHref?: boolean;
  prefetch?: boolean;
  locale?: string | false;
  legacyBehavior?: boolean;
  children?: any;
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Link = forwardRef(
  (
    {
      href,
      as,
      children,
      prefetch,
      passHref,
      replace,
      shallow,
      scroll,
      locale,
      className,
      onClick,
      onMouseEnter,
      onTouchStart,
    }: LinkProps,
    ref
  ) => {
    const LinkParams = {
      href,
      as,
      prefetch,
      passHref,
      replace,
      shallow,
      scroll,
      locale,
      className,
      onClick,
      onMouseEnter,
      onTouchStart,
    };

    try {
      const Link = require('next/link');
      return (
        <Link {...LinkParams} ref={ref}>
          {children}
        </Link>
      );
    } catch (e) {
      return <a {...LinkParams}>{children}</a>;
    }
  }
);
