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

export const DefaultTemplate = () => {
  const handleUpload = () => {
    alert('file has been uploaded successfully ');
  };
  return (
    <>
      <FileUpload
        label="Upload File "
        caption="PNG, JPG, GIF up to 10MB"
        maxUploadSize={10}
        handleUpload={handleUpload}
      />
    </>
  );
};
