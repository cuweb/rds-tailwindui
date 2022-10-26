import React from 'react';

// USE THE FOLLOWING IMPORT AND STYLE CONST IF USING GLOBAL TAILWIND CSS
// SEE THE CLASS BEING USED IN THE COMPONENT OUTPUT BELOW FOR AN EXAMPLE
import { rdsBgColor } from '../../utils/tailwindClasses';
const styles = {
  component: `p-8`,
};

// PROP NAME UPDATE REQUIRED
// REMOVE CHILDREN IF NO CHILDREN WILL BE PASSED TO COMPONENT
// REPLACE {bgColor} WITH PROPS AND ACCEPTABLE OPTIONS IF APPLICABLE
export interface ComponentProps {
  children: React.ReactNode;
  bgColor?: 'white' | 'gray';
}

// PROP NAME UPDATE REQUIRED
// REMOVE CHILDREN IF NO CHILDREN WILL BE PASSED TO COMPONENT
// UPDATE PROPS BEING PASSED, EG: BGCOLOR
// REPLACE MARKUP INSIDE THE RETURN
// NOTE: STYLE AND TAILWIND CONST BEING PASSED TO CLASSNAME
export const Container = ({ children, bgColor = 'white' }: ComponentProps) => {
  return (
    <div className={`${styles.component} ${rdsBgColor[bgColor]}`}>
      {children}
    </div>
  );
};
