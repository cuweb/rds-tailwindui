import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NewsItem, NewsItemProps } from './NewsItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
import { NewsItemData as data } from './NewsItemData';

export default {
  title: 'Cards & Lists/News/List Item',
  component: NewsItem,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof NewsItem>;

const DefaultTemplate: Story<NewsItemProps> = args => (
  <NewsItem as="div" link={args.link}>
    <NewsItem.Image image={args.image} />
    <NewsItem.Content>
      <NewsItem.Title title={args.title} link={args.link} />
      <NewsItem.Date date={args.date} />
      <NewsItem.Excerpt excerpt={args.excerpt} />
    </NewsItem.Content>
  </NewsItem>
);

const SingleItemListTemplate: Story<NewsItemProps> = args => (
  <Column maxWidth="5xl">
    <Panel hasBorder>
      <NewsItem as="div" link={args.link}>
        <NewsItem.Image image={args.image} />
        <NewsItem.Content>
          <NewsItem.Title title={args.title} link={args.link} />
          <NewsItem.Date date={args.date} />
          <NewsItem.Excerpt excerpt={args.excerpt} />
        </NewsItem.Content>
      </NewsItem>
    </Panel>
  </Column>
);

const MultiItemListTemplate: Story<NewsItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <Panel header="News listing" hasBorder hasShadow>
        {data.map(({ id, title, link, image, date, excerpt }) => (
          <NewsItem key={id}>
            <NewsItem.Image image={image} />
            <NewsItem.Content>
              <NewsItem.Title title={title} link={link} />
              <NewsItem.Date date={date} />
              <NewsItem.Excerpt excerpt={excerpt} />
            </NewsItem.Content>
          </NewsItem>
        ))}
      </Panel>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'News item title',
  link: 'https://carleton.ca',
  date: 'January 7, 2020',
  image: 'https://source.unsplash.com/random/400x300',
  excerpt:
    'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.',
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
