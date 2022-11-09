import { DropDownItemProps } from '.';

export const DropDownItemData: DropDownItemProps[] = [
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
