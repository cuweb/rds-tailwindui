import React from 'react';
import { Meta } from '@storybook/react';
import { VideoCard } from './VideoCard';
import { Column } from '../../../layouts';
import { VideoCardData as data } from './VideoCardData';

export default {
  title: 'Cards & Lists/Video/Card',
  component: VideoCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof VideoCard>;

export const Default = () => {
  return (
    <VideoCard
      source="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      tags={{
        category: [
          {
            id: 1,
            name: 'Category One',
            slug: 'category-one',
          },
          {
            id: 2,
            name: 'Category Two',
            slug: 'category-two',
          },
        ],
      }}
    />
  );
};

export const gridCards = () => (
  <Column cols="3" gridGap="10" maxWidth="7xl">
    {data.map(item => (
      <VideoCard source={item?.source} tags={item?.tags} />
    ))}
  </Column>
);
