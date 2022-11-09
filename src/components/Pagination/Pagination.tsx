import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import usePagination, { DOTS } from '../../hooks/usePagination';

export interface PaginationProps {
  hasBorder?: boolean;
  hasSpacing?: boolean;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
}

export const Pagination = ({
  hasBorder,
  hasSpacing,
  totalCount,
  siblingCount,
  pageSize,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationRange = usePagination(
    totalCount,
    pageSize,
    siblingCount,
    currentPage
  );

  let lastPage = 0;
  if (paginationRange !== undefined) {
    lastPage = Number(paginationRange[paginationRange.length - 1]);
  }

  if (
    currentPage === 0 ||
    (paginationRange !== undefined && paginationRange.length < 2)
  ) {
    return null;
  }

  const onNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startResult = (currentPage - 1) * pageSize + 1;
  let endResult = totalCount;
  if (totalCount > currentPage * pageSize) {
    endResult = currentPage * pageSize;
  }

  const styles = {
    border: `py-5 border-t border-cu-black-100`,
    spacing: `pl-6 pr-5`,
    mobileButtons: `relative inline-flex items-center px-4 py-2 text-sm font-medium text-cu-black-600 bg-white border border-cu-black-200 rounded-md hover:bg-cu-black-50`,
    pageListNumbers: `flex items-center bg-white py-2 px-4 text-sm text-cu-black-600 border-r border-cu-black-100 last:border-0 cursor-pointer hover:bg-cu-black-50`,
    pageListArrows: `text-cu-black-400 px-2.5`,
  };

  const borderStyles = hasBorder ? styles.border : '';
  const spacingStyles = hasSpacing ? styles.spacing : '';

  return (
    <div
      className={`flex items-center justify-between ${borderStyles} ${spacingStyles}`}
    >
      <div className="flex justify-between flex-1 sm:hidden">
        <button onClick={onPrevious} className={`${styles.mobileButtons}`}>
          Previous
        </button>
        <button onClick={onNext} className={`${styles.mobileButtons}`}>
          Next
        </button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <p className="text-sm text-cu-black-800">
          Showing <span className="font-semibold">{startResult}</span> to{' '}
          <span className="font-semibold">{endResult}</span> of{' '}
          <span className="font-semibold">{totalCount}</span> results
        </p>

        <nav aria-label="Pagination">
          <ul className="inline-flex overflow-hidden border rounded-md border-cu-black-100">
            <li
              className={`${styles.pageListNumbers} ${styles.pageListArrows}`}
              onClick={onPrevious}
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </li>

            {paginationRange !== undefined &&
              paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                  return (
                    <li key={index} className={`${styles.pageListNumbers}`}>
                      &#8230;
                    </li>
                  );
                }
                return (
                  <li
                    key={index}
                    className={`${styles.pageListNumbers} ${
                      Number(pageNumber) === currentPage
                        ? 'bg-cu-black-50 font-semibold'
                        : ''
                    }`}
                    onClick={() => setCurrentPage(Number(pageNumber))}
                  >
                    {pageNumber}
                  </li>
                );
              })}
            <li
              className={`${styles.pageListNumbers} ${styles.pageListArrows}`}
              onClick={onNext}
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
