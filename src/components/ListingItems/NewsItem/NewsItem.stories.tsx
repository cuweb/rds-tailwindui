import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NewsItem, NewsItemProps } from './NewsItem';
// import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { StackedList } from '../../../layouts/StackedList';
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

const DefaultTemplate: Story<NewsItemProps> = args => <NewsItem {...args} />;

const SingleItemListTemplate: Story<NewsItemProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      <NewsItem {...args} />
    </StackedList>
  </Column>
);

const MultiItemListTemplate: Story<NewsItemProps> = () => (
  <Column maxWidth="5xl">
    <StackedList header="News listing" hasBorder hasShadow>
      {data.map(({ id, title, link, image, alt, date, excerpt }) => (
        <NewsItem
          key={id}
          image={image}
          alt={alt}
          title={title}
          link={link}
          date={date}
          excerpt={excerpt}
        />
      ))}
    </StackedList>
  </Column>
);

const MultiItemColumnsTemplate: Story<NewsItemProps> = () => (
  <Column maxWidth="5xl">
    <StackedList header="News listing" cols="2" hasBorder hasShadow>
      {data.map(({ id, title, link, image, alt, date, excerpt }) => (
        <NewsItem
          key={id}
          image={image}
          alt={alt}
          title={title}
          link={link}
          date={date}
          excerpt={excerpt}
        />
      ))}
    </StackedList>
  </Column>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'News item title',
  link: 'https://carleton.ca',
  date: 'January 7, 2020',
  image: 'https://source.unsplash.com/random/400x300',
  alt: 'This is the alt tag for the card image',
  excerpt:
    'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae.',
  tags: {
    category: [
      {
        id: 1,
        name: 'Breaking News',
        slug: 'breaking-news',
      },
      {
        id: 2,
        name: 'Headline',
        slug: 'headline',
      },
    ],
  },
};

export const SingleItemList = SingleItemListTemplate.bind({});
SingleItemList.args = {
  ...Default.args,
};

export const MultiItemList = MultiItemListTemplate.bind({});
MultiItemList.args = {
  ...Default.args,
};

export const MultiItemColumns = MultiItemColumnsTemplate.bind({});
MultiItemColumns.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemList.storyName = 'Single item list';
MultiItemList.storyName = 'Multi item list';
MultiItemColumns.storyName = 'Multi item columns';
