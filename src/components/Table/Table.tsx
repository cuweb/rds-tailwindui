import React from 'react';
import { useState } from 'react';
import TableHeader from './TableHeader';
import TableRows from './TableRows';

export interface ColumnDefinitionType<T, K extends keyof T> {
  key: K;
  header: string;
  sort?: { sortable: boolean };
}

export interface TableProps<T, K extends keyof T> {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  hasStripes?: boolean;
  hasShadow?: boolean;
  hasBorder?: boolean;
}

const styles = {
  core: `min-w-full divide-y divide-cu-black-100 overflow-hidden shadow-lg rounded-lg`,
  shadow: `shadow-lg`,
  border: `border-4 border-cu-black-100`,
};

export const Table = <T, K extends keyof T>({
  data,
  columns,
  hasStripes = false,
  hasShadow,
  hasBorder,
}: TableProps<T, K>) => {
  const [tableData, setTableData] = useState(data);

  const borderStyle = hasBorder ? styles.border : '';
  const shadowStyle = hasShadow ? styles.shadow : '';

  return (
    <table className={`${styles.core} ${borderStyle} ${shadowStyle}`}>
      <TableHeader data={tableData} columns={columns} sortData={setTableData} />
      <TableRows data={tableData} columns={columns} striped={hasStripes} />
    </table>
  );
};
