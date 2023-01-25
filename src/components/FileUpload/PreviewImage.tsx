import React, { useState } from 'react';
import { formStyles } from '../../utils/formClasses';

export interface FileUploadProps {
  file?: any;
}

export const PreviewImage = ({ file }: FileUploadProps) => {
  const [preview, setPreview]: any = useState(null);
  // console.log(file)
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <>
      <div>
        <p className={formStyles.label}> Preview </p>
        {preview ? (
          <img src={preview} className="h-56 w-56" alt="preview" />
        ) : (
          <p className={formStyles.label}> Loading...</p>
        )}
      </div>
    </>
  );
};
