import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner } from '../components';
import { Column, Container, Main } from '../layouts';

export default {
  title: 'Page Templates',
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

export const TestingToDelete = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner
      title="Main > Prose Container > Basic Content"
      paragraph="Prose container as first child of main with a first nested item of prose is basic content"
      isType="dark-wave"
    />
    <Main>
      <Container>
        <SinglePara />
        <Column cols="2" maxWidth="7xl">
          <div>
            <DoublePara />
            <SinglePara />
          </div>
          <div>
            <SinglePara />
            <DoublePara />
          </div>
        </Column>
        <DoublePara />
      </Container>

      <Container>
        <DoublePara />
      </Container>
      <Container bgColor="grey">
        <SinglePara />
      </Container>
      <Container bgColor="grey">
        <DoublePara />
      </Container>
    </Main>
    <footer className="p-8 mb-16 bg-cu-black-900 text-cu-black-400">
      Footer
    </footer>

    <br />

    <TopNav title="Carleton University" />
    <Banner
      title="Main > Prose Container > Basic Content"
      paragraph="Prose container as first child of main with a first nested item of prose is basic content"
      isType="dark-wave"
    />
    <Main>
      <Container bgColor="grey">
        <SinglePara />
        <Column cols="2">
          <div>
            <DoublePara />
            <SinglePara />
          </div>
          <div>
            <SinglePara />
            <DoublePara />
          </div>
        </Column>
        <DoublePara />
      </Container>
      <Container bgColor="grey">
        <DoublePara />
      </Container>
      <Container>
        <SinglePara />
      </Container>
      <Container>
        <DoublePara />
      </Container>
    </Main>
    <footer className="p-8 mb-16 bg-cu-black-900 text-cu-black-400">
      Footer
    </footer>

    <br />

    <TopNav title="Carleton University" />
    <Banner
      title="Main > Prose Container > Columns"
      paragraph="Prose container as first child of main with a first nested item of prose is basic content"
      isType="dark-wave"
    />

    <Main>
      <Container>
        <Column cols="2">
          <div>
            <DoublePara />
            <SinglePara />
          </div>
          <div>
            <SinglePara />
            <DoublePara />
          </div>
        </Column>
      </Container>
      <Container maxWidth="7xl">
        <DoublePara />
        <Column cols="2" maxWidth="7xl">
          <div>
            <SinglePara />
          </div>
          <div>
            <SinglePara />
          </div>
        </Column>
        <Column cols="2">
          <div>
            <DoublePara />
          </div>
          <div>
            <DoublePara />
          </div>
        </Column>
      </Container>
      <Container bgColor="grey">
        <Column cols="2">
          <div>
            <DoublePara />
            <SinglePara />
          </div>
          <div>
            <SinglePara />
            <DoublePara />
          </div>
        </Column>
      </Container>
      <Container bgColor="grey">
        <Column cols="2">
          <div>
            <SinglePara />
          </div>
          <div>
            <SinglePara />
          </div>
        </Column>
        <Column cols="2">
          <div>
            <DoublePara />
          </div>
          <div>
            <DoublePara />
          </div>
        </Column>
      </Container>
    </Main>

    <footer className="p-8 mb-16 bg-cu-black-900 text-cu-black-400">
      Footer
    </footer>

    <br />

    <TopNav title="Carleton University" />
    <Banner
      title="Main > Prose Container > Columns"
      paragraph="Prose container as first child of main with a first nested item of prose is basic content"
      isType="dark-wave"
    />

    <Main>
      <Container>
        <Column cols="2/3" maxWidth="7xl">
          <div>
            <DoublePara />
            <SinglePara />
          </div>
          <div>
            <SinglePara />
          </div>
        </Column>
      </Container>
    </Main>

    <footer className="p-8 mb-16 bg-cu-black-900 text-cu-black-400">
      Footer
    </footer>
  </>
);
