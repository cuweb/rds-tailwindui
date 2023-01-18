import React from 'react';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import { useSortableTable } from '../../hooks/useSortableTable';

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
  range?: number[];
}

const styles = {
  core: `min-w-full rounded-lg overflow-hidden border-spacing-0 border-separate border-collapse`,
  shadow: `shadow-lg`,
  border: `border border-cu-black-100`,
};

export const Table = <T, K extends keyof T>({
  data,
  columns,
  hasStripes = false,
  hasShadow,
  hasBorder,
  range = [1, -1],
}: TableProps<T, K>) => {
  const [tableData, setTableData] = useSortableTable(data);
  const borderStyle = hasBorder ? styles.border : '';
  const shadowStyle = hasShadow ? styles.shadow : '';

  return (
    <table className={`${styles.core} ${borderStyle} ${shadowStyle}`}>
      <TableHeader columns={columns} sortData={setTableData} />
      <TableRows
        data={tableData}
        columns={columns}
        striped={hasStripes}
        range={range}
      />
    </table>
  );
};
