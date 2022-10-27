import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownItemProps, DropdownProps } from './Dropdown';

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
    href: '/settings',
    title: 'Settings',
    onClick: () => alert('Dropdown for settings has been clicked '),
    icon: 'ArrowLeftOnRectangleIcon',
  },
  {
    href: '/profile',
    title: 'Profile',
    icon: 'UserCircleIcon',
  },
  {
    href: '/support',
    title: 'Support',
    icon: 'Cog6ToothIcon',
  },
];

const itemNoIcon: DropdownItemProps[] = [
  {
    href: '/settings',
    title: 'Settings',
    onClick: () => alert('Dropdown for settings has been clicked '),
  },
  {
    href: '/profile',
    title: 'Profile',
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

export const DropdownBorder: Story<DropdownProps> = () => (
  <div className="ml-72 ">
    <Dropdown button="Dropdown" items={items} border shadow />
  </div>
);

// export const Default = DefaultTemplate.bind({});
// Default.args = {};
