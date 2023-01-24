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
  <NewsCard link="#">
    <NewsCard.Image image="https://source.unsplash.com/random/400x266" />
    <NewsCard.Content>
      <NewsCard.PostDate date="2022-12-16" />
      <NewsCard.Title
        title={
          'End-of-Year Reflections and Resolutions for Our Web Services Team'
        }
      />
      <NewsCard.Excerpt excerpt="Donec dolor sapien, aliquet eu nibh vel, laoreet aliquam arcu. Suspendisse potenti. Nulla varius, enim nec maximus..." />
    </NewsCard.Content>
    <NewsCard.Badges
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
  </NewsCard>
);

export const gridCards = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard link={item?.url}>
        <NewsCard.Image image={item?.image} />
        <NewsCard.Content>
          <NewsCard.PostDate date={item?.date} />
          <NewsCard.Title title={item?.title} />
          <NewsCard.Excerpt excerpt={item?.excerpt} />
        </NewsCard.Content>
        <NewsCard.Badges tags={item?.tags} />
      </NewsCard>
    ))}
  </Column>
);

export const titleFirst = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard link={item?.url}>
        <NewsCard.Image image={item?.image} />
        <NewsCard.Content>
          <NewsCard.Title title={item?.title} />
          <NewsCard.PostDate date={item?.date} />
          <NewsCard.Excerpt excerpt={item?.excerpt} />
        </NewsCard.Content>
        <NewsCard.Badges tags={item?.tags} />
      </NewsCard>
    ))}
  </Column>
);

export const noExcerpt = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard link={item?.url}>
        <NewsCard.Image image={item?.image} />
        <NewsCard.Content>
          <NewsCard.PostDate date={item?.date} />
          <NewsCard.Title title={item?.title} />
        </NewsCard.Content>
        <NewsCard.Badges tags={item?.tags} />
      </NewsCard>
    ))}
  </Column>
);

export const NoImage = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard link={item?.url}>
        <NewsCard.Content>
          <NewsCard.Title title={item?.title} />
          <NewsCard.PostDate date={item?.date} />
          <NewsCard.Excerpt excerpt={item?.excerpt} />
        </NewsCard.Content>
        <NewsCard.Badges tags={item?.tags} />
      </NewsCard>
    ))}
  </Column>
);
export const bareMinimum = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <NewsCard link={item?.url}>
        <NewsCard.Content>
          <NewsCard.Title title={item?.title} />
        </NewsCard.Content>
      </NewsCard>
    ))}
  </Column>
);
