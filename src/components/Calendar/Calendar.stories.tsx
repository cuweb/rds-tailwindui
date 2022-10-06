import React, { useCallback, useState } from 'react';
import { Meta } from '@storybook/react';
import { Calendar } from './Calendar';
import data from './CalendarData.json';

export default {
  title: 'Components/Inputs/Calendar',
  component: Calendar,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Calendar>;

export const Default = () => {
  const [, setSelectedDate] = useState(new Date(0));
  const callbackcal = useCallback(
    (itemSelected: any) => {
      setSelectedDate(itemSelected);
    },
    [setSelectedDate]
  );
  return <Calendar events={data.events} callback={callbackcal} />;
};
