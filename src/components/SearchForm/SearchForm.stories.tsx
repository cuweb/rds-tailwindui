import React, { useCallback, useState } from 'react';
import { SearchForm } from './SearchForm';
import { Meta } from '@storybook/react';

export default {
  component: SearchForm,
  title: `Components/Search Form`,
} as Meta;

export const Default = () => {
  const [, setMessage] = useState('');
  const callbackcal = useCallback(
    (message: any) => {
      setMessage(message);
    },
    [setMessage]
  );
  return <SearchForm callback={callbackcal} />;
};
