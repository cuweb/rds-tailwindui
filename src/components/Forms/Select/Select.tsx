import React, { SelectHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { formStyles, formErrorStyles } from '../../../utils/formClasses';

export interface SelectProps {
  label?: string;
}

export interface OptionsProps {
  options?: any[];
}

const Options = ({ options }: OptionsProps) => {
  return (
    <>
      {options?.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </>
  );
};

const SelectBase = ({
  label,
  ...props
}: SelectProps &
  SelectHTMLAttributes<HTMLSelectElement> &
  ClassAttributes<HTMLSelectElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  return (
    <div className={formStyles.elementSpace}>
      <label htmlFor={field.name} className={formStyles.label}>
        {label}
      </label>

      <select
        {...field}
        {...props}
        id={field.name}
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

SelectBase.displayName = 'Form.Select';
Options.displayName = 'Form.Options';

export const Select = Object.assign(SelectBase, {
  Options,
});