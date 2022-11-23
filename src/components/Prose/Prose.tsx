import React from 'react';

type BaseItemTypeProps = 'article' | 'div';

export interface ItemBaseProps {
  as?: keyof JSX.IntrinsicElements;
}

export interface ProseProps {
  as?: BaseItemTypeProps;
  content: string;
}

const styles =
  'prose prose-lg prose-article prose-img:w-full prose-img:rounded-lg lg:prose-xl';

export const Prose = ({ as: Component = 'article', content }: ProseProps) => {
  return (
    <Component
      className={`${styles}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
