import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import { FieldHookConfig, useField } from 'formik';
import React, { ClassAttributes, InputHTMLAttributes } from 'react';
import { formErrorStyles, formStyles } from '../../../utils/formClasses';

export interface WYSIWYGProps {
  label?: string;
  type?: string;
  placeholder?: string;
  Editor?: any;
}

export const WYSIWYG = ({
  label,
  placeholder,
  Editor = 'textarea',
  ...props
}: WYSIWYGProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta] = useField(props);

  // const modules = {
  //   toolbar: [
  //     [{ header: '1' }, { header: '2' }, { font: [] }],
  //     [{ size: [] }],
  //     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  //     [
  //       { list: 'ordered' },
  //       { list: 'bullet' },
  //       { indent: '-1' },
  //       { indent: '+1' },
  //     ],
  //     ['link', 'image', 'video'],
  //     ['clean'],
  //   ],
  //   clipboard: {
  //     // toggle to add extra line breaks when pasting HTML:
  //     matchVisual: false,
  //   },
  // };

  // const formats = [
  //   'header',
  //   'font',
  //   'size',
  //   'bold',
  //   'italic',
  //   'underline',
  //   'strike',
  //   'blockquote',
  //   'list',
  //   'bullet',
  //   'indent',
  //   'link',
  //   'image',
  //   'video',
  // ];

  return (
    <>
      <div className={formStyles.elementSpace}>
        <label htmlFor={field.name} className={formStyles.label}>
          {label} {props.required && <span className="text-cu-red">*</span>}
        </label>
        <div>
          <Editor
            {...field}
            id={field.name}
            value={field.value}
            onChange={field.onChange(field.name)}
            onBlur={() => {}}
            placeholder={placeholder}
            // modules={modules}
            // formats={formats}
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
      </div>
    </>
  );
};

WYSIWYG.displayName = 'Form.WYSIWYG';
