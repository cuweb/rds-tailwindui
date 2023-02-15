import { Meta } from '@storybook/react';
import React from 'react';
import { Column } from '../../../layouts';
import { NumberCard } from './NumberCard';
import { NumberCardData as data } from './NumberCardData';

export default {
  title: 'Components/Cards/Numbers',
  component: NumberCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof NumberCard>;

export const Default = () => (
  <NumberCard title="Carleton Alumni" content="177,000+" />
);

export const twoColumns = () => (
  <Column cols="2" gridGap="10" maxWidth="5xl">
    {data.map(item => (
      <NumberCard title={item?.title} content={item?.content} />
    ))}
  </Column>
);

export const threeColumns = () => (
  <Column cols="3" gridGap="10" maxWidth="7xl">
    {data.map(item => (
      <NumberCard title={item?.title} content={item?.content} />
    ))}
  </Column>
);

export const Center = () => (
  <Column cols="3" gridGap="10" maxWidth="7xl">
    {data.map(item => (
      <NumberCard title={item?.title} content={item?.content} isCenter />
    ))}
  </Column>
);
