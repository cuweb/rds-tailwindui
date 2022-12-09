import React from 'react';
import { ColumnDefinitionType } from './Table';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnDefinitionType<T, K>>;
  data: Array<T>;
  sortData: any;
};

const styles = {
  core: `py-3.5 pl-3 pr-3 text-left text-sm font-semibold text-cu-black-900 `,
  thead: `bg-gray-50`,
};

const sortTableData = (data: any[], sortBy: string | number, sortData: any) => {
  const sortedData = data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return -1;
    if (a[sortBy] > b[sortBy]) return 1;
    return 0;
  });

  console.log(sortedData);

  sortData(sortedData);
};

const TableHeader = <T, K extends keyof T>({
  data,
  columns,
  sortData,
}: TableHeaderProps<T, K>) => {
  const headers = columns.map((column: any, index) => {
    console.log(column);
    return (
      <th scope="col" key={`headerCell-${index}`} className={`${styles.core}`}>
        {column.sort?.active ? (
          <a onClick={() => sortTableData(data, column.key, sortData)}>
            column.headers
          </a>
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
