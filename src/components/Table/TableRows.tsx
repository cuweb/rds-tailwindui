import React from 'react';
import { ColumnDefinitionType } from './Table';

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
};

const styles = {
  core: `min-w-full divide-y divide-gray-300`,
};

const TableRows = <T, K extends keyof T>({
  data,
  columns,
}: TableRowsProps<T, K>) => {
  const rows = data.map((row, index) => {
    return (
      <tr className="hover:bg-gray-50" key={`row-${index}`}>
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

  return <tbody className="divide-y divide-gray-200 bg-white">{rows}</tbody>;
};

export default TableRows;
