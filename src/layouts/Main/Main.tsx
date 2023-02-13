import React from 'react';

export interface MainProps {
  children: React.ReactNode;
  hasOverlap?: boolean;
  //   hasSpacing?: boolean;
}

const styles = {
  core: `relative mx-10`,
  spacing: `mx-10`,
  overlap: `z-20 -mt-20 md:-mt-32`,
  //   core: `relative`,
  //   spacing: `py-10 lg:py-12 px-6 lg:px-8`,
  //   overlap: `z-20 -mt-20 md:-mt-32`,
};

export const Main = ({ children, hasOverlap }: MainProps) => {
  const overlapStyles = hasOverlap ? styles.overlap : '';

  return <main className={`${styles.core} ${overlapStyles}`}>{children}</main>;
};
