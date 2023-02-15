import React from 'react';
import { Meta, Story } from '@storybook/react';
import { JobItem, JobItemProps } from './JobItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
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

const SingleItemPanelTemplate: Story<JobItemProps> = args => (
  <Column maxWidth="5xl">
    <Panel hasBorder>
      <JobItem as="div" link={args.link}>
        <JobItem.Content>
          <JobItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
          <JobItem.Details dateData={args.dateData} date={args.date} />
        </JobItem.Content>
      </JobItem>
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<JobItemProps> = () => (
  <Container>
    <Column maxWidth="5xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(({ id, title, link, dateData, date }) => (
            <JobItem key={id}>
              <JobItem.Content>
                <JobItem.Title title={title} link={link} />
                <JobItem.Details dateData={dateData} date={date} />
              </JobItem.Content>
            </JobItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListPanelTitleTemplate: Story<JobItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>Job listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(({ id, title, link, dateData, date }) => (
            <JobItem key={id}>
              <JobItem.Content>
                <JobItem.Title title={title} link={link} />
                <JobItem.Details dateData={dateData} date={date} />
              </JobItem.Content>
            </JobItem>
          ))}
        </StackedList>
      </Panel>
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

export const SingleItemPanel = SingleItemPanelTemplate.bind({});
SingleItemPanel.args = {
  ...Default.args,
};

export const StackedListPanel = StackedListPanelTemplate.bind({});
StackedListPanel.args = {
  ...Default.args,
};

export const StackedListPanelTitle = StackedListPanelTitleTemplate.bind({});
StackedListPanelTitle.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemPanel.storyName = 'Single item in panel';
StackedListPanel.storyName = 'List w/shadow';
StackedListPanelTitle.storyName = 'List w/title';
