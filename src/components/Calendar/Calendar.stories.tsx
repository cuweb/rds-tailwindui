import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';
import data from './CalendarData.json';

export default {
  title: 'Components/Input/Calendar',
  component: Calendar,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Calendar>;

const Template: Story<CalendarProps> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  events: data.events,
};
