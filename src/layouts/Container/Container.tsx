import React from 'react';
import { rdsBgColor } from '../../utils/tailwindClasses';

const styles = {
  //   container: `cu-container py-8`,
  container: `cu-container py-10 lg:py-12 px-6 lg:px-8 [&.bg-cu-black-50+.cu-container.bg-cu-black-50]:pt-0 [&.bg-transparent+.cu-container.bg-transparent]:pt-0`,
};

export interface ContainerProps {
  children: React.ReactNode;
  bgColor?: 'none' | 'grey';
}

export const Container = ({ children, bgColor = 'none' }: ContainerProps) => {
  const bgStyles = bgColor ? rdsBgColor[bgColor] : '';
  return <div className={`${styles.container} ${bgStyles}`}>{children}</div>;
};
