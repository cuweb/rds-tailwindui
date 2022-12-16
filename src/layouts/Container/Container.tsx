import React from 'react';
import { rdsBgColor } from '../../utils/tailwindClasses';

const styles = {
  //   container: `cu-container py-8`,
  container: `cu-container p-8`,
};

export interface ContainerProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'grey';
}

export const Container = ({ children, bgColor = 'white' }: ContainerProps) => {
  return (
    <div className={`${styles.container} ${rdsBgColor[bgColor]}`}>
      {children}
    </div>
  );
};
