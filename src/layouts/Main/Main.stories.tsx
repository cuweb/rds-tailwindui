import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Main, MainProps } from './Main';
import { Column } from '../Column';
import { Banner } from '../../components/Banner';
import { Prose } from '../../components/Prose';
import { ProseData as sampleContent } from '../../components/Prose/ProseData';
import { Container } from '../Container';

export default {
  title: 'Layouts/Main',
  component: Main,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Main>;

const DefaultTemplate: Story<MainProps> = () => (
  <Main>
    <p>This is a main element</p>
  </Main>
);

const WithContentTemplate: Story<MainProps> = args => (
  <Main {...args}>
    <Column maxWidth="3xl">
      <Prose as="article" content={sampleContent} />
    </Column>
  </Main>
);

const WithSpacingTemplate: Story<MainProps> = args => (
  <Main {...args}>
    <Column maxWidth="3xl">
      <Prose as="article" content={sampleContent} />
    </Column>
  </Main>
);

const WithContainerTemplate: Story<MainProps> = args => (
  <Main {...args}>
    <Container bgColor="grey">
      <Column maxWidth="3xl">
        <Prose as="article" content={sampleContent} />
      </Column>
    </Container>
  </Main>
);

const WithOverlapTemplate: Story<MainProps> = args => (
  <>
    <Banner hasOverlap isType="dark-wave" title="Content Overlay" />
    <Main {...args}>
      <Column maxWidth="3xl">
        <div className="bg-white px-14 py-12 rounded-lg">
          <Prose as="article" content={sampleContent} />
        </div>
      </Column>
    </Main>
  </>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const WithContent = WithContentTemplate.bind({});
WithContent.args = {};

export const WithSpacing = WithSpacingTemplate.bind({});
WithSpacing.args = {
  hasSpacing: true,
};

export const WithContainer = WithContainerTemplate.bind({});
WithContainer.args = {};

export const WithOverlap = WithOverlapTemplate.bind({});
WithOverlap.args = {
  hasSpacing: true,
  hasOverlap: true,
};
