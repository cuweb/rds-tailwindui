import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { FieldHookConfig, useField } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { formStyles } from '../../../utils/formClasses';
import { Calendar } from '../../Calendar/Calendar';
const styles = {
  select: `text-xs bg-none rounded-md outline-none appearance-none border-cu-black-100 text-cu-black-900 focus:border-red-500 focus:ring-0`,
};
export interface PickerProps {
  label?: string;
}
export const DateTimePicker = ({
  label,
  ...props
}: PickerProps & FieldHookConfig<string>) => {
  const [field, meta, helper] = useField(props);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(0), 'yyyy-MM-dd')
  );
  const [minutes, setMinutes] = useState('00');
  const [hours, setHours] = useState('01');
  const [noon, setNoon] = useState('AM');

  const callbackcal = useCallback(
    (itemSelected: any) =>
      setSelectedDate(format(new Date(itemSelected), 'yyyy-MM-dd')),
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
    field.onChange(event);
  };

  const handleNoonChange = (event: any) => {
    setNoon(event.target.value);
    field.onChange(event);
  };
  const time = convertTime12to24(`${hours}:${minutes} ${noon}`);

  useEffect(() => {
    helper.setValue(selectedDate + ' ' + time);
  }, [time, selectedDate]);

  return (
    <div className={formStyles.elementSpace}>
      <label htmlFor={field.name} className={formStyles.label} />
      <div
        {...field}
        id={field.name}
        aria-invalid={meta.touched && meta.error ? true : false}
      >
        <Calendar callback={callbackcal} />
        <div className="inline-flex gap-3 p-3 mt-6 bg-white border rounded-lg border-cu-black-100">
          <div className="relative">
            <label htmlFor="field-hours" className="sr-only">
              {label} {props.required && <span className="text-cu-red">*</span>}
            </label>
            <select
              id="field-hours"
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
            <div className="absolute top-3 right-2">
              <ChevronDownIcon width="12" height="12" />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="field-minutes" className="sr-only" />
            <select
              id="field-minutes"
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
            <div className="absolute top-3 right-2">
              <ChevronDownIcon width="12" height="12" />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="field-ampm" className="sr-only" />
            <select
              id="field-ampm"
              value={noon}
              onChange={handleNoonChange}
              name="ampm"
              className={styles.select}
            >
              <option key="AM" value="AM">
                AM
              </option>
              <option key="PM" value="PM">
                PM
              </option>
            </select>
            <div className="absolute top-3 right-2">
              <ChevronDownIcon width="12" height="12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
