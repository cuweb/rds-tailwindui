import React, { InputHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';

export interface CheckboxProps {
  label?: string;
  caption?: string;
}

export const Checkbox = ({
  label,
  caption,
  ...props
}: CheckboxProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="relative flex items-start">
        {/* Input Field  */}
        <div className="flex h-5 items-center">
          <input
            {...field}
            {...props}
            className={`h-4 w-4 rounded  ${
              meta.touched && meta.error ? 'border-cu-red' : 'border-gray-300'
            }  text-indigo-600 focus:ring-indigo-500`}
            aria-invalid={meta.touched && meta.error ? true : false}
            aria-describedby={
              field.name + '-' + (meta.touched && meta.error ? 'error' : '')
            }
          />
        </div>
        <div className="ml-3 text-sm">
          {/* Input Label  */}
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
          {/* Input Caption  */}
          <p className="text-gray-500">
           {caption}
          </p>
        </div>
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
