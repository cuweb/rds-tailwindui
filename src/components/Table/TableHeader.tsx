import React from 'react';
import { ColumnDefinitionType } from './Table';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
};

const styles = {
  core: `py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-cu-black-900 `,
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
    <thead className="bg-gray-50">
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
