import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner, FooterBasic, Button } from '../../components';
import { Container, Main, Column, Aside } from '../../layouts';

export default {
  title: 'Page Templates/Get Started',
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

export const ExampleThree = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Example Three" isType="dark-wave" />

    <Main>
      <Container>
        <Column cols="2/3" maxWidth="7xl">
          <Container as="article" maxWidth="7xl" hasProse>
            <SinglePara />
            <DoublePara />
            <SinglePara />
          </Container>
          <Aside>
            <Button onClick={() => {}} title="Default Button" />
          </Aside>
        </Column>
      </Container>
    </Main>

    <FooterBasic />
  </>
);
