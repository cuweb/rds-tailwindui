import React from 'react';

export interface ToastProps {
  children: React.ReactNode;
}

export const Toast = ({ children }: ToastProps) => {
  return <div>{children}</div>;
};
