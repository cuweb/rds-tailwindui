import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner, NewsCard, FooterBasic } from '../../components';

import { NewsItemData as data } from '../../components/Cards/NewsCard/NewsCardData';
import { Container, Column, Main } from '../../layouts';

export default {
  title: 'Page Templates/cutheme',
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const SinglePara = () => {
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
    </>
  );
};

const DoublePara = () => {
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
    </>
  );
};

export const SinglePageGreyIntro = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="cutheme layout testing" isType="dark-wave" align="left" />

    <Main>
      <Container as="section" hasProse>
        <Container as="div" bgColor="grey">
          <h2>News Card Grid</h2>
          <p>Uses Container, Column and NewsCard components.</p>
          <Column cols="3">
            {data.map(item => (
              <NewsCard
                title={item?.title}
                link={item?.url}
                image={item?.image}
                date={item?.date}
                excerpt={item?.excerpt}
                tags={item?.tags}
              />
            ))}
          </Column>
        </Container>

        <h2>This is a header 2</h2>
        <SinglePara />

        <h3>This is a header 3</h3>
        <SinglePara />

        <h4>This is a header 4</h4>
        <DoublePara />

        <Container as="div" bgColor="white">
          <h2>News Card Grid</h2>
          <p>Uses Container, Column and NewsCard components.</p>
          <Column cols="3">
            {data.map(item => (
              <NewsCard
                title={item?.title}
                link={item?.url}
                image={item?.image}
                date={item?.date}
                excerpt={item?.excerpt}
                tags={item?.tags}
              />
            ))}
          </Column>
        </Container>

        <DoublePara />

        <h2>This is a header 2</h2>
        <SinglePara />

        <Container as="div" bgColor="grey">
          <h2>News Card Grid</h2>
          <p>Uses Container, Column and NewsCard components.</p>
          <Column cols="3">
            {data.map(item => (
              <NewsCard
                title={item?.title}
                link={item?.url}
                image={item?.image}
                date={item?.date}
                excerpt={item?.excerpt}
                tags={item?.tags}
              />
            ))}
          </Column>
        </Container>

        <Container as="div" bgColor="grey" maxWidth="7xl">
          <h2>News Card Grid</h2>
          <p>Uses Container, Column and NewsCard components.</p>
          <Column cols="3" maxWidth="7xl">
            {data.map(item => (
              <NewsCard
                title={item?.title}
                link={item?.url}
                image={item?.image}
                date={item?.date}
                excerpt={item?.excerpt}
                tags={item?.tags}
              />
            ))}
          </Column>
        </Container>

        <DoublePara />

        <h2>This is a header 2</h2>
        <SinglePara />

        <Container as="div" bgColor="white">
          <h2>News Card Grid</h2>
          <p>Uses Container, Column and NewsCard components.</p>
          <Column cols="3">
            {data.map(item => (
              <NewsCard
                title={item?.title}
                link={item?.url}
                image={item?.image}
                date={item?.date}
                excerpt={item?.excerpt}
                tags={item?.tags}
              />
            ))}
          </Column>
        </Container>

        <Container as="div" bgColor="white" maxWidth="7xl">
          <h2>News Card Grid</h2>
          <p>Uses Container, Column and NewsCard components.</p>
          <Column cols="3" maxWidth="7xl">
            {data.map(item => (
              <NewsCard
                title={item?.title}
                link={item?.url}
                image={item?.image}
                date={item?.date}
                excerpt={item?.excerpt}
                tags={item?.tags}
              />
            ))}
          </Column>
        </Container>
      </Container>
    </Main>

    <FooterBasic />
  </>
);
