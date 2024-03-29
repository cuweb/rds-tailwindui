import React from 'react';
import { Meta, Story } from '@storybook/react';
import { JobItem, JobItemProps } from './JobItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { StackedList } from '../../../layouts/StackedList';
import { JobItemData as data } from './JobItemData';

export default {
  title: 'Cards & Lists/Jobs/List Item',
  component: JobItem,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof JobItem>;

const DefaultTemplate: Story<JobItemProps> = args => (
  <JobItem as="div" link={args.link}>
    <JobItem.Content>
      <JobItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      <JobItem.Details dateData={args.dateData} date={args.date} />
    </JobItem.Content>
  </JobItem>
);

const SingleItemListTemplate: Story<JobItemProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      <JobItem as="div" link={args.link}>
        <JobItem.Content>
          <JobItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          <JobItem.Details dateData={args.dateData} date={args.date} />
        </JobItem.Content>
      </JobItem>
    </StackedList>
  </Column>
);

const MultiItemListTemplate: Story<JobItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <StackedList header="Job listings" hasBorder hasShadow>
        {data.map(({ id, title, link, dateData, date }) => (
          <JobItem key={id}>
            <JobItem.Content>
              <JobItem.Title title={title} link={link} />
              <JobItem.Details dateData={dateData} date={date} />
            </JobItem.Content>
          </JobItem>
        ))}
      </StackedList>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'Job item title',
  link: 'https://carleton.ca',
  date: 'September 24th, 2020',
  dateData: '2020-01-07',
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
