import React from 'react';

export const CardLoader = () => {
  return (
    <div className="max-w-xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-cu-black-50 animate-pulse">
        <span className="block w-full h-44 bg-cu-black-200"></span>
        <div className="p-6 space-y-3">
          <span className="block w-11/12 h-4 bg-cu-black-200"></span>
          <span className="block w-6/12 h-4 bg-cu-black-200"></span>
          <span className="block w-full h-16 bg-cu-black-200"></span>
          <span className="block w-4/12 h-4 bg-cu-black-200 -mt-3"></span>
        </div>
      </div>
    </div>
  );
};
