import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import usePagination, { DOTS } from '../../hooks/usePagination';

export interface PaginationProps {
  totalCount: number;
  siblingCount: number;
  pageSize: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  siblingCount,
  pageSize,
}) => {
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

  const classNames = (...classes: (string | boolean)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-6 sm:px-6">
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{startResult}</span> to{' '}
              <span className="font-medium">{endResult}</span> of{' '}
              <span className="font-medium">{totalCount}</span> results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <ul>
                <a
                  className="relative top-1 inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  onClick={onPrevious}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {paginationRange !== undefined &&
                  paginationRange.map((pageNumber, index) => {
                    if (pageNumber === DOTS) {
                      return (
                        <li
                          key={index}
                          className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                        >
                          &#8230;
                        </li>
                      );
                    }
                    return (
                      <li
                        key={index}
                        className={classNames(
                          Number(pageNumber) === currentPage &&
                            'relative z-10 inline-flex items-center border border-cu-red-500 bg-cu-red-50 px-4 py-2 text-sm font-medium text-cu-red-600 focus:z-20',
                          'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'
                        )}
                        onClick={() => setCurrentPage(Number(pageNumber))}
                      >
                        {pageNumber}
                      </li>
                    );
                  })}
                <li
                  className="relative top-1 inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  onClick={onNext}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
