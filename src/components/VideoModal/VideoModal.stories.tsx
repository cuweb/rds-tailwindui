import React from 'react';
import { Meta } from '@storybook/react';

import { VideoModal } from './VideoModal';

export default {
  title: 'Components/Inputs/VideoModal',
  component: VideoModal,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof VideoModal>;

export const VideoModalDefault = () => {
  return (
    <VideoModal isVisible={true} onClose={false}>
      {'hello'}
    </VideoModal>
  );
};
