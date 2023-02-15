import React from 'react';

export const EventLoader = () => {
  return (
    <div role="status" className="not-prose animate-pulse">
      <div className="p-20 mx-auto border-y-2">
        <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
        <div className="h-3 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
        <div className="flex items-center justify-center mt-4">
          <div className="w-20 h-3 mr-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
