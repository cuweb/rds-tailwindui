import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calendar.css';
export interface CalendarProps {}

export const Calendar: React.FC<CalendarProps> = ({}): JSX.Element => {
  const [selectedDay, setSelectedDay] = useState<Date>();

  const footer = selectedDay ? (
    <p className="text-center">Selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p className="text-center">Please pick a day.</p>
  );

  return (
    <DayPicker
      mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer}
    />
  );
};
