import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FeedItem, FeedItemProps } from './FeedItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';

export default {
  title: 'Components/List Items/Feeds',
  component: FeedItem,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FeedItem>;

const DefaultTemplate: Story<FeedItemProps> = args => (
  <FeedItem as="div" link={args.link}>
    <FeedItem.Content>
      <FeedItem.Title as="h2" fontSize={args.fontSize} title="Title test" />
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

const ListingInPanelTemplate: Story<FeedItemProps> = args => (
  <Container bgColor="gray">
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <StackedList dividers>
          <FeedItem as="li" link={args.link}>
            <FeedItem.Content>
              <FeedItem.Title fontSize={args.fontSize} title={args.title} />
              <FeedItem.Date date={args.date} />
              <FeedItem.Excerpt excerpt={args.excerpt} />
              <FeedItem.Category category={args.category} />
            </FeedItem.Content>
          </FeedItem>
          <FeedItem as="li" link={args.link}>
            <FeedItem.Content>
              <FeedItem.Title fontSize={args.fontSize} title={args.title} />
              <FeedItem.Date date={args.date} />
              <FeedItem.Excerpt excerpt={args.excerpt} />
              <FeedItem.Category category={args.category} />
            </FeedItem.Content>
          </FeedItem>
          <FeedItem as="li" link={args.link}>
            <FeedItem.Content>
              <FeedItem.Title fontSize={args.fontSize} title={args.title} />
              <FeedItem.Date date={args.date} />
              <FeedItem.Excerpt excerpt={args.excerpt} />
              <FeedItem.Category category={args.category} />
            </FeedItem.Content>
          </FeedItem>
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

export const ListingInPanel = ListingInPanelTemplate.bind({});
ListingInPanel.args = {
  fontSize: 'base',
  title: 'This is the title',
  link: 'https://carleton.ca',
  date: 'November 24th, 2022',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum, metus id luctus aliquam, mi libero rutrum massa, ac finibus risus velit in odio.',
};
