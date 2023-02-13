import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner, NewsCard, Prose, FooterBasic } from '../../components';

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

export const cuthemePage = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Space Testing" isType="dark-wave" />

    <Main>
      <Prose as="section">
        <SinglePara />

        <h2>This is a header 2</h2>
        <SinglePara />

        <h3>This is a header 3</h3>
        <SinglePara />

        <h4>This is a header 4</h4>
        <DoublePara />

        <Column cols="3" gridGap="8">
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

        <DoublePara />
        <DoublePara />

        <Container>
          <Column cols="3" gridGap="8">
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

        <SinglePara />

        <Container>
          <h2>News Card Grid</h2>
          <p>Uses Container, Column and NewsCard components.</p>
          <Column cols="3" gridGap="8">
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

        <Container bgColor="grey">
          <h2>News Card Grid</h2>
          <p>Uses Container, Column and NewsCard components.</p>
          <Column cols="3" gridGap="8">
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

          <SinglePara />

          <Column cols="3" gridGap="8" maxWidth="5xl">
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
          <Column cols="3" gridGap="8" maxWidth="7xl">
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

          <SinglePara />
        </Container>

        <DoublePara />

        <Container bgColor="grey">
          <Column cols="3" gridGap="8">
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

          <SinglePara />

          <Column cols="3" gridGap="8" maxWidth="5xl">
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
          <Column cols="3" gridGap="8" maxWidth="7xl">
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

        <Container bgColor="grey">
          <Column cols="3" gridGap="8">
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

          <SinglePara />

          <Column cols="3" gridGap="8" maxWidth="5xl">
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
          <Column cols="3" gridGap="8" maxWidth="7xl">
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

        <Container bgColor="grey">
          <Column cols="3" gridGap="8">
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

          <SinglePara />

          <Column cols="3" gridGap="8" maxWidth="5xl">
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
          <Column cols="3" gridGap="8" maxWidth="7xl">
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

        <Container>
          <Column cols="3" gridGap="8">
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

          <SinglePara />

          <Column cols="3" gridGap="8" maxWidth="5xl">
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
          <Column cols="3" gridGap="8" maxWidth="7xl">
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

        <Container>
          <Column cols="3" gridGap="8">
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

          <SinglePara />

          <Column cols="3" gridGap="8" maxWidth="5xl">
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
          <Column cols="3" gridGap="8" maxWidth="7xl">
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
      </Prose>
    </Main>

    <FooterBasic />
  </>
);
