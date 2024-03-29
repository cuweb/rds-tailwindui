import { Fragment, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { Button } from '../Button';
import { rdsOverlay } from '../../utils/tailwindClasses';

export interface ModalProps {
  children?: React.ReactNode;
  title?: String;
  description?: String;
  noButton?: boolean;
  isOpen: any;
  setIsOpen: any;
  hasOverlay?: boolean;
}

export const Modal = ({
  children,
  title,
  description,
  noButton,
  isOpen,
  setIsOpen,
  hasOverlay = false,
}: ModalProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 not-prose"
        initialFocus={cancelButtonRef}
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={`fixed inset-0 ${
              hasOverlay ? rdsOverlay : ''
            }  transition-opacity bg-opacity-60`}
          />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        {title}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {!noButton && (
                  <div className="grid gap-4 px-4 py-3  sm:flex sm:flex-row-reverse sm:px-6 sm:w-auto sm:text-sm">
                    {children}
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      title="Cancel"
                      size="sm"
                      isType="white"
                      hasShadow
                    />
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
