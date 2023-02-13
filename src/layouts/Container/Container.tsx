import React from 'react';

type BaseItemTypeProps = 'article' | 'section' | 'div';

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements;
}

export interface ContainerProps {
  children: React.ReactNode;
  as?: BaseItemTypeProps;
  bgColor?: 'white' | 'grey';
  maxWidth?: 'none' | 'full' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const prose = {
  prose: `prose prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg`,
};

const styles = {
  base: `cu-container py-12 px-8 -mx-8`,
  white: `cu-container-white [&+.cu-container-white]:pt-0`,
  grey: `cu-container-grey bg-cu-black-50 [&+.cu-container-grey]:pt-0`,
  width5xl: `[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  width7xl: `[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
  widthFull: `[&>:not(.cu-container):not(.cu-column)]:max-w-7xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
};

export const Container = ({
  children,
  as: Component = 'section',
  bgColor = 'white',
  maxWidth = '5xl',
}: ContainerProps) => {
  const bgStyles = bgColor === 'grey' ? `${styles.grey}` : `${styles.white}`;

  const childWidth = maxWidth
    ? ' [&>:not(.cu-container):not(.cu-column)]:mx-auto [&>:not(.cu-container):not(.cu-column)]:max-w-' +
      maxWidth
    : '';

  return (
    <>
      {/* <div className={`${styles.containerWrap} ${bgStyles} ${childWidth}`}>
      {children}
    </div> */}
      <Component
        className={`${styles.base} ${bgStyles} ${childWidth} ${prose.prose}`}
      >
        {children}
      </Component>
    </>
  );
};
