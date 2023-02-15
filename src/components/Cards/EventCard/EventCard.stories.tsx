import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Column } from '../../../layouts';
import { EventCard, EventCardProps } from './EventCard';
import { EventItemData as data } from './EventCardData';

export default {
  title: 'Cards & Lists/Events/Card',
  component: EventCard,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof EventCard>;

const DefaultTemplate: Story<EventCardProps> = args => (
  <EventCard
    heading={args.heading}
    title={args.title}
    link={args.link}
    startDateTime={args.startDateTime}
    endDateTime={args.endDateTime}
    eventAddress={args.eventAddress}
    onCampus={args.onCampus}
    tags={args.tags}
  />
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  heading: 'h3',
  title: 'Lived Experience Luncheon Series with Dr. Alex Auerbach',
  link: '#',
  startDateTime: '2022-12-16 01:48:41',
  endDateTime: '2022-12-16 02:45:41',
  eventAddress: '405 Robertson Hall',
  onCampus: false,
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

export const gridCards = () => (
  <Column cols="3" maxWidth="7xl">
    {data.map(item => (
      <EventCard
        title={item?.title}
        link={item?.link}
        startDateTime={item?.start_date}
        endDateTime={item?.end_date}
        featuredImage={item?.featured_image}
        eventAddress={item?.event_address}
        onCampus={item?.on_campus}
        onCampusBuilding={item?.on_campus_building}
        onCampusRoomNumber={item?.on_campus_room_number}
        tags={item?.tags}
      />
    ))}
  </Column>
);
