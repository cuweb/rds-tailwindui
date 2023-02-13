import React from 'react';

type BaseItemTypeProps = 'article' | 'section' | 'div';

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements;
}

export interface ProseProps {
  as?: BaseItemTypeProps;
  children?: React.ReactNode;
}

const styles = {
  proseBase: `prose prose-lg md:prose-xl max-w-none`,
  proseFirst: `[&>:not(.cu-container):not(.cu-column):first-child]:mt-10`,
  proseLast: `[&>:not(.cu-container):not(.cu-column):last-child]:mb-10`,
  proseWidth: `[&>:not(.cu-container):not(.cu-column)]:max-w-5xl [&>:not(.cu-container):not(.cu-column)]:mx-auto`,
};

export const Prose = ({ children, as: Component = 'article' }: ProseProps) => {
  return (
    <Component
      className={`${styles.proseBase} ${styles.proseFirst} ${styles.proseLast} ${styles.proseWidth}`}
    >
      {children}
    </Component>
  );
};
