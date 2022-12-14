import React, { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  ShieldExclamationIcon,
} from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';

export interface ToasterProps {
  children?: any;
}

export interface ToastBaseProps {
  children?: any;
  type: 'success' | 'error' | 'warning' | 'info';
}

export interface ToastTitleProps {
  children?: any;
}

export interface ToastContentProps {
  children?: any;
}

const Toaster = ({ children }: ToasterProps) => {
  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none top-20 sm:items-start sm:p-6 z-40"
    >
      <div className="flex flex-col items-center w-full space-y-4 sm:items-end">
        {children}
      </div>
    </div>
  );
};

const Title = ({ children }: ToastTitleProps) => {
  return <p className="text-sm font-medium text-gray-900">{children}</p>;
};

const Content = ({ children }: ToastContentProps) => {
  return <p className="mt-1 text-sm text-gray-500">{children}</p>;
};

const ToastBase = ({ children, type }: ToastBaseProps) => {
  const [showToast, setShowToast] = useState(true);

  const toastTypes = {
    success: {
      icon: CheckCircleIcon,
      color: 'text-green-400',
    },
    warning: {
      icon: ShieldExclamationIcon,
      color: 'text-yellow-400',
    },
    error: {
      icon: ExclamationCircleIcon,
      color: 'text-cu-red',
    },
    info: {
      icon: InformationCircleIcon,
      color: 'text-gray-600',
    },
  };

  return (
    <Transition
      show={showToast}
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
              {React.createElement(toastTypes[type].icon, {
                className: `w-6 h-6 ${toastTypes[type].color}`,
                'aria-hidden': 'true',
              })}
            </div>
            <div className="ml-3 w-0 flex-1 pt-0.5">{children}</div>
            <div className="flex flex-shrink-0 ml-4">
              <button
                type="button"
                className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => {
                  setShowToast(false);
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
  );
};

export const Toast = Object.assign(ToastBase, {
  Toaster,
  Title,
  Content,
});
