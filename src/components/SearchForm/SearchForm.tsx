import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export interface SearchFormProps {
  callback: any;
}

export const SearchForm = ({ callback }: SearchFormProps) => {
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
    <div className="relative flex items-center">
      <MagnifyingGlassIcon
        className="absolute w-5 h-5 text-gray-400 left-4"
        aria-hidden="true"
      />
      <input
        className="w-full h-12 pr-4 text-sm bg-transparent border rounded-lg text-cu-black-800 placeholder-cu-black-300 border-cu-black-100 pl-11 focus:border-cu-black-300 focus:ring-0"
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
