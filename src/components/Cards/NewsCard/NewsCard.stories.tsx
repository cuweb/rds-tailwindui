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
    title="End-of-Year Reflections and Resolutions for Our Web Services Team"
    link="#"
    image="https://source.unsplash.com/random/400x266"
    alt="Sample image alt tag"
    date="2022-12-16"
    excerpt="Donec dolor sapien, aliquet eu nibh vel, laoreet aliquam arcu. Suspendisse potenti. Nulla varius, enim nec maximus..."
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
        title={item?.title}
        link={item?.url}
        image={item?.image}
        date={item?.date}
        excerpt={item?.excerpt}
        tags={item?.tags}
      />
    ))}
  </Column>
);

export const noExcerpt = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard
        title={item?.title}
        link={item?.url}
        image={item?.image}
        date={item?.date}
        tags={item?.tags}
      />
    ))}
  </Column>
);

export const NoImage = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard
        title={item?.title}
        link={item?.url}
        date={item?.date}
        excerpt={item?.excerpt}
        tags={item?.tags}
      />
    ))}
  </Column>
);

export const bareMinimum = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard title={item?.title} link={item?.url} />
    ))}
  </Column>
);
