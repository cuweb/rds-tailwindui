import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownItemProps, DropdownProps } from './Dropdown';
import { Button } from '../Button';

export default {
  title: 'Components/Input/Dropdown',
  component: Dropdown,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Dropdown>;

const items: DropdownItemProps[] = [
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

const itemNoIcon: DropdownItemProps[] = [
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

export const DefaultTemplate: Story<DropdownProps> = () => (
  <div className="ml-72 ">
    <Dropdown button="Dropdown" items={itemNoIcon} />
  </div>
);

export const NoArrowDropdown: Story<DropdownProps> = () => (
  <div className="ml-72 ">
    <Dropdown button="Dropdown" items={items} noArrow />
  </div>
);

export const DropdownWithBorder: Story<DropdownProps> = () => (
  <div className="ml-72 ">
    <Dropdown button="Dropdown" items={items} border shadow />
  </div>
);

export const ComponentDropdown: Story<DropdownProps> = () => (
  <div className="ml-72 ">
    <Dropdown
      component={<Button title="Avatar" size="sm" isType="ghost" />}
      items={items}
    />
  </div>
);
