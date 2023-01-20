import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export interface SearchFormProps {
  callback: any;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  callback,
}): JSX.Element => {
  const [message, setMessage] = useState('');
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    callback(message);
  }, [message, callback]);
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </div>
      <input
        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
        id="searchform__input"
        name="search"
        type="search"
        autoComplete="off"
        placeholder="Search"
        onChange={handleChange}
        value={message}
      />
    </div>
  );
};
