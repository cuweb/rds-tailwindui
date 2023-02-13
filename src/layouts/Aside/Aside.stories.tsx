import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Aside, AsideProps } from './Aside';
import { Column } from '../Column';
import { Prose } from '../../components/Prose';
import { ProseData as sampleContent } from '../../components/Prose/ProseData';

export default {
  title: 'Layouts/Aside',
  component: Aside,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Aside>;

const DefaultTemplate: Story<AsideProps> = () => (
  <Aside>
    <p>This is an aside</p>
  </Aside>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

const IsStickyTemplate: Story<AsideProps> = args => (
  <Column cols="2/3" maxWidth="7xl">
    <Prose as="article">
      <div dangerouslySetInnerHTML={sampleContent()} />
    </Prose>
    <Aside {...args}>
      <p>This is an aside as a sticky item</p>
    </Aside>
  </Column>
);

export const IsSticky = IsStickyTemplate.bind({});
IsSticky.args = {
  isSticky: true,
  topSpace: '8',
};
