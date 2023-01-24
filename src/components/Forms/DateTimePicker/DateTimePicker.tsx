import React, { useCallback, useEffect, useState } from 'react';
import { Calendar } from '../../Calendar/Calendar';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getYear,
  isBefore,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';

const styles = {
  select: `text-xs bg-white rounded-md outline-none appearance-none border-cu-black-100 text-cu-black-900 focus:border-red-500 focus:ring-0`,
};

export const DateTimePicker = (props: any) => {
  const [selectedDate, setSelectedDate] = useState(new Date(0));
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('01');
  const [noon, setNoon] = useState('AM');

  const callbackcal = useCallback(
    (itemSelected: any) => {
      setSelectedDate(itemSelected);
    },
    [setSelectedDate]
  );

  const convertTime12to24 = (time12h: any) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  };
  const handleMinutesChange = (event: any) => {
    setMinutes(event.target.value);
  };

  const handleHoursChange = (event: any) => {
    setHours(event.target.value);
  };

  const handleNoonChange = (event: any) => {
    setNoon(event.target.value);
  };
  const time = convertTime12to24(`${hours}:${minutes} ${noon}`);

  useEffect(() => {
    props.callback(time);
  }, [time, props.callback]);

  return (
    <div>
      <Calendar callback={callbackcal} />

      <div className="inline-flex gap-3 p-3 mt-6 bg-white border rounded-lg border-cu-black-100">
        <select
          value={hours}
          onChange={handleHoursChange}
          name="hours"
          className={styles.select}
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>
              {num < 10 ? '0' + num : num}
            </option>
          ))}
        </select>

        <select
          value={minutes}
          onChange={handleMinutesChange}
          name="minutes"
          className={styles.select}
        >
          <option key="00" value="00">
            00
          </option>
          <option key="15" value="15">
            15
          </option>
          <option key="30" value="30">
            30
          </option>
          <option key="45" value="45">
            45
          </option>
        </select>

        <select
          value={noon}
          onChange={handleNoonChange}
          name="Noon"
          className={styles.select}
        >
          <option key="AM" value="AM">
            AM
          </option>
          <option key="PM" value="PM">
            PM
          </option>
        </select>
      </div>
    </div>
  );
};
