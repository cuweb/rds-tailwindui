import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Column } from '../../../layouts/Column';
import { Container } from '../../../layouts/Container';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';
import { EventItem, EventItemProps } from './EventItem';
import { EventItemData as data } from './EventItemData';

export default {
  title: 'Cards & Lists/Event List Item',
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
  <EventItem
    as="div"
    link={args.link}
    fontSize={args.fontSize}
    title={args.title}
    startDateTime={args.startDateTime}
    endDateTime={args.endDateTime}
    event_address={args.event_address}
    on_campus={args.on_campus}
    on_campus_building={args.on_campus_building}
    on_campus_room_number={args.on_campus_room_number}
    tags={args.tags}
  />
);

const SingleItemPanelTemplate: Story<EventItemProps> = args => (
  <Column maxWidth="5xl">
    <Panel hasBorder>
      <EventItem
        as="div"
        link={args.link}
        fontSize={args.fontSize}
        title={args.title}
        startDateTime={args.startDateTime}
        endDateTime={args.endDateTime}
        event_address={args.event_address}
        on_campus={args.on_campus}
        on_campus_building={args.on_campus_building}
        on_campus_room_number={args.on_campus_room_number}
        tags={args.tags}
      />
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<EventItemProps> = args => (
  <Container>
    <Column maxWidth="5xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(() => (
            <EventItem
              as="div"
              link={args.link}
              fontSize={args.fontSize}
              title={args.title}
              startDateTime={args.startDateTime}
              endDateTime={args.endDateTime}
              event_address={args.event_address}
              on_campus={args.on_campus}
              on_campus_building={args.on_campus_building}
              on_campus_room_number={args.on_campus_room_number}
              tags={args.tags}
            />
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListPanelTitleTemplate: Story<EventItemProps> = args => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>Event listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(() => (
            <EventItem
              as="div"
              link={args.link}
              fontSize={args.fontSize}
              title={args.title}
              startDateTime={args.startDateTime}
              endDateTime={args.endDateTime}
              event_address={args.event_address}
              on_campus={args.on_campus}
              on_campus_building={args.on_campus_building}
              on_campus_room_number={args.on_campus_room_number}
              tags={args.tags}
            />
          ))}
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
