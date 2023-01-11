import React, { useCallback, useState } from 'react';
import { Meta } from '@storybook/react';
import { DateTimePicker } from './DateTimePicker';

export default {
  title: 'Components/Elements/DateTimePicker',
  component: DateTimePicker,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof DateTimePicker>;

export const Default = () => {
  const [, setSelectedTime] = useState('');
  const callbackcal = useCallback(
    (itemSelected: any) => {
      setSelectedTime(itemSelected);
    },
    [setSelectedTime]
  );
  return <DateTimePicker callback={callbackcal} />;
};
