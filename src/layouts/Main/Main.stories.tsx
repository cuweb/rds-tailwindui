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
      <Prose as="article">
        <div dangerouslySetInnerHTML={sampleContent()} />
      </Prose>
    </Column>
  </Main>
);

const WithContainerTemplate: Story<MainProps> = args => (
  <Main {...args}>
    <Container bgColor="grey">
      <Column maxWidth="3xl">
        <Prose as="article">
          <div dangerouslySetInnerHTML={sampleContent()} />
        </Prose>
      </Column>
    </Container>
  </Main>
);

const WithOverlapTemplate: Story<MainProps> = args => (
  <>
    <Banner hasOverlap isType="dark-wave" title="Content Overlay" />
    <Main {...args}>
      <Column maxWidth="3xl">
        <div className="py-12 bg-white rounded-lg px-14">
          <Prose as="article">
            <div dangerouslySetInnerHTML={sampleContent()} />
          </Prose>
        </div>
      </Column>
    </Main>
  </>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const WithContent = WithContentTemplate.bind({});
WithContent.args = {};

export const WithContainer = WithContainerTemplate.bind({});
WithContainer.args = {};

export const WithOverlap = WithOverlapTemplate.bind({});
WithOverlap.args = {
  hasOverlap: true,
};
