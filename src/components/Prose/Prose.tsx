import React from 'react';

type BaseItemTypeProps = 'article' | 'section' | 'div';

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements;
}

export interface ProseProps {
  as?: BaseItemTypeProps;
  children?: React.ReactNode;
  maxWidth?: 'none' | 'full' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  //   content: string;
}

const styles = {
  'prose-base': `prose prose-lg`,
  'prose-rds': `prose-rds max-w-none md:prose-xl`,
  //   'prose-events': `prose-article prose-img:w-full prose-img:rounded-lg lg:prose-xl`,
};

export const Prose = ({
  children,
  as: Component = 'article',
  maxWidth,
}: ProseProps) => {
  const proseMaxWidth = maxWidth ? 'prose-rds-' + maxWidth : '';

  return (
    <Component
      className={`${styles['prose-base']} ${proseMaxWidth} ${styles['prose-rds']}`}
    >
      {children}
    </Component>
  );
};
