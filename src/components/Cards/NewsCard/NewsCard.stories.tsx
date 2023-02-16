import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Column } from '../../../layouts';
import { NewsCard, NewsCardProps } from './NewsCard';
import { NewsCardData as data } from './NewsCardData';

export default {
  title: 'Cards & Lists/News/Card',
  component: NewsCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof NewsCard>;

const DefaultTemplate: Story<NewsCardProps> = args => (
  <NewsCard
    title={args.title}
    heading={args.heading}
    link={args.link}
    image={args.image}
    date={args.date}
    excerpt={args.excerpt}
    tags={args.tags}
  />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: 'End-of-Year Reflections and Resolutions for Our Web Services Team',
  link: '#',
  image: 'https://source.unsplash.com/random/400x266',
  alt: 'Sample image alt tag',
  date: '2022-12-16',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a est vel mi finibus tempor. Etiam sagittis eros ac venenatis pretium. Donec bibendum eget ante quis maximus. Nullam ultrices erat sagittis luctus volutpat. Etiam nec arcu sodales, convallis justo quis, aliquam lorem. Curabitur feugiat accumsan felis, placerat eleifend ipsum auctor.',
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

export const gridCards = () => (
  <Column cols="3" maxWidth="7xl">
    {data.map(item => (
      <NewsCard
        title={item?.title}
        link={item?.url}
        image={item?.image}
        date={item?.date}
        excerpt={item?.excerpt}
        tags={item?.tags}
      />
    ))}
  </Column>
);

export const noExcerpt = () => (
  <Column cols="3" maxWidth="7xl">
    {data.map(item => (
      <NewsCard
        title={item?.title}
        link={item?.url}
        image={item?.image}
        date={item?.date}
        tags={item?.tags}
      />
    ))}
  </Column>
);

export const NoImage = () => (
  <Column cols="3" maxWidth="7xl">
    {data.map(item => (
      <NewsCard
        title={item?.title}
        link={item?.url}
        date={item?.date}
        excerpt={item?.excerpt}
        tags={item?.tags}
      />
    ))}
  </Column>
);

export const bareMinimum = () => (
  <Column cols="3" maxWidth="7xl">
    {data.map(item => (
      <NewsCard title={item?.title} link={item?.url} />
    ))}
  </Column>
);
