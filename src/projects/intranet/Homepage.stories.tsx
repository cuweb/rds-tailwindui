import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner, FooterStandard, Button } from '../../components';
import { Aside, Column, Container, Main } from '../../layouts';

export default {
  title: 'Get Started/Projects/Intranet',
  argTypes: {
    bgColor: {
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const SinglePara = () => {
  return (
    <>
      <p>
        <strong>Single Paragraph:</strong> Nobis voluptatem dolorum et eum
        doloremque cupiditate velit. Praesentium architecto a distinctio aut
        reprehenderit ducimus. Perferendis excepturi delectus nihil voluptatem
        non. Molestiae quas dolores accusamus in. Praesent quis ligula quis
        nulla malesuada tempor.
      </p>
    </>
  );
};

const DoublePara = () => {
  return (
    <>
      <p>
        <strong>Double Paragraph:</strong> Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean sit amet tortor pellentesque,
        posuere tellus vitae, sagittis justo. Vivamus imperdiet turpis nec elit
        ultricies, sed tempus diam dignissim. Suspendisse condimentum magna vel
        orci vulputate, eget vulputate neque porttitor. Suspendisse euismod,
        urna et gravida volutpat, tortor risus vehicula nisl, in vulputate
        lectus dolor viverra est. Etiam quis interdum nisi, et malesuada lectus.
        Aliquam luctus, velit eget suscipit tincidunt, sem ex tempus turpis,
        quis pulvinar metus sapien in urna.
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

export const Homepage = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Intranet Homepage" paragraph="Coming Soon" />

    <Main>
      <Container maxWidth="7xl" hasProse>
        <SinglePara />
        <h2>This is a header two</h2>
        <DoublePara />

        <Container bgColor="grey" maxWidth="7xl">
          <Column cols="2/3" maxWidth="7xl">
            <Container as="article">
              <h3>This is a header three</h3>
              <DoublePara />
            </Container>

            <Aside>
              <Column cols="1" gridGap="5">
                <Button onClick={() => {}} title="Remove from my events" />
                <Button
                  isType="white"
                  onClick={() => {}}
                  title="Add to my events"
                />
              </Column>
            </Aside>
          </Column>
        </Container>
      </Container>
    </Main>

    <FooterStandard />
  </>
);
