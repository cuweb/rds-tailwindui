import React, {
  InputHTMLAttributes,
  ClassAttributes,
  useRef,
  useState,
} from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { formStyles, formErrorStyles } from '../../../utils/formClasses';
import { PreviewImage } from '../../FileUpload/PreviewImage';

export interface FileUploadProps {
  label?: string;
  maxUploadSize?: Number;
  type?: string;
}

export const FileUpload = ({
  label,
  maxUploadSize = 10,
  ...props
}: FileUploadProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  const fileInput = useRef<any>(null);

  const [viewImage, setViewImage] = useState(null);

  const onFileUpload = async () => {
    let file = fileInput!.current!.files![0];
    setViewImage(file);
  };

  return (
    <>
      <div className={formStyles.elementSpace}>
        <label htmlFor={field.name} className={formStyles.label}>
          {label} {props.required && <span className="text-cu-red">*</span>}
        </label>

        <input
          {...field}
          {...props}
          className={`${formStyles.fileUpload} ${
            meta.touched && meta.error ? formErrorStyles.inputBorder : ''
          }`}
          aria-describedby="file_input_help"
          id={field.name}
          type="file"
          ref={fileInput}
          onChange={onFileUpload}
          // accept="image/gif, image/jpeg , image/png , image/jpg"
          aria-invalid={meta.touched && meta.error ? true : false}
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

        {viewImage && !meta.error && <PreviewImage file={viewImage} />}
      </div>
    </>
  );
};

FileUpload.displayName = 'Form.FileUpload';
