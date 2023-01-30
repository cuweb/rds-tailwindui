import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Column } from '../../../layouts/Column';
import { Container } from '../../../layouts/Container';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';
import { EventItem, EventItemProps } from './EventItem';
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
    <EventItem.DateBox startDateTime={args.startDateTime} />
    <EventItem.Content>
      <EventItem.Title as="h2" fontSize={args.fontSize} name={args.name} />
      <EventItem.Details
        startDateTime={args.startDateTime}
        endDateTime={args.endDateTime}
        event_address={args.event_address}
      />
      <EventItem.Category tags={args.tags} />
    </EventItem.Content>
  </EventItem>
);

const SingleItemPanelTemplate: Story<EventItemProps> = args => (
  <Column maxWidth="3xl">
    <Panel hasBorder>
      <EventItem as="div" link={args.link}>
        <EventItem.DateBox startDateTime={args.startDateTime} />
        <EventItem.Content>
          <EventItem.Title as="h3" fontSize={args.fontSize} name={args.name} />
          <EventItem.Details
            startDateTime={args.startDateTime}
            endDateTime={args.endDateTime}
            event_address={args.event_address}
          />
          <EventItem.Category tags={args.tags} />
        </EventItem.Content>
      </EventItem>
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<EventItemProps> = args => (
  <Container>
    <Column maxWidth="3xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(
            ({
              id,
              title, // link,
              start_date,
              end_date,
              event_address,
              on_campus,
              on_campus_building,
              on_campus_room_number,
              tags,
            }) => (
              <EventItem key={id} link={args.link}>
                <EventItem.DateBox startDateTime={start_date} />
                <EventItem.Content>
                  <EventItem.Title name={title} />
                  <EventItem.Details
                    startDateTime={start_date}
                    endDateTime={end_date}
                    event_address={event_address}
                    on_campus={on_campus}
                    on_campus_building={on_campus_building}
                    on_campus_room_number={on_campus_room_number}
                  />
                  <EventItem.Category tags={tags} />
                </EventItem.Content>
              </EventItem>
            )
          )}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListPanelTitleTemplate: Story<EventItemProps> = args => (
  <Container bgColor="grey">
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>Event listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(
            ({
              id,
              title,
              start_date,
              end_date,
              event_address,
              tags,
              on_campus,
              on_campus_building,
              on_campus_room_number,
            }) => (
              <EventItem key={id} link={args.link}>
                <EventItem.DateBox startDateTime={start_date} />
                <EventItem.Content>
                  <EventItem.Title name={title} />
                  <EventItem.Details
                    startDateTime={start_date}
                    endDateTime={end_date}
                    event_address={event_address}
                    on_campus={on_campus}
                    on_campus_building={on_campus_building}
                    on_campus_room_number={on_campus_room_number}
                  />
                  <EventItem.Category tags={tags} />
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
  name: 'Event item title',
  link: 'https://carleton.ca',
  event_address: 'Robertson Hall',
  startDateTime: '2022-12-16 01:48:41',
  endDateTime: '2022-12-18 05:22:15',
  on_campus: true,
  on_campus_building: 'Robertson Hall',
  on_campus_room_number: '407',
  tags: {
    category: [
      {
        id: 3,
        name: 'Category One',
        slug: 'category-one',
      },
      {
        id: 4,
        name: 'Category Two',
        slug: 'category-two',
      },
    ],
    audience: [
      {
        id: 1,
        name: 'Student',
        slug: 'student',
      },
      {
        id: 2,
        name: 'Faculty',
        slug: 'faculty',
      },
    ],
  },
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
