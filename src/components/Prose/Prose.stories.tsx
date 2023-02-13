import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Prose, ProseProps } from './Prose';
import { ProseData as sampleContent } from './ProseData';

export default {
  title: 'Components/Typography/Prose',
  component: Prose,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Prose>;

const ArticleTemplate: Story<ProseProps> = () => (
  <Prose as="article">
    <div dangerouslySetInnerHTML={sampleContent()} />
  </Prose>
);

export const Article = ArticleTemplate.bind({});
Article.args = {};
