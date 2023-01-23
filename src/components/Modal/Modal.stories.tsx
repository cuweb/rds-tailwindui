import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Modal, ModalProps } from './Modal';
import { Button } from '../Button';

export default {
  title: 'Components/Inputs/Modal',
  component: Modal,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Modal>;

export const ModalDefault: Story<ModalProps> = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button title=" Click to Open Modal" onClick={() => setModalOpen(true)} />

      <Modal
        title="Modal Title"
        description={'Description inside the modal'}
        isOpen={ModalOpen}
        setIsOpen={setModalOpen}
      >
        <Button
          onClick={() => {
            alert(' delete are you sure you want to delete it');
            setModalOpen(false);
          }}
          title="Delete"
          size="sm"
          hasShadow
        />
      </Modal>
    </>
  );
};

export const ModalNoButton: Story<ModalProps> = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        id="modalButton"
        title=" Click to Open Modal"
        onClick={() => setModalOpen(true)}
      />

      <Modal
        title="Modal Title"
        description={'Description inside the modal'}
        isOpen={ModalOpen}
        setIsOpen={setModalOpen}
        nobutton
      >
        <Button
          onClick={() => {
            alert(' delete are you sure you want to delete it');
            setModalOpen(false);
          }}
          title="Delete"
          size="sm"
          hasShadow
        />
      </Modal>
    </>
  );
};
