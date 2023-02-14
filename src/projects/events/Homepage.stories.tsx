import React from 'react';
import { Meta } from '@storybook/react';

import {
  TopNav,
  Banner,
  FooterBasic,
  EventCard,
  EventItem,
  Pagination,
  Calendar,
} from '../../components';

import {
  Main,
  Column,
  Container,
  Panel,
  StackedList,
  Aside,
} from '../../layouts';

import { EventItemData as dataCard } from '../../components/Cards/EventCard/EventCardData';
import { EventItemData as dataList } from '../../components/ListingItems/EventItem/EventItemData';

export default {
  title: 'Projects/Events Calendar',
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Homepage = () => (
  <>
    <TopNav title="Events Calendar" />
    <Banner
      title="Featured Events"
      align="left"
      isType="animated"
      maxWidth="7xl"
    />

    <Main hasOverlap>
      <Container maxWidth="7xl">
        <Column cols="3" maxWidth="7xl">
          {dataCard.map(item => (
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
      </Container>

      <Container bgColor="grey" maxWidth="7xl" hasProse>
        <h2>Upcoming Events</h2>

        <Column cols="2/3" maxWidth="7xl">
          <div>
            <Panel hasShadow>
              <StackedList hasDividers>
                {dataList.map(
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
                    <EventItem key={id} link="#">
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

            <Pagination
              totalCount={48}
              siblingCount={1}
              pageSize={5}
              callback={() => {}}
            />
          </div>

          <Aside>
            <Calendar callback={() => {}} />
          </Aside>
        </Column>
      </Container>
    </Main>

    <FooterBasic />
  </>
);
