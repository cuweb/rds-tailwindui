import React from 'react';

const styles = {
  wrapper: `cu-panel not-prose overflow-hidden rounded-lg bg-white`,
  title: `px-6 py-4 text-base md:text-xl font-semibold border-b rounded-t-lg bg-gray-50 text-cu-black-800`,
  grid: `grid overflow-hidden`,
  border: `border border-cu-black-100`,
  shadow: `shadow-lg`,
};

const gridStyles = {
  oneCol: `md:grid-cols-1 [&>*]:border-cu-cu-black-100 [&>*]:border-b last:[&>*]:border-b-0`,
  twoCol: `md:grid-cols-2 [&>*]:border-t [&>*]:border-cu-black-100 first:[&>*]:border-t-0 md:odd:[&>*]:border-r md:[&>*:nth-child(2)]:border-t-0`,
};

export interface StackedListProps {
  children: React.ReactNode;
  cols?: '1' | '2';
  header?: string;
  hasBorder?: boolean;
  hasShadow?: boolean;
}

export const StackedList = ({
  children,
  cols = '1',
  header,
  hasBorder,
  hasShadow,
}: StackedListProps) => {
  const borderStyle = hasBorder ? styles.border : '';
  const shadowStyle = hasShadow ? styles.shadow : '';
  const gridColumns = cols === '1' ? gridStyles.oneCol : gridStyles.twoCol;

  return (
    <div className={`${styles.wrapper} ${borderStyle} ${shadowStyle}`}>
      {header && <h2 className={`${styles.title}`}>{header}</h2>}
      <div className={`grid overflow-hidden ${gridColumns}`}>{children}</div>
    </div>
  );
};
