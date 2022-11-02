import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  DropdownPrev,
  DropdownPrevItemProps,
  DropdownPrevProps,
} from './DropDownPrev';
import { Button } from '../Button';

export default {
  title: 'Components/Input/Drop Down (Previous)',
  component: DropdownPrev,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof DropdownPrev>;

const items: DropdownPrevItemProps[] = [
  {
    href: '/profile',
    title: 'Profile',
    icon: 'UserCircleIcon',
  },
  {
    href: '/settings',
    title: 'Settings',
    onClick: () => alert('Dropdown for settings has been clicked '),
    icon: 'Cog8ToothIcon',
  },
  {
    href: '/signout',
    title: 'Sign out ',
    icon: 'ArrowLeftOnRectangleIcon',
  },
];

const itemNoIcon: DropdownPrevItemProps[] = [
  {
    href: '/profile',
    title: 'Profile',
  },
  {
    href: '/settings',
    title: 'Settings',
    onClick: () => alert('Dropdown for settings has been clicked '),
  },
  {
    href: '/support',
    title: 'Support',
  },
];

export const DefaultTemplate: Story<DropdownPrevProps> = () => (
  <div className="ml-72 ">
    <DropdownPrev button="Dropdown" items={itemNoIcon} />
  </div>
);

export const NoArrowDropdown: Story<DropdownPrevProps> = () => (
  <div className="ml-72 ">
    <DropdownPrev button="Dropdown" items={items} noArrow />
  </div>
);

export const DropdownWithBorder: Story<DropdownPrevProps> = () => (
  <div className="ml-72 ">
    <DropdownPrev button="Dropdown" items={items} border shadow />
  </div>
);

export const ComponentDropdown: Story<DropdownPrevProps> = () => (
  <div className="ml-72 ">
    <DropdownPrev
      component={<Button title="Avatar" size="sm" isType="ghost" />}
      items={items}
    />
  </div>
);
