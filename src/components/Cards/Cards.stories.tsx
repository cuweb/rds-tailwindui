import React from 'react';
import { Meta } from '@storybook/react';
import { Cards } from './Cards';
import data from './EventData.json';
import { Column } from '../../layouts';

export default {
  title: 'Components/Cards/Events',
  component: Cards,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Cards>;

export const Default = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    <Cards
      name={'Lived Experience Luncheon Series with Dr. Alex Auerbach'}
      startDateTime="2022-12-16 01:48:41"
      endDateTime="2022-12-16 02:45:41"
      eventAddress="405 Robertson Hall"
      onCampus={false}
      tags={[
        {
          id: 2,
          type: 'audience',
          name: 'Carleton Community',
          slug: 'carleton-community',
        },
        {
          id: 7,
          type: 'category',
          name: 'Visual Arts',
          slug: 'visual-arts',
        },
        {
          id: 8,
          type: 'audience',
          name: 'Faculty',
          slug: 'faculty',
        },
      ]}
    />
  </Column>
);
export const gridCards = () => (
  <Column cols="3" gridGap="8" maxWidth="7xl">
    {data.map(item => (
      <Cards
        name={item?.title}
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
