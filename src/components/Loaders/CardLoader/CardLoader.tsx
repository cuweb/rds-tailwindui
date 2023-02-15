import React from 'react';

export const CardLoader = () => {
  return (
    <div className="max-w-xl overflow-hidden bg-white rounded-lg shadow-lg not-prose">
      <div className="bg-white animate-pulse">
        <span className="block w-full h-44 bg-cu-black-100"></span>
        <div className="p-6 space-y-3">
          <span className="block w-11/12 h-4 bg-cu-black-100"></span>
          <span className="block w-6/12 h-4 bg-cu-black-100"></span>
          <span className="block w-full h-16 bg-cu-black-100"></span>
          <span className="block w-4/12 h-4 -mt-3 bg-cu-black-100"></span>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
