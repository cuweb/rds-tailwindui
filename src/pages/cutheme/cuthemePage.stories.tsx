import React from 'react';
import { Meta } from '@storybook/react';
import { TopNav, Banner, NewsCard } from '../../components';

import { NewsItemData as data } from '../../components/Cards/NewsCard/NewsCardData';
import { Column } from '../../layouts';

export default {
  title: 'Page Templates/cutheme',
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

const style = {
  proseBase: `prose prose-lg md:prose-xl max-w-none`,
  proseFirst: `[&>:not(.new-container):not(.new-column):first-child]:mt-10`,
  proseLast: `[&>:not(.new-container):not(.new-column):last-child]:mb-10`,
  proseWidth: `[&>:not(.new-container):not(.new-column)]:max-w-5xl [&>:not(.new-container):not(.new-column)]:mx-auto`,
  containerWrap: `new-container [&>*]:mx-auto`,
  containerWhite: `new-container-white bg-white`,
  containerGrey: `new-container-grey bg-cu-black-50 py-4 my-10`,
  containerWidth: `[&>:not(.new-container):not(.cu-column)]:max-w-5xl`,
};

export const cuthemePage = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Space Testing" />

    <main className="mx-10">
      <section
        className={`${style.proseBase} ${style.proseFirst} ${style.proseLast} ${style.proseWidth}`}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet tortor pellentesque, posuere tellus vitae, sagittis justo.
          Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
          dignissim. Suspendisse condimentum magna vel orci vulputate, eget
          vulputate neque porttitor. Suspendisse euismod, urna et gravida
          volutpat, tortor risus vehicula nisl, in vulputate lectus dolor
          viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam
          luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis
          pulvinar metus sapien in urna.
        </p>

        <h2>This is a header 2</h2>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>

        <h3>This is a header 3</h3>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>

        <h4>This is a header 4</h4>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet tortor pellentesque, posuere tellus vitae, sagittis justo.
          Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
          dignissim. Suspendisse condimentum magna vel orci vulputate, eget
          vulputate neque porttitor. Suspendisse euismod, urna et gravida
          volutpat, tortor risus vehicula nisl, in vulputate lectus dolor
          viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam
          luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis
          pulvinar metus sapien in urna.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>

        <div
          className={`${style.containerWrap} ${style.containerWhite} ${style.containerWidth}`}
        >
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
        </div>

        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>

        <div
          className={`${style.containerWrap} ${style.containerWhite} ${style.containerWidth}`}
        >
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
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet tortor pellentesque, posuere tellus vitae, sagittis justo.
          Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
          dignissim. Suspendisse condimentum magna vel orci vulputate, eget
          vulputate neque porttitor. Suspendisse euismod, urna et gravida
          volutpat, tortor risus vehicula nisl, in vulputate lectus dolor
          viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam
          luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis
          pulvinar metus sapien in urna.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>

        <div
          className={`${style.containerWrap} ${style.containerGrey} ${style.containerWidth}`}
        >
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
            amet tortor pellentesque, posuere tellus vitae, sagittis justo.
            Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
            dignissim. Suspendisse condimentum magna vel orci vulputate, eget
            vulputate neque porttitor. Suspendisse euismod, urna et gravida
            volutpat, tortor risus vehicula nisl, in vulputate lectus dolor
            viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis
            pulvinar metus sapien in urna.
          </p>
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
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit.
            Praesentium architecto a distinctio aut reprehenderit ducimus.
            Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
            dolores accusamus in. Praesent quis ligula quis nulla malesuada
            tempor.
          </p>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
          amet tortor pellentesque, posuere tellus vitae, sagittis justo.
          Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
          dignissim. Suspendisse condimentum magna vel orci vulputate, eget
          vulputate neque porttitor. Suspendisse euismod, urna et gravida
          volutpat, tortor risus vehicula nisl, in vulputate lectus dolor
          viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam
          luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis
          pulvinar metus sapien in urna.
        </p>

        <div
          className={`${style.containerWrap} ${style.containerGrey} ${style.containerWidth}`}
        >
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
            amet tortor pellentesque, posuere tellus vitae, sagittis justo.
            Vivamus imperdiet turpis nec elit ultricies, sed tempus diam
            dignissim. Suspendisse condimentum magna vel orci vulputate, eget
            vulputate neque porttitor. Suspendisse euismod, urna et gravida
            volutpat, tortor risus vehicula nisl, in vulputate lectus dolor
            viverra est. Etiam quis interdum nisi, et malesuada lectus. Aliquam
            luctus, velit eget suscipit tincidunt, sem ex tempus turpis, quis
            pulvinar metus sapien in urna.
          </p>
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
        </div>
      </section>
    </main>

    <footer className="px-10 py-6 text-white bg-cu-black-800">Footer</footer>
  </>
);
