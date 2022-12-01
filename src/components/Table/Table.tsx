import React from 'react';
import TableHeader from './TableHeader';
import TableRows from './TableRows';

export interface ColumnDefinitionType<T, K extends keyof T> {
  key: K;
  header: string;
}

export interface TableProps<T, K extends keyof T> {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
}

const styles = {
  core: `bg-cu-red min-w-full divide-y divide-gray-300`,
};

export const Table = <T, K extends keyof T>({
  data,
  columns,
}: TableProps<T, K>) => {
  return (
    <table className={`${styles.core}`}>
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} />
    </table>
  );
};
