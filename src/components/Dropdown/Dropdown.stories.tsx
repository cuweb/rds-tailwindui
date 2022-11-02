import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DropDown, DropDownProps } from './DropDown';
import { DropDownItemData as listItems } from './DropDownData';
import { HeroIcon } from '../HeroIcon';
import { Button } from '../Button';

export default {
  title: 'Components/Inputs/Drop Down',
  component: DropDown,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof DropDown>;

const DefaultTemplate: Story<DropDownProps> = args => (
  <DropDown {...args} listItems={listItems}>
    {args.children}
  </DropDown>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  menuAlign: 'left',
  buttonText: 'Basic Drop Down',
};

export const WithButton = DefaultTemplate.bind({});
WithButton.args = {
  menuAlign: 'left',
  children: <Button size="sm" title="Button Dropdown" />,
};

export const WithHeroIcon = DefaultTemplate.bind({});
WithHeroIcon.args = {
  renderAs: 'button',
  menuAlign: 'left',
  children: (
    <HeroIcon aria-hidden color="dark-grey" icon="BugAntIcon" outline />
  ),
};

Default.storyName = 'Default';
WithButton.storyName = 'With Button';
WithHeroIcon.storyName = 'With Icon';
