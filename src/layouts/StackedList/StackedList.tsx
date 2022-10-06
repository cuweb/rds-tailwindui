import React from 'react';

const styles = {
  stackedlist: `overflow-hidden`,
  dividers: `[&>li]:border-cu-cu-black-50 [&>li]:border-b last:[&>li]:border-b-0`,
};

export interface StackedListProps {
  children: React.ReactNode;
  dividers?: boolean;
}

export const StackedList = ({ children, dividers }: StackedListProps) => {
  return (
    <ul
      role="list"
      className={`${styles.stackedlist} ${
        dividers ? styles.dividers : 'bg-white'
      }`}
    >
      {children}
    </ul>
  );
};
