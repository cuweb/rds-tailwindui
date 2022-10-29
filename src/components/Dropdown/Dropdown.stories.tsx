import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownProps } from './DropDown';
import { DropDownItemData as listItems } from './DropDownData';
import { HeroIcon } from '../HeroIcon';
import { Button } from '../Button';

export default {
  title: 'Components/Navigation/Dropdown',
  component: Dropdown,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Dropdown>;

export const Template: Story<DropdownProps> = () => (
  <Dropdown listItems={listItems}>
    <p>Basic Drop Down</p>
  </Dropdown>
);

export const WithButton: Story<DropdownProps> = () => (
  <Dropdown listItems={listItems}>
    <Button size="sm" title="Default Button" />
  </Dropdown>
);

export const WithIcon: Story<DropdownProps> = () => (
  <Dropdown listItems={listItems}>
    <HeroIcon aria-hidden color="dark-grey" icon="BugAntIcon" outline />
  </Dropdown>
);
