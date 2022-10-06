import React, { useCallback, useState } from 'react';
import { Meta } from '@storybook/react';
import { Filter } from './Filter';
import data from './FilterData.json';

export default {
  title: 'Components/Inputs/Filter',
  component: Filter,
  argTypes: {},
} as Meta<typeof Filter>;

export const Default = () => {
  const [, setFilterItem] = useState([]);
  const callbackfilter = useCallback(
    (filterSelected: any) => {
      setFilterItem(filterSelected);
    },
    [setFilterItem]
  );

  return (
    <Filter
      filters={data.filters}
      callback={callbackfilter}
      sortOptions={data.sortOptions}
    />
  );
};

export const NoSorting = () => {
  const [, setFilterItem] = useState([]);
  const callbackfilter = useCallback(
    (filterSelected: any) => {
      setFilterItem(filterSelected);
    },
    [setFilterItem]
  );
  return <Filter filters={data.filters} callback={callbackfilter} />;
};

Default.storyName = 'With Sorting';
NoSorting.storyName = 'Without Sorting';
