import React from 'react';
import { Meta } from '@storybook/react';
import { VideoCard } from './VideoCard';
import { Column } from '../../../layouts';
import { VideoCardData as data } from './VideoCardData';

export default {
  title: 'Components/Cards/Videos',
  component: VideoCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof VideoCard>;

export const Default = () => {
  return (
    <VideoCard
      source="https://www.youtube.com/watch?v=f2Wrqj1wjng"
      title="Donec commodo sit viverra aliquam porttitor ultrices gravida"
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
      duration="5m 43s"
    />
  );
};

export const gridCards = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <VideoCard
        source={item?.source}
        title={item?.title}
        tags={item?.tags}
        duration={item?.duration}
      />
    ))}
  </Column>
);
