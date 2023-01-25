import React from 'react';
import { SearchForm } from './SearchForm';
import { Meta } from '@storybook/react';

export default {
  component: SearchForm,
  title: `Components/Inputs/Search Form`,
} as Meta;

export const Default = () => {
  return <SearchForm callback={() => {}} />;
};
