import React from 'react';
import { Meta } from '@storybook/react';
import { NewsCard } from './NewsCard';
import { NewsItemData as data } from './NewsCardData';
import { Column } from '../../../layouts';

export default {
  title: 'Components/Cards/News',
  component: NewsCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof NewsCard>;

export const Default = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    <NewsCard
      name={'Lived Experience Luncheon Series with Dr. Alex Auerbach'}
      startDateTime="2022-12-16 01:48:41"
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
        audience: [
          {
            id: 1,
            name: 'Student',
            slug: 'student',
          },
          {
            id: 2,
            name: 'Faculty',
            slug: 'faculty',
          },
        ],
      }}
    />
  </Column>
);
export const gridCards = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard
        name={item?.title}
        startDateTime={item?.start_date}
        featuredImage={item?.featured_image}
        tags={item?.tags}
      />
    ))}
  </Column>
);
