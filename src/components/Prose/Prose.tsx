import React from 'react';

type BaseItemTypeProps = 'article' | 'section' | 'div';

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements;
}

export interface ProseProps {
  as?: BaseItemTypeProps;
  children?: React.ReactNode;
  //   content: string;
}

const styles = {
  'prose-base': `prose prose-lg`,
  'prose-rds': `prose-rds cutheme-spacing max-w-none md:prose-xl`,
  //   'prose-events': `prose-article prose-img:w-full prose-img:rounded-lg lg:prose-xl`,
};

export const Prose = ({ children, as: Component = 'article' }: ProseProps) => {
  return (
    <Component className={`${styles['prose-base']} ${styles['prose-rds']}`}>
      {children}
    </Component>
  );
};
