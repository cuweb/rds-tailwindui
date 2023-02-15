import React, { useCallback, useState } from 'react';
import { Meta } from '@storybook/react';

import {
  TopNav,
  Banner,
  FooterBasic,
  EventCard,
  EventItem,
  Pagination,
  Calendar,
  Filter,
} from '../../../components';

import {
  Main,
  Column,
  Container,
  Panel,
  StackedList,
  Aside,
} from '../../../layouts';

import { EventItemData as dataCard } from '../../../components/Cards/EventCard/EventCardData';
import { EventItemData as dataList } from '../../../components/ListingItems/EventItem/EventItemData';
import data from '../../../components/Filter/FilterData.json';

export default {
  title: 'Get Started/Projects/Events Calendar',
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const Homepage = () => {
  const [, setFilterItem] = useState([]);
  const callbackfilter = useCallback(
    (filterSelected: any) => {
      setFilterItem(filterSelected);
    },
    [setFilterItem]
  );

  return (
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

          <Column maxWidth="7xl">
            <Filter
              filters={data.filters}
              callback={callbackfilter}
              sortOptions={data.sortOptions}
            />
          </Column>

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
                      <EventItem
                        key={id}
                        as="div"
                        link="#"
                        title={title}
                        startDateTime={start_date}
                        endDateTime={end_date}
                        event_address={event_address}
                        on_campus={on_campus}
                        on_campus_building={on_campus_building}
                        on_campus_room_number={on_campus_room_number}
                        tags={tags}
                      />
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
};
