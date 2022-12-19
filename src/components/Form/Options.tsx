import React from 'react';

export interface OptionsProps {
  options?: any[];
}

export const Options = ({ options }: OptionsProps) => {
  return (
    <>
      {options?.map(option => (
        <>
          <option value={option.value}>{option.label}</option>
        </>
      ))}
    </>
  );
};
