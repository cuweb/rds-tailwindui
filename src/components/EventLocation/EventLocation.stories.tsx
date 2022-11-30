import React from 'react';
import { Meta } from '@storybook/react';
import { EventLocation } from './EventLocation';

export default {
  title: 'Components/Elements/Location',
  component: EventLocation,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof EventLocation>;

export const Default = () => <EventLocation />;
