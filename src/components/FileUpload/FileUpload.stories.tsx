import React from 'react';
import { Meta } from '@storybook/react';

import { FileUpload } from './FileUpload';

export default {
  title: 'Components/Inputs/FileUpload',
  component: FileUpload,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FileUpload>;

export const Default = () => {
  const handleUpload = () => {
    alert('file has been uploaded successfully ');
  };

  // add resolution validation
  return (
    <>
      <FileUpload
        label="Upload File"
        name="coverPic"
        caption="PNG, JPG, GIF up to 10MB"
        maxUploadSize={10}
        handleUpload={handleUpload}
        accept="image/gif, image/jpeg , image/png , image/jpg"
      />
    </>
  );
};
