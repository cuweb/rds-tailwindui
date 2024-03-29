import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FeedItem, FeedItemProps } from './FeedItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { StackedList } from '../../../layouts/StackedList';
import { FeedItemData as data } from './FeedItemData';

export default {
  title: 'Cards & Lists/Feeds/List Item',
  component: FeedItem,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof FeedItem>;

const DefaultTemplate: Story<FeedItemProps> = args => (
  <FeedItem as="div" link={args.link}>
    <FeedItem.Content>
      <FeedItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      <FeedItem.Date date={args.date} />
      <FeedItem.Excerpt excerpt={args.excerpt} />
      <FeedItem.Category category={args.category} />
    </FeedItem.Content>
  </FeedItem>
);

const SingleItemListTemplate: Story<FeedItemProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      <FeedItem as="div" link={args.link}>
        <FeedItem.Content>
          <FeedItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          <FeedItem.Date date={args.date} />
          <FeedItem.Excerpt excerpt={args.excerpt} />
          <FeedItem.Category category={args.category} />
        </FeedItem.Content>
      </FeedItem>
    </StackedList>
  </Column>
);

const MultiItemListTemplate: Story<FeedItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <StackedList header="News feed listing" hasBorder hasShadow>
        {data.map(({ id, title, link, date, excerpt, category }) => (
          <FeedItem key={id}>
            <FeedItem.Content>
              <FeedItem.Title title={title} link={link} />
              <FeedItem.Date date={date} />
              <FeedItem.Excerpt excerpt={excerpt} />
              <FeedItem.Category category={category} />
            </FeedItem.Content>
          </FeedItem>
        ))}
      </StackedList>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'Feed item title',
  link: 'https://carleton.ca',
  date: 'November 24th, 2022',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum, metus id luctus aliquam, mi libero rutrum massa, ac finibus risus velit in odio.',
  category: 'Human Resources',
};

export const SingleItemList = SingleItemListTemplate.bind({});
SingleItemList.args = {
  ...Default.args,
};

export const MultiItemList = MultiItemListTemplate.bind({});

MultiItemList.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemList.storyName = 'Single item list';
MultiItemList.storyName = 'Multi item list';
