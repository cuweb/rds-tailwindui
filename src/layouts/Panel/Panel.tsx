import React from 'react';

const styles = {
  panel: `cu-panel rounded-lg bg-white`,
  border: `border border-cu-black-100`,
  shadow: `shadow-lg`,
  title: `px-6 py-4 text-base font-bold border-b rounded-t-lg bg-gray-50 text-cu-black-900`,
};

export interface PanelProps {
  children: React.ReactNode;
  hasBorder?: boolean;
  hasShadow?: boolean;
}

const PanelBase = ({ children, hasBorder, hasShadow }: PanelProps) => {
  return (
    <div
      className={`${styles.panel} ${hasBorder ? styles.border : ''} ${
        hasShadow ? styles.shadow : ''
      }`}
    >
      {children}
    </div>
  );
};

const Title = ({ children }: any) => {
  return <h2 className={`${styles.title}`}>{children}</h2>;
};

PanelBase.displayName = 'Panel';
Title.displayName = 'Panel.Title';

export const Panel = Object.assign(PanelBase, {
  Title,
});
