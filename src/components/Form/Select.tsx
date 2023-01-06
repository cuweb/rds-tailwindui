import React, { SelectHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export interface SelectProps {
  label?: string;
}

export const Select = ({
  label,
  ...props
}: SelectProps &
  SelectHTMLAttributes<HTMLSelectElement> &
  ClassAttributes<HTMLSelectElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <>
      {/* Input Label  */}
      <label
        htmlFor={field.name}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {/* Input Field  */}
        <select
          {...field}
          {...props}
          className={`mt-1 block w-full rounded-md border ${
            meta.touched && meta.error ? 'border-cu-red' : ''
          } py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          aria-invalid={meta.touched && meta.error ? true : false}
          aria-describedby={
            field.name + '-' + (meta.touched && meta.error ? 'error' : '')
          }
        />
        {/* Validation Error Icon*/}
        {meta.touched && meta.error && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>
      {/* Validation Error Message */}
      {meta.touched && meta.error && (
        <p className="mt-2 text-sm text-red-600" id="email-error">
          {meta.error}
        </p>
      )}
    </>
  );
};
Select.displayName = 'Form.Select';
