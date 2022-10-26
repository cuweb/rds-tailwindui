import React from 'react';

const styles = {
  badge: `inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0 whitespace-nowrap`,
};

export interface BadgeProps {
  children?: React.ReactNode;
}

const BadgeBase = ({ children }: BadgeProps) => {
  return <p className={`${styles.badge}`}>{children}</p>;
};

BadgeBase.displayName = 'LinkItem';

export const Badge = Object.assign(BadgeBase, {});
