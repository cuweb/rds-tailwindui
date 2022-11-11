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
        onClick={() => {}}
        title="Primary Button"
        hasShadow
      />
      <Button
        isType="white"
        onClick={() => {}}
        title="Secondary Button"
        hasShadow
      />
      <Button
        hasShadow
        icon="StarIcon"
        isType="dark-grey"
        onClick={() => {
          alert('Add to favs clicked');
        }}
        title="Add to Favs"
      />
    </Banner.ButtonGroup>
  </Banner>
);

const WithImageTemplate: Story<BannerProps> = args => (
  <Banner {...args}>
    <Banner.ButtonGroup>
      <Button
        isType="default"
        onClick={() => {}}
        title="Primary Button"
        hasShadow
      />
      <Button
        isType="white"
        onClick={() => {}}
        title="Secondary Button"
        hasShadow
      />
      <Button
        hasShadow
        icon="StarIcon"
        isType="dark-grey"
        onClick={() => {
          alert('Add to favs clicked');
        }}
        title="Add to Favs"
      />
    </Banner.ButtonGroup>
    <Banner.Image />
  </Banner>
);

const WithWaveTemplate: Story<BannerProps> = args => (
  <Banner {...args}>
    <Banner.ButtonGroup>
      <Button
        isType="default"
        onClick={() => {}}
        title="Primary Button"
        hasShadow
      />
      <Button
        isType="white"
        onClick={() => {}}
        title="Secondary Button"
        hasShadow
      />
      <Button
        hasShadow
        icon="StarIcon"
        isType="dark-grey"
        onClick={() => {
          alert('Add to favs clicked');
        }}
        title="Add to Favs"
      />
    </Banner.ButtonGroup>
    <Banner.Wave />
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

export const WithImage = WithImageTemplate.bind({});
WithImage.args = {
  title: 'Image Banner',
  isType: 'image',
};

export const WithWave = WithWaveTemplate.bind({});
WithWave.args = {
  title: 'CU Wave Banner',
  isType: 'wave',
};
