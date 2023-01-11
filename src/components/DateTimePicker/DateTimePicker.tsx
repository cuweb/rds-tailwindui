import React, { useCallback, useEffect, useState } from 'react';
import { Calendar } from '../Calendar/Calendar';

export const DateTimePicker = (props: any) => {
  const [, setSelectedDate] = useState(new Date(0));
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
    <div className="container mx-auto my-12 p-12 bg-gray-100">
      <div className="md:ml-2 md:block">
        <Calendar callback={callbackcal} />
      </div>
      <div className="inline-flex  bg-white rounded-md shadow-lg p-2 my-3">
        <select
          value={hours}
          onChange={handleHoursChange}
          name="hours"
          className=" outline-none border-cu-black-100  text-xs text-cu-black-900 appearance-none bg-transparent rounded-md  focus:border-red-500 focus:ring-0"
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>
              {num < 10 ? '0' + num : num}
            </option>
          ))}
        </select>
        <span className="px-2">:</span>
        <select
          value={minutes}
          onChange={handleMinutesChange}
          name="minutes"
          className="outline-none border-cu-black-100 text-xs text-cu-black-900 appearance-none bg-transparent rounded-md  focus:border-red-500 focus:ring-0"
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
          className="outline-none border-cu-black-100 text-xs text-cu-black-900 appearance-none bg-transparent rounded-md  focus:border-red-500 focus:ring-0"
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
