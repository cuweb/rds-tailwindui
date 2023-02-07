import React from 'react';

export const EventLoader = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="border-y-2 shadow-lg mx-auto p-20">
      <div className="h-3 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
      <div className="h-3 mx-auto bg-gray-300 rounded-full dark:bg-gray-700 max-w-[540px]"></div>
      <div className="flex items-center justify-center mt-4">
        <div className="w-20 h-3 bg-gray-200 rounded-full dark:bg-gray-700 mr-3"></div>
        <div className="w-24 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
