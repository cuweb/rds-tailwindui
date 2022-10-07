import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FeedItem, FeedItemProps } from './FeedItem';

export default {
  title: 'Components/List Items/Feeds',
  component: FeedItem,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FeedItem>;

const DefaultTemplate: Story<FeedItemProps> = args => (
  <FeedItem>
    <FeedItem.Content>
      <FeedItem.Title
        fontSize={args.fontSize}
        title={args.title}
        link={args.link}
      />
      <FeedItem.Date date={args.date} />
      <FeedItem.Excerpt excerpt={args.excerpt} />
      <FeedItem.Category category={args.category} />
    </FeedItem.Content>
  </FeedItem>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'This is the title',
  link: 'https://carleton.ca',
  date: 'November 24th, 2022',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum, metus id luctus aliquam, mi libero rutrum massa, ac finibus risus velit in odio.',
  category: '{Badge component required}',
};
