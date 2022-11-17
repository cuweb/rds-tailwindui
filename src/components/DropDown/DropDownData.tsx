import { DropDownItemProps } from '.';

export const DropDownItemData: DropDownItemProps[] = [
  {
    href: '/profile',
    title: 'Profile',
  },
  {
    title: 'Settings',
    onClick: () => alert('Dropdown for settings has been clicked '),
  },
  {
    href: '/signout',
    title: 'Sign out ',
  },
];
