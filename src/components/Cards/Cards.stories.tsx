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
      event_address="405 Robertson Hall"
      on_campus={false}
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
        event_address={item?.event_address}
        on_campus={item?.on_campus}
        on_campus_building={item?.on_campus_building}
        on_campus_room_number={item?.on_campus_room_number}
        tags={item?.tags}
      />
    ))}
  </Column>
);
