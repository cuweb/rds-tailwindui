import React from 'react';
import { ColumnDefinitionType } from './Table';

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  striped: boolean;
  range: number[];
};

const styles = {
  core: `whitespace-nowrap px-3 py-4 text-sm text-cu-black-600`,
  tbody: `divide-y divide-gray-200 bg-white`,
};

const TableRows = <T, K extends keyof T>({
  data,
  columns,
  striped,
  range,
}: TableRowsProps<T, K>) => {
  const stripedStyles = striped
    ? 'odd:bg-white even:bg-gray-50'
    : 'hover:bg-blue-50';
  const rows = data.slice(range[0] - 1, range[1]).map((row, index) => {
    return (
      <tr
        className={`${stripedStyles} [&>td]:border-b [&>td]:border-cu-gray-100 [&>td]:last:border-0`}
        key={`row-${index}`}
      >
        {columns.map((column, index2) => {
          return (
            <td key={`cell-${index2}`} className={`${styles.core}`}>
              <>{row[column.key]}</>
            </td>
          );
        })}
      </tr>
    );
  });

  return <tbody className={styles.tbody}>{rows}</tbody>;
};

export default TableRows;
