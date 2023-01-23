import { Meta } from '@storybook/react';
import React from 'react';
import { Column } from '../../../layouts';
import { NewsCard } from './NewsCard';
import { NewsItemData as data } from './NewsCardData';

export default {
  title: 'Components/Cards/News',
  component: NewsCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof NewsCard>;

export const Default = () => (
  <NewsCard
    name={'End-of-Year Reflections and Resolutions for Our Web Services Team'}
    date="2022-12-16"
    tags={{
      category: [
        {
          id: 3,
          name: 'Category One',
          slug: 'category-one',
        },
        {
          id: 4,
          name: 'Category Two',
          slug: 'category-two',
        },
      ],
    }}
  />
);
export const gridCards = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard
        name={item?.title}
        date={item?.date}
        image={item?.image}
        tags={item?.tags}
      />
    ))}
  </Column>
);
