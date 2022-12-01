import React from 'react';
import { ColumnDefinitionType } from './Table';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
};

const styles = {
  core: `min-w-full divide-y divide-gray-300`,
};

const TableHeader = <T, K extends keyof T>({
  columns,
}: TableHeaderProps<T, K>) => {
  const headers = columns.map((column, index) => {
    return (
      <th scope="col" key={`headerCell-${index}`} className={`${styles.core}`}>
        {column.header}
      </th>
    );
  });

  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
