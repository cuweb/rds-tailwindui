import React from 'react';
import {
  rdsGridColumns,
  rdsGridSpacing,
  rdsMaxWidth,
} from '../../utils/tailwindClasses';

const styles = {
  column: `cu-column mx-auto grid`,
  //   column: `cu-column mx-auto grid grid-cols-1`,
  //   column: `cu-column mx-auto grid grid-cols-1 -my-6`,
};

export interface ColumnProps {
  children: React.ReactNode;
  maxWidth?: 'none' | 'full' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  gridGap?: '0' | '0.5' | '1' | '2' | '4' | '8' | '10';
  cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3';
  isNested?: boolean;
}

export const Column = ({
  children,
  maxWidth = '5xl',
  gridGap = '10',
  cols = '1',
}: ColumnProps) => {
  return (
    <div
      className={`
        ${styles.column}
        ${rdsGridColumns[cols]}
        ${rdsMaxWidth[maxWidth]} ${rdsGridSpacing[gridGap]}
      `}
    >
      {children}
    </div>
  );
};
