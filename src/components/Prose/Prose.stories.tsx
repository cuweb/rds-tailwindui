import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Prose, ProseProps } from './Prose';
import { ProseData as data } from './ProseData';

export default {
  title: 'Components/Typography/Prose',
  component: Prose,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Prose>;

const ArticleTemplate: Story<ProseProps> = args => (
  <Prose as="article" content={args.content} />
);

export const Article = ArticleTemplate.bind({});
Article.args = {
  content: data,
};
