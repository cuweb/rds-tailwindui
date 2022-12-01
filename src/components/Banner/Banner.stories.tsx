import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Banner, BannerProps } from './Banner';
import { Button } from '../Button';
import { Column } from '../../layouts';

export default {
  title: 'Components/Elements/Banner',
  component: Banner,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Banner>;

const DefaultTemplate: Story<BannerProps> = args => <Banner {...args}></Banner>;

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
  </Banner>
);

const WithDarkWaveTemplate: Story<BannerProps> = args => (
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

const WithAnimationTemplate: Story<BannerProps> = args => (
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

const WithRedWaveTemplate: Story<BannerProps> = args => (
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

const WithParagraphTemplate: Story<BannerProps> = args => (
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

const WithOverlapTemplate: Story<BannerProps> = args => (
  <>
    <Banner {...args}></Banner>
    <main>
      <Column maxWidth="7xl">
        <div className="px-8 pt-6 pb-24 bg-white rounded-lg">
          This is an example of the main wrapped overlapping the banner
        </div>
      </Column>
    </main>
  </>
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
  image: `https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg`,
};

export const WithDarkWave = WithDarkWaveTemplate.bind({});
WithDarkWave.args = {
  title: 'CU Wave Banner',
  isType: 'dark-wave',
};

export const WithRedWave = WithRedWaveTemplate.bind({});
WithRedWave.args = {
  title: 'CU Wave Banner',
  isType: 'red-wave',
};

export const WithAnimation = WithAnimationTemplate.bind({});
WithAnimation.args = {
  title: 'CU Animated Banner',
  isType: 'animated',
};

export const WithParagraph = WithParagraphTemplate.bind({});
WithParagraph.args = {
  title: 'Banner with Paragraph',
  paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique ultrices magna at sollicitudin. Duis venenatis arcu quis nibh blandit vestibulum. Praesent tempus est at venenatis elementum. In vestibulum purus in sapien varius, ac iaculis ligula eleifend. Nulla tempus interdum ipsum quis iaculis.`,
};

export const WithOverlap = WithOverlapTemplate.bind({});
WithOverlap.args = {
  title: 'Banner with Overlapping Main',
  isType: 'animated',
  hasOverlap: true,
};
