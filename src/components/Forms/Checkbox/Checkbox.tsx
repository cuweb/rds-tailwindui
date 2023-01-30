import React, { InputHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { formStyles, formErrorStyles } from '../../../utils/formClasses';

export interface CheckboxProps {
  label?: string;
  caption?: string;
  options?: any[];
}

export const Checkbox = ({
  label,
  caption,
  options,
  ...props
}: CheckboxProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <fieldset className={formStyles.elementSpace}>
      <legend className={formStyles.label}>
        {label} {props.required && <span className="text-cu-red">*</span>}
      </legend>

      {options?.map(option => (
        <>
          <div className={`${formStyles.checkboxList}`}>
            <input
              {...field}
              name={option.name}
              id={option.name}
              key={option.index}
              type="checkbox"
              className={`${formStyles.checkboxInput} ${
                meta.touched && meta.error
                  ? formErrorStyles.inputBorder
                  : formStyles.inputBorder
              }`}
            />
            <label htmlFor={option.name} className={formStyles.checkboxLabel}>
              {option.label}
            </label>
          </div>
        </>
      ))}

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
  );
};

Checkbox.displayName = 'Form.Checkbox';
