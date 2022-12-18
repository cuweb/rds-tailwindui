import React from 'react';

const styles = {
  stackedlist: `not-prose overflow-hidden`,
  hasDividers: `[&>li]:border-cu-cu-black-50 [&>li]:border-b last:[&>li]:border-b-0`,
};

export interface StackedListProps {
  children: React.ReactNode;
  hasDividers?: boolean;
}

export const StackedList = ({ children, hasDividers }: StackedListProps) => {
  return (
    <ul
      className={`${styles.stackedlist} ${
        hasDividers ? styles.hasDividers : ''
      }`}
    >
      {children}
    </ul>
  );
};
