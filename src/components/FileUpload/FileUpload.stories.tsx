import React, { useCallback, useState } from 'react';
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
  const [uploadedFile, setUploadedFile] = useState(null);

  const callbackcal = useCallback(
    (itemSelected: any) => {
      setUploadedFile(itemSelected);
      console.log(' the file is ', uploadedFile);
      // a toast when it is logged successfully
    },
    [setUploadedFile]
  );

  // add resolution validation
  return (
    <>
      <FileUpload
        label="Upload File"
        name="coverPic"
        caption="PNG, JPG, GIF up to 10MB"
        maxUploadSize={10}
        accept="image/gif, image/jpeg , image/png , image/jpg"
        callback={callbackcal}
        minImageHeight={1000}
        minImageWidth={1000}
      />
    </>
  );
};
