import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
}

const styles = {
  badge: `inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0`,
};

const BadgeBase = ({ children }: BadgeProps) => {
  return <p className={`${styles.badge}`}>{children}</p>;
};

BadgeBase.displayName = 'LinkItem';

export const Badge = Object.assign(BadgeBase, {});
