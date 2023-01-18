import React, { useCallback, useState } from 'react';
import { Meta } from '@storybook/react';
import { Column, Container } from '../../layouts';
import { DateTimePicker } from './DateTimePicker';

export default {
  title: 'Components/Inputs/Date & Time Picker',
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

export const GreyBackground = () => {
  const [, setSelectedTime] = useState('');
  const callbackcal = useCallback(
    (itemSelected: any) => {
      setSelectedTime(itemSelected);
    },
    [setSelectedTime]
  );
  return (
    <Container bgColor="grey">
      <DateTimePicker callback={callbackcal} />
    </Container>
  );
};

export const MaxWidth = () => {
  const [, setSelectedTime] = useState('');
  const callbackcal = useCallback(
    (itemSelected: any) => {
      setSelectedTime(itemSelected);
    },
    [setSelectedTime]
  );
  return (
    <Column maxWidth="3xl">
      <DateTimePicker callback={callbackcal} />
    </Column>
  );
};
