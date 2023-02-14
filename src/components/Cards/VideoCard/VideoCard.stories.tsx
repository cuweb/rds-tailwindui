import React from 'react';
import { Meta } from '@storybook/react';
import { VideoCard } from './VideoCard';

export default {
  title: 'Components/Cards/Videos',
  component: VideoCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof VideoCard>;

export const Default = () => {
  return <VideoCard source="https://www.youtube.com/watch?v=f2Wrqj1wjng" description='Donec commodo sit viverra aliquam porttitor ultrices
  gravida' tags={['category1','category2']} duration='5m 43s' />;
};
