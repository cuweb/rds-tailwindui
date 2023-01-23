import React, { useRef, useState } from 'react';
import { Button } from '../Button';

export interface FileUploadProps {
  label?: string;
  caption?: string;
  options?: any[];
  maxUploadSize?: Number;
  handleUpload?: any;
  noButton?: Boolean;
}

export const FileUpload = ({
  label,
  caption,
  maxUploadSize = 10,
  handleUpload,
  noButton = false,
}: FileUploadProps) => {
  const fileInput = useRef<any>(null);
  const [ErrorMessage, setErrorMessage] = useState<string | undefined | null>(
    null
  );
  const onFileUpload = async () => {
    let file = fileInput!.current!.files![0];
    if (file.size > Number(maxUploadSize) * 1024 * 1024) {
      fileInput.current.value = null;
      setErrorMessage(
        `Uploaded file too big. Max allowed size is ${maxUploadSize} MB`
      );
      return false;
    }
    setErrorMessage(null);
  };

  return (
    <>
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="file_input"
      >
        {label}
      </label>

      <div className="flex flex-block">
        <input
          className="block max-w-md ml-5 text-sm text-gray-900    cursor-pointer focus:outline-none"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          ref={fileInput}
          onChange={onFileUpload}
          accept="image/gif, image/jpeg , image/png , image/jpg"
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

      <p className="text-cu-red mt-1 text-sm"> {ErrorMessage}</p>
    </>
  );
};
