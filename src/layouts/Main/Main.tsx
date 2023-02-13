import React from 'react';

export interface MainProps {
  children: React.ReactNode;
  hasOverlap?: boolean;
}

const styles = {
  core: `relative mx-8`,
  overlap: `z-20 -mt-12 md:-mt-24`,
};

export const Main = ({ children, hasOverlap }: MainProps) => {
  const overlapStyles = hasOverlap ? styles.overlap : '';

  return <main className={`${styles.core} ${overlapStyles}`}>{children}</main>;
};
