import React, { useEffect } from 'react';
import { useState } from 'react';
import { ColumnDefinitionType } from './Table';
import {
  ChevronUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/20/solid';

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
  const sortedData = [...data].sort((a, b) => {
    if (a[orderBy] === null) return 1;
    if (b[orderBy] === null) return -1;
    if (a[orderBy] === null && b[orderBy] === null) return 0;
    return (
      a[orderBy].toString().localeCompare(b[orderBy].toString(), 'en', {
        numeric: true,
      }) * (asc ? 1 : -1)
    );
  });

  return sortedData;
};

const TableHeader = <T, K extends keyof T>({
  data,
  columns,
  sortData,
}: TableHeaderProps<T, K>) => {
  const [ascending, setAscending] = useState(true);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (active) {
      sortData(sortTableData(data, active, ascending));
    }
  }, [active, ascending]);

  const headers = columns.map((column: any, index) => {
    return (
      <th
        scope="col"
        key={`headerCell-${index}`}
        className={`${styles.core}`}
        aria-sort={
          column.key === active && ascending
            ? 'descending'
            : column.key === active && !ascending
            ? 'ascending'
            : undefined
        }
      >
        {column.sort?.sortable ? (
          <button
            className="w-full h-full text-left"
            onClick={() => {
              setActive(oldActive => {
                setAscending(() => {
                  return oldActive !== column.key ? true : !ascending;
                });
                return column.key;
              });
            }}
            aria-label={'Sort by ' + column.key}
          >
            {column.header}
            {column.key === active && ascending ? (
              <ChevronDownIcon className="inline-block ml-2 w-4 h-4" />
            ) : column.key === active && !ascending ? (
              <ChevronUpIcon className="inline-block ml-2 w-4 h-4" />
            ) : (
              <ChevronUpDownIcon className="inline-block ml-2 w-4 h-4" />
            )}
          </button>
        ) : (
          column.header
        )}
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
