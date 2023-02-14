import React from 'react';

export interface VideoModalProps {
  children?: React.ReactNode;
  isVisible: any;
  onClose: any;
}
export const VideoModal = ({
  children,
  isVisible,
  onClose,
}: VideoModalProps) => {
  if (!isVisible) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-0 backdrop-blur-lg flex justify-content items-center m-auto"
      onClick={() => onClose()}
    >
      <div className="w-fit flex flex-col">
        <button className=" text-xl place-self-end" onClick={() => onClose()}>
          X
        </button>
        <div className="bg-white p-2 rounded m-auto">{children}</div>
      </div>{' '}
    </div>
  );
};
