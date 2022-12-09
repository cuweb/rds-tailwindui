import React from 'react';
import { useState } from 'react';
import { ColumnDefinitionType } from './Table';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
  data: Array<T>;
  sortData: React.Dispatch<React.SetStateAction<any[]>>;
};

const styles = {
  core: `py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-cu-black-900 `,
  thead: `bg-gray-50`,
};

const sortTableData = (data: any[], orderBy: string | number, asc: boolean) => {
  // copy array since its memeory location does not change when sorted

  const sortedData = data.concat().sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return -1;
    if (a[orderBy] > b[orderBy]) return 1;
    return 0;
  });

  if (!asc) {
    return sortedData.reverse();
  }

  return sortedData;
};

const TableHeader = <T, K extends keyof T>({
  data,
  columns,
  sortData,
}: TableHeaderProps<T, K>) => {
  const headers = columns.map((column: any, index) => {
    return (
      <th scope="col" key={`headerCell-${index}`} className={`${styles.core}`}>
        {column.sort?.active ? (
          <button
            onClick={() => {
              sortData(sortTableData(data, column.key, !column.sort.asc));
            }}
          >
            column.headers
          </button>
        ) : (
          column.header
        )}
        {column.header}
      </th>
    );
  });

  return (
    <thead className={styles.thead}>
      <tr>{headers}</tr>
    </thead>
  );
};

export default TableHeader;
