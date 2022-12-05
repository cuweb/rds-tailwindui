import React, { useCallback, useState } from 'react';
import { Meta } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Inputs/Pagination',
  component: Pagination,
  argTypes: {},
} as Meta<typeof Pagination>;

export const Default = () => {
  const [, setItemState] = useState([]);
  const callback = useCallback(
    (itemRange: React.SetStateAction<never[]>) => {
      setItemState(itemRange);
    },
    [setItemState]
  );
  return (
    <Pagination
      totalCount={48}
      siblingCount={1}
      pageSize={5}
      callback={callback}
    />
  );
};

export const Border = () => {
  const [, setItemState] = useState([]);
  const callback = useCallback(
    (itemRange: React.SetStateAction<never[]>) => {
      setItemState(itemRange);
    },
    [setItemState]
  );
  return (
    <Pagination
      hasBorder
      hasSpacing
      totalCount={48}
      siblingCount={1}
      pageSize={5}
      callback={callback}
    />
  );
};

export const Spacing = () => {
  const [, setItemState] = useState([]);
  const callback = useCallback(
    (itemRange: React.SetStateAction<never[]>) => {
      setItemState(itemRange);
    },
    [setItemState]
  );
  return (
    <Pagination
      hasBorder
      totalCount={48}
      siblingCount={1}
      pageSize={5}
      callback={callback}
    />
  );
};

Default.storyName = 'Default item';
Border.storyName = 'With Top Border';
Spacing.storyName = 'With Spacing';
