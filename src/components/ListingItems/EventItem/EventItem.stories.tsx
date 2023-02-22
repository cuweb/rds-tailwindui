import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Column } from '../../../layouts/Column';
import { Container } from '../../../layouts/Container';
import { StackedList } from '../../../layouts/StackedList';
import { EventItem, EventItemProps } from './EventItem';
import { EventItemData as data } from './EventItemData';

export default {
  title: 'Cards & Lists/Events/List Item',
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

const SingleItemListTemplate: Story<EventItemProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      <EventItem
        as="li"
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
    </StackedList>
  </Column>
);

const MultiItemListTemplate: Story<EventItemProps> = args => (
  <Container>
    <Column maxWidth="5xl">
      <StackedList hasShadow>
        {data.map(() => (
          <EventItem
            as="li"
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
    </Column>
  </Container>
);

const MultiItemColumnsTemplate: Story<EventItemProps> = args => (
  <Container>
    <Column maxWidth="5xl">
      <StackedList cols="2" hasShadow>
        {data.map(() => (
          <EventItem
            as="li"
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
