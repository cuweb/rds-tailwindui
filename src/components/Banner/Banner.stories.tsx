import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Banner, BannerProps } from './Banner';
import { Button } from '../Button';

export default {
  title: 'Components/Elements/Banner',
  component: Banner,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Banner>;

const DefaultTemplate: Story<BannerProps> = args => (
  <Banner {...args}>{args.children}</Banner>
);

const WithButtonsTemplate: Story<BannerProps> = args => (
  <Banner {...args}>
    <Banner.ButtonGroup>
      <Button
        isType="default"
        // onClick={() => {}}
        onClick={() => {
          alert('Primary button clicked');
        }}
        title="Primary Button"
        hasShadow
      />
      <Button
        isType="white"
        onClick={() => {
          alert('Secondary button clicked');
        }}
        title="Secondary Button"
        hasShadow
      />
    </Banner.ButtonGroup>
  </Banner>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'Basic Banner',
};

export const WithButtons = WithButtonsTemplate.bind({});
WithButtons.args = {
  title: 'Banner with Buttons',
};