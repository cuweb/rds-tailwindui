import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Modal, ModalProps } from './Dailog';

export default {
  title: 'Components/Inputs/Dailog',
  component: Modal,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Modal>;

export const dailogDefault: Story<ModalProps> = () => <Modal />;
