import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DropDown, DropDownProps } from './DropDown';
import { DropDownItemData as listItems } from './DropDownData';
import { Button } from '../Button';
import { HeroIcon } from '../HeroIcon';

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
  buttonText: 'Basic Drop Down',
};

export const WithButton = DefaultTemplate.bind({});
WithButton.args = {
  children: <Button title="Button Dropdown" />,
};

export const WithButtonArrow = DefaultTemplate.bind({});
WithButtonArrow.args = {
  children: <Button size="sm" title="Button Dropdown" hasDropDown />,
};

export const WithHeroIcon = DefaultTemplate.bind({});
WithHeroIcon.args = {
  renderAs: 'button',
  children: (
    <HeroIcon aria-hidden color="dark-grey" icon="BugAntIcon" isOutline />
  ),
};

Default.storyName = 'Default';
WithButton.storyName = 'With Button';
WithButtonArrow.storyName = 'Button and Arrow';
WithHeroIcon.storyName = 'With Icon';
