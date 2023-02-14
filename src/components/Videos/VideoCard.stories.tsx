import React from 'react';
import { Meta } from '@storybook/react';
import { VideoCard } from './VideoCard';
import { Column } from '../../layouts';

export default {
  title: 'Components/Elements/VideoCard',
  component: VideoCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof VideoCard>;

export const Default = () => {
  return (
    <Column maxWidth="5xl">
      <VideoCard source="https://www.youtube.com/watch?v=f2Wrqj1wjng" />
    </Column>
  );
};
