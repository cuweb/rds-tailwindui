import React, { InputHTMLAttributes, ClassAttributes, useState } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { formStyles, formErrorStyles } from '../../../utils/formClasses';
import { PreviewImage } from '../../FileUpload/PreviewImage';
import { Button } from '../../Button';

export interface FileUploadProps {
  label?: string;
  accept?: string;
}

export const FileUpload = ({
  label,
  accept,
  ...props
}: FileUploadProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta, helper] = useField(props);
  const [previewImage, setPreviewImage] = useState(null);

  const onSelect = (files: any) => {
    setPreviewImage(files![0]);
  };

  const onRemove = () => {
    setPreviewImage(null);
    helper.setValue(''); // helper can set value or reset it
  };

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
        type="file"
        accept={accept}
        onChange={e => {
          onSelect(e.target.files); // passes file object
          field.onChange(e); // triggers the field onChange event so values are synced
        }}
        className={`${formStyles.input} ${
          meta.touched && meta.error ? formErrorStyles.inputBorder : ''
        }`}
        aria-invalid={meta.touched && meta.error ? true : false}
        aria-describedby={
          field.name + (meta.touched && meta.error ? '-error' : '')
        }
      />

      {/* Image Preview */}
      {previewImage && <PreviewImage file={previewImage} />}
      {previewImage && (
        <Button title="Delete" size="sm" isType="ghost" onClick={onRemove} />
      )}

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

FileUpload.displayName = 'Form.Input';
