import React, { InputHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { formStyles, formErrorStyles } from '../../../utils/formClasses';

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
      <fieldset className={formStyles.elementSpace}>
        <legend className={formStyles.label}>
          Who is your favorite Bel-Air personality?
        </legend>

        <div className={`${formStyles.checkboxList}`}>
          <input
            {...field}
            id="willsmith"
            type="checkbox"
            name="developer"
            value="willsmith"
            className={`${formStyles.checkboxInput} ${
              meta.touched && meta.error
                ? formErrorStyles.inputBorder
                : formStyles.inputBorder
            }`}
          />
          <label htmlFor="willsmith" className={formStyles.checkboxLabel}>
            Will Smith
          </label>
        </div>

        <div className={`${formStyles.checkboxList}`}>
          <input
            {...field}
            id="carltonbanks"
            type="checkbox"
            name="developer"
            value="carltonbanks"
            className={`${formStyles.checkboxInput} ${
              meta.touched && meta.error
                ? formErrorStyles.inputBorder
                : formStyles.inputBorder
            }`}
          />
          <label htmlFor="carltonbanks" className={formStyles.checkboxLabel}>
            Carlton Banks
          </label>
        </div>

        <div className={`${formStyles.checkboxList}`}>
          <input
            {...field}
            id="phillipbanks"
            type="checkbox"
            name="developer"
            value="phillipbanks"
            className={`${formStyles.checkboxInput} ${
              meta.touched && meta.error
                ? formErrorStyles.inputBorder
                : formStyles.inputBorder
            }`}
          />
          <label htmlFor="phillipbanks" className={formStyles.checkboxLabel}>
            Phillip Banks
          </label>
        </div>

        <div className={`${formStyles.checkboxList}`}>
          <input
            {...field}
            id="vivianbanks"
            type="checkbox"
            name="developer"
            value="vivianbanks"
            className={`${formStyles.checkboxInput} ${
              meta.touched && meta.error
                ? formErrorStyles.inputBorder
                : formStyles.inputBorder
            }`}
          />
          <label htmlFor="vivianbanks" className={formStyles.checkboxLabel}>
            Vivian Banks
          </label>
        </div>

        {/* Validation Error Icon*/}
        {meta.touched && meta.error && (
          <div className={formErrorStyles.messageDiv}>
            <ExclamationCircleIcon
              className={formErrorStyles.errorIcon}
              aria-hidden="true"
            />
            <p className={formErrorStyles.errorText} id="email-error">
              {meta.error}
            </p>
          </div>
        )}
      </fieldset>

      <br />
      <br />

      {/* <div className={formStyles.elementSpace}>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
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
            <label htmlFor={field.name} className={formStyles.label}>
              {label}
            </label>
            <p className="text-gray-500">{caption}</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

Checkbox.displayName = 'Form.Checkbox';
