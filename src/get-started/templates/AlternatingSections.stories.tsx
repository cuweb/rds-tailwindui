import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner, FooterBasic } from '../../components';
import { Container, Main } from '../../layouts';

export default {
  title: 'Get Started/Templates/Alternating Sections',
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

export const AlternatingSections = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner
      title="Alternating Sections Containers"
      paragraph="This template replicates the basic markup template by using simple headings and paragraphs but uses modifyed section containers to alternate between white and grey backgrounds"
    />

    <Main>
      <Container hasProse>
        <SinglePara />
        <h2>This is a header two</h2>
        <DoublePara />
        <h3>This is a header three</h3>
        <SinglePara />
      </Container>

      <Container bgColor="grey" hasProse>
        <SinglePara />
        <h2>This is a header two</h2>
        <DoublePara />
        <h3>This is a header three</h3>
        <SinglePara />
      </Container>

      <Container hasProse>
        <SinglePara />
        <h2>This is a header two</h2>
        <DoublePara />
        <h3>This is a header three</h3>
        <SinglePara />
      </Container>
    </Main>

    <FooterBasic />
  </>
);
