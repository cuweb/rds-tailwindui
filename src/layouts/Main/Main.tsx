import React from 'react';

export interface MainProps {
  children: React.ReactNode;
  hasOverlap?: boolean;
  hasSpacing?: boolean;
}

const styles = {
  core: `relative`,
  spacing: `py-10 lg:py-12 px-6 lg:px-8`,
  overlap: `z-20 -mt-20 md:-mt-32`,
};

export const Main = ({ children, hasOverlap, hasSpacing }: MainProps) => {
  const overlapStyles = hasOverlap ? styles.overlap : '';
  const spacingStyles = hasSpacing ? styles.spacing : '';

  return (
    <main className={`${styles.core} ${spacingStyles} ${overlapStyles}`}>
      {children}
    </main>
  );
};
