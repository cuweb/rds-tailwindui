import React, { InputHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { formStyles, formErrorStyles } from '../../../utils/formClasses';

export interface InputProps {
  label?: string;
  type?: string;
}

export const Input = ({
  label,
  ...props
}: InputProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <div className={formStyles.elementSpace}>
      <label htmlFor={field.name} className={formStyles.label}>
        {label} {props.required && <span className="text-cu-red">*</span>}
      </label>

      {/* Input Field  */}
      <input
        {...field}
        {...props}
        id={field.name}
        type={props.type}
        className={`${formStyles.input} ${
          meta.touched && meta.error ? formErrorStyles.inputBorder : ''
        }`}
        aria-invalid={meta.touched && meta.error ? true : false}
        aria-describedby={
          field.name + (meta.touched && meta.error ? '-error' : '')
        }
      />

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
    </div>
  );
};

Input.displayName = 'Form.Input';
