import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';
import data from './CalendarData.json';
const meta: Meta = {
  title: 'Components/Input/Calendar',
  component: Calendar,
};

export default meta;

const Template: Story<CalendarProps> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {
  meetings: data.meetings,
};
