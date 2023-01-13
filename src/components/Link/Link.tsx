import React, { forwardRef } from 'react';
import { UrlObject } from 'url';

type Url = string | UrlObject;

export interface LinkProps {
  href: URL | string;
  as?: Url;
  wrapper?: any;
  component?: string;
  className?: string;
  replace?: boolean;
  soft?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  // passHref?: boolean
  prefetch?: boolean;
  locale?: string | false;
  target?: string;
  children: any;
  onMouseEnter?: (e: any) => void;
  onClick?: (e: any) => void;
}

export const Link = forwardRef(function Link(
  {
    href,
    as,
    wrapper,
    component = 'a',
    className,
    replace,
    soft,
    scroll,
    shallow,
    // passHref = false,
    prefetch,
    locale,
    target,
    children,
    onClick,
    onMouseEnter,
  }: LinkProps,
  ref
) {
  const nodeProps = {
    ref,
    href,
    as,
    className,
    replace,
    soft,
    scroll,
    shallow,
    // passHref,
    prefetch,
    locale,
    target,
    onClick,
    onMouseEnter,
  };

  return wrapper
    ? React.createElement(
        wrapper,
        nodeProps,
        React.createElement(component, nodeProps, children)
      )
    : React.createElement(component, nodeProps, children);
});
