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
  <NumberCard>
    <NumberCard.Title title="Carleton Alumni" />
    <NumberCard.Content content="177,000+" />
  </NumberCard>
);

export const gridCards = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NumberCard>
        <NumberCard.Title title={item?.title} />
        <NumberCard.Content content={item?.content} />
      </NumberCard>
    ))}
  </Column>
);

export const Center = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NumberCard isCenter>
        <NumberCard.Title title={item?.title} />
        <NumberCard.Content content={item?.content} />
      </NumberCard>
    ))}
  </Column>
);

export const Reversed = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NumberCard>
        <NumberCard.Content content={item?.content} />
        <NumberCard.Title title={item?.title} />
      </NumberCard>
    ))}
  </Column>
);
