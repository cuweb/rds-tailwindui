import React from 'react';

const styles = {
  containerWrap: `cu-container [&>*]:mx-auto`,
  containerWhite: `cu-container-white bg-white`,
  containerGrey: `cu-container-grey bg-cu-black-50 py-4 my-10`,
  container5xl: `[&>:not(.cu-container):not(.cu-column)]:max-w-5xl`,
  container7xl: `[&>:not(.cu-container):not(.cu-column)]:max-w-7xl`,
};

export interface ContainerProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'grey';
  maxWidth?: 'none' | 'full' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

export const Container = ({
  children,
  bgColor = 'white',
  maxWidth = '5xl',
}: ContainerProps) => {
  const bgStyles =
    bgColor === 'grey' ? `${styles.containerGrey}` : `${styles.containerWhite}`;

  const childWidth = maxWidth
    ? '[&>:not(.cu-container):not(.cu-column)]:max-w-' + maxWidth
    : '';

  return (
    <div className={`${styles.containerWrap} ${bgStyles} ${childWidth}`}>
      {children}
    </div>
  );
};
