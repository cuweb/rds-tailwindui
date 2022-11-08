import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';
import { CalendarData as data } from './CalendarData';

export default {
  title: 'Components/Input/Calendar',
  component: Calendar,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Calendar>;

const Template: Story<CalendarProps> = (args) => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: data[0].events,
};
