import React, { InputHTMLAttributes, ClassAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';
import { formStyles, formErrorStyles } from '../../../utils/formClasses';

export interface FileUploadProps {
  label?: string;
  caption?: string;
  options?: any[];
}

export const FileUpload = ({
  label,
  caption,
  options,
  ...props
}: FileUploadProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  console.log(field, meta);

  return (
    <>
      <p> from file Upload </p>
    </>
  );
};

FileUpload.displayName = 'Form.FileUpload';
