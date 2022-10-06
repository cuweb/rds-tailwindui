import React from 'react';
import { rdsColorScheme } from '../../utils/tailwindClasses';

const styles = {
  container: `cu-container py-8`,
};

export interface ContainerProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'gray';
}

export const Container = ({ children, bgColor = 'white' }: ContainerProps) => {
  return (
    <div className={`${styles.container} ${rdsColorScheme[bgColor]}`}>
      {children}
    </div>
  );
};
