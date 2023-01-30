import React, { InputHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { formStyles, formErrorStyles } from '../../../utils/formClasses';

export interface RadioProps {
  label?: string;
  caption?: string;
  options?: any[];
}

export const Radio = ({
  label,
  caption,
  options,
  ...props
}: RadioProps &
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
        <div key={option.name} className={`${formStyles.radioList}`}>
          <input
            {...field}
            id={option.name}
            type="radio"
            className={`${formStyles.radioInput} ${
              meta.touched && meta.error
                ? formErrorStyles.inputBorder
                : formStyles.inputBorder
            }`}
            checked={field.value === option.name}
            value={option.name}
          />
          <label htmlFor={option.name} className={formStyles.radioLabel}>
            {option.label}
          </label>
        </div>
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

Radio.displayName = 'Form.Radio';
