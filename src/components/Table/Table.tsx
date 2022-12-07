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
  hasStripes?: boolean;
}

const styles = {
  core: `min-w-full divide-y divide-cu-black-100 overflow-hidden shadow ring-1 ring-cu-black ring-opacity-5 md:rounded-lg`,
};

export const Table = <T, K extends keyof T>({
  data,
  columns,
  hasStripes = false,
}: TableProps<T, K>) => {
  return (
    <table className={`${styles.core}`}>
      <TableHeader columns={columns} />
      <TableRows data={data} columns={columns} striped={hasStripes} />
    </table>
  );
};
