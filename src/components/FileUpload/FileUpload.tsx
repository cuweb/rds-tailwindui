import React, {
  ClassAttributes,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';
import { formStyles } from '../../utils/formClasses';
import { Button } from '../Button';
import { PreviewImage } from './PreviewImage';

export interface FileUploadProps {
  label?: string;
  caption?: string;
  options?: any[];
  maxUploadSize?: Number;
  handleUpload?: any;
  noButton?: Boolean;
  bucketName?: string;
  name?: string;
  uploadedUrl?: any;
}

export const FileUpload = ({
  label,
  caption,
  maxUploadSize = 10,
  handleUpload,
  noButton = false,
  name,
  ...props
}: FileUploadProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement>) => {
  const fileInput = useRef<any>(null);
  const [ErrorMessage, setErrorMessage] = useState<string | undefined | null>(
    null
  );
  const [previewImage, setPreviewImage] = useState(null);
  const onFileUpload = async () => {
    let file = fileInput!.current!.files![0];

    console.log(file);

    if (file.size > Number(maxUploadSize) * 1024 * 1024) {
      fileInput.current.value = null;
      setErrorMessage(
        `Uploaded file too big. Max allowed size is ${maxUploadSize} MB`
      );
      return false;
    }
    setErrorMessage(null);
    setPreviewImage(file);
  };

  const onRemove = () => {
    setPreviewImage(null);
    fileInput.current.value = null; // helper can set value or reset it
  };

  return (
    <>
      <label htmlFor={name} className={formStyles.label}>
        {label}
      </label>

      <div className="flex flex-block mt-5">
        <input
          {...props}
          className="block max-w-md ml-5 text-sm text-gray-900    cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          id={name}
          type="file"
          ref={fileInput}
          onChange={onFileUpload}
        />
        {!noButton && (
          <div className="mr-3">
            <Button title="Upload" size="sm" onClick={handleUpload} />
          </div>
        )}
      </div>
      <p
        className="mt-1 text-sm text-gray-500 dark:text-gray-300"
        id="file_input_help"
      >
        {caption}
      </p>

      {ErrorMessage && (
        <p className="text-cu-red mt-1 text-sm"> {ErrorMessage}</p>
      )}

      {/* Image Preview */}
      {previewImage && (
        <div className="mt-4">
          <PreviewImage file={previewImage} />
        </div>
      )}
      {previewImage && (
        <div className="mt-4">
          <Button title="Delete" size="sm" isType="ghost" onClick={onRemove} />
        </div>
      )}
    </>
  );
};
