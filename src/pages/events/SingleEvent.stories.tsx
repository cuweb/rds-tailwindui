import React from 'react';
import { Meta } from '@storybook/react';
import { DetailsItemData as data } from '../../components/ListingItems/DetailsItem/DetailsItemData';

import {
  TopNav,
  Banner,
  FooterBasic,
  DetailsItem,
  Button,
} from '../../components';
import {
  Main,
  Column,
  Aside,
  Container,
  Panel,
  StackedList,
} from '../../layouts';

export default {
  title: 'Page Templates/Events Calendar',
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const EventContent = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
        tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus
        imperdiet turpis nec elit ultricies, sed tempus diam dignissim.
        Suspendisse condimentum magna vel orci vulputate, eget vulputate neque
        porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus
        vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis
        interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit
        tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
      <img
        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;w=1310&amp;h=873&amp;q=80&amp;facepad=3"
        alt=""
        width="1310"
        height="873"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet
        tortor pellentesque, posuere tellus vitae, sagittis justo. Vivamus
        imperdiet turpis nec elit ultricies, sed tempus diam dignissim.
        Suspendisse condimentum magna vel orci vulputate, eget vulputate neque
        porttitor. Suspendisse euismod, urna et gravida volutpat, tortor risus
        vehicula nisl, in vulputate lectus dolor viverra est. Etiam quis
        interdum nisi, et malesuada lectus. Aliquam luctus, velit eget suscipit
        tincidunt, sem ex tempus turpis, quis pulvinar metus sapien in urna.
      </p>
      <p>
        Nobis voluptatem dolorum et eum doloremque cupiditate velit. Praesentium
        architecto a distinctio aut reprehenderit ducimus. Perferendis excepturi
        delectus nihil voluptatem non. Molestiae quas dolores accusamus in.
        Praesent quis ligula quis nulla malesuada tempor.
      </p>
    </>
  );
};

export const SingleEvent = () => (
  <>
    <TopNav title="Events Calendar" />
    <Banner
      title="Single Event Post Template"
      align="left"
      maxWidth="7xl"
      isType="image"
      image="https://carleton.ca/about/wp-content/uploads/about-header-1600w-3.jpg"
    />

    <Main>
      <Container as="section">
        <Column cols="2/3" maxWidth="7xl">
          <Container as="article" hasProse>
            <EventContent />
          </Container>

          <Aside isSticky topSpace="8">
            <Column cols="2" gridGap="5">
              <Button onClick={() => {}} title="Remove MyEvent" />
              <Button
                isType="grey"
                onClick={() => {}}
                title="Add to MyEvents"
              />
            </Column>
            <Panel hasShadow>
              <StackedList hasDividers>
                {data.map(({ title, description, icon }) => (
                  <DetailsItem key={title}>
                    <DetailsItem.Icon icon={icon} />
                    <DetailsItem.Content>
                      <DetailsItem.Title title={title} />
                      <DetailsItem.Description description={description} />
                    </DetailsItem.Content>
                  </DetailsItem>
                ))}
              </StackedList>
            </Panel>
          </Aside>
        </Column>
      </Container>
    </Main>

    <FooterBasic />
  </>
);
