import React from 'react';
import { rdsBgColor } from '../../utils/tailwindClasses';

const styles = {
  container: `cu-container`,
  containerGrey: ``,
  //   containerGrey: `py-6`,
  containerSpace: `px-6 py-10 lg:py-12 lg:px-10 -mx-10`,
  //   containerTargets: `[&.bg-cu-black-50+.cu-container.bg-cu-black-50]:pt-0 [&.bg-transparent+.cu-container.bg-transparent]:pt-0`,
};

export interface ContainerProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'grey';
  maxWidth?: 'none' | 'full' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

export const Container = ({
  children,
  bgColor = 'white',
  maxWidth,
}: ContainerProps) => {
  const bgStyles =
    bgColor === 'grey'
      ? `cu-container-grey ${styles.containerGrey}`
      : `cu-container-white`;

  const maxWidthChildren = bgColor
    ? '[&>*]:mx-auto [&>*]:max-w-' + maxWidth
    : '';

  return (
    <div
      className={`${styles.container} ${bgStyles} ${rdsBgColor[bgColor]} ${maxWidthChildren}`}
    >
      {children}
    </div>
  );
};
