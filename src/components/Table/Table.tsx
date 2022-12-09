import React from 'react';
import { useState } from 'react';
import TableHeader from './TableHeader';
import TableRows from './TableRows';

export interface ColumnDefinitionType<T, K extends keyof T> {
  key: K;
  header: string;
  sort?: { active: boolean };
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
  const [tableData, setTableData] = useState(data);

  return (
    <table className={`${styles.core}`}>
      <TableHeader data={tableData} columns={columns} sortData={setTableData} />
      <TableRows data={tableData} columns={columns} striped={hasStripes} />
    </table>
  );
};
