import React from 'react';
import {
  rdsMaxWidth,
  rdsGridColumns,
  rdsGridSpacing,
} from '../../utils/tailwindClasses';

const styles = {
  column: `cu-column mx-auto grid grid-cols-1 [&:last-child]:mb-0`,
  isNotNested: `px-8`,
  isNested: `mt-8`,
};

export interface ColumnProps {
  children: React.ReactNode;
  maxWidth?: 'none' | 'full' | '3xl' | '5xl' | '7xl';
  gridGap?: '0' | '0.5' | '1' | '2' | '4' | '8' | '10';
  cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3';
  isNested?: boolean;
}

export const Column = ({
  children,
  maxWidth = '7xl',
  gridGap = '8',
  cols = '1',
  isNested,
}: ColumnProps) => {
  return (
    <div
      className={`
        ${styles.column}
        ${rdsGridColumns[cols]}
        ${rdsMaxWidth[maxWidth]} ${rdsGridSpacing[gridGap]}
        ${isNested ? styles.isNested : styles.isNotNested}
      `}
    >
      {children}
    </div>
  );
};
