import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EventItem, EventItemProps } from './EventItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';
import { EventItemData as data } from './EventItemData';

export default {
  title: 'Components/List Items/Events',
  component: EventItem,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof EventItem>;

const DefaultTemplate: Story<EventItemProps> = args => (
  <EventItem as="div" link={args.link}>
    <EventItem.DateBox month={args.month} day={args.day} />
    <EventItem.Content>
      <EventItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
      <EventItem.Details
        date={args.date}
        time={args.time}
        location={args.location}
      />
      <EventItem.Category category={args.category} />
    </EventItem.Content>
  </EventItem>
);

const SingleItemPanelTemplate: Story<EventItemProps> = args => (
  <Column maxWidth="3xl">
    <Panel hasBorder>
      <EventItem as="div" link={args.link}>
        <EventItem.DateBox month={args.month} day={args.day} />
        <EventItem.Content>
          <EventItem.Title
            as="h3"
            fontSize={args.fontSize}
            title={args.title}
          />
          <EventItem.Details
            date={args.date}
            time={args.time}
            location={args.location}
          />
          <EventItem.Category category={args.category} />
        </EventItem.Content>
      </EventItem>
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<EventItemProps> = () => (
  <Container>
    <Column maxWidth="3xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(
            ({
              id,
              title,
              link,
              month,
              day,
              date,
              time,
              location,
              category,
            }) => (
              <EventItem key={id}>
                <EventItem.DateBox month={month} day={day} />
                <EventItem.Content>
                  <EventItem.Title title={title} link={link} />
                  <EventItem.Details
                    date={date}
                    time={time}
                    location={location}
                  />
                  <EventItem.Category category={category} />
                </EventItem.Content>
              </EventItem>
            )
          )}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListPanelTitleTemplate: Story<EventItemProps> = () => (
  <Container bgColor="gray">
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>Event listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(
            ({
              id,
              title,
              link,
              month,
              day,
              date,
              time,
              location,
              category,
            }) => (
              <EventItem key={id}>
                <EventItem.DateBox month={month} day={day} />
                <EventItem.Content>
                  <EventItem.Title title={title} link={link} />
                  <EventItem.Details
                    date={date}
                    time={time}
                    location={location}
                  />
                  <EventItem.Category category={category} />
                </EventItem.Content>
              </EventItem>
            )
          )}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'Event item title',
  link: 'https://carleton.ca',
  location: 'Robertson Hall',
  time: '9:00 PM - 5:00 AM',
  month: 'Sept',
  day: '15',
  date: 'September 15th, 2020',
  category: 'Future Students',
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
StackedListPanel.storyName = 'Stacked list w/shadow';
StackedListPanelTitle.storyName = 'Stacked list w/title';
