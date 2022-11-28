import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { Fragment, useEffect, useState } from 'react';
import { HeroIcon, IconName } from '../HeroIcon';

export interface ToastProps {
  title: string;
  content?: string;
  alertType?: 'info' | 'error' | 'success' | 'warning';
  autoCloseTimeInterval?: number;
}

export interface iconColorProps {
  error: 'black' | 'white' | 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow';
  info: 'black' | 'white' | 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow';
  success:
    | 'black'
    | 'white'
    | 'red'
    | 'grey'
    | 'dark-grey'
    | 'green'
    | 'yellow';
  warning:
    | 'black'
    | 'white'
    | 'red'
    | 'grey'
    | 'dark-grey'
    | 'green'
    | 'yellow';
}

export interface iconProp {
  error: IconName;
  info: IconName;
  success: IconName;
  warning: IconName;
}

export const Toast = ({
  alertType,
  title,
  content,
  autoCloseTimeInterval = 0,
}: ToastProps) => {
  const [showInfo, setShowInfo] = useState(true);
  const [fadeProp, setFadeProp] = useState('');

  const icon: iconProp = {
    error: 'ExclamationCircleIcon',
    info: 'InformationCircleIcon',
    success: 'CheckCircleIcon',
    warning: 'ShieldExclamationIcon',
  };
  const iconColor: iconColorProps = {
    error: 'red',
    info: 'dark-grey',
    success: 'green',
    warning: 'yellow',
  };

  useEffect(() => {
    const timeout = setInterval(() => {
      if (autoCloseTimeInterval > 0) {
        setFadeProp('fade-out');
      }
    }, autoCloseTimeInterval);
    return () => clearInterval(timeout);
  }, [autoCloseTimeInterval, fadeProp]);

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp === 'fade-out') {
        setShowInfo(false);
      }
    }, 1000);
    return () => clearInterval(timeout);
  }, [autoCloseTimeInterval, showInfo, fadeProp]);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div
        className={`flex w-full flex-col items-center space-y-4 sm:items-end ${fadeProp}`}
      >
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          show={showInfo}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <HeroIcon
                    icon={icon[alertType || 'error']}
                    isOutline
                    size="6"
                    color={iconColor[alertType || 'error']}
                  />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-gray-900">{title}</p>
                  <p className="mt-1 text-sm text-gray-500">{content}</p>
                </div>
                <div className="flex flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => {
                      setShowInfo(false);
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};
