import React from 'react';
import { Meta } from '@storybook/react';
// import { Aside, Column, Container, Main } from '../layouts';
import { TopNav, Banner } from '../components';

export default {
  title: 'Page Templates/Base Testing',
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
  container5xl: `[&>*]:max-w-5xl`,
  container7xl: `[&>*]:max-w-7xl`,
};

export const BaseTesting = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Space Testing" />

    <main className="mx-10">
      <div
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
        <h2>This is a header</h2>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in. Praesent quis ligula quis nulla malesuada
          tempor.
        </p>

        <div
          className={`${style.containerWrap} ${style.containerGrey} ${style.container5xl}`}
        >
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit.
            Praesentium architecto a distinctio aut reprehenderit ducimus.
            Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
            dolores accusamus in. Praesent quis ligula quis nulla malesuada
            tempor.
          </p>
          <h2>This is a header</h2>
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
          className={`${style.containerWrap} ${style.containerWhite} ${style.container5xl}`}
        >
          <h2>This is a header</h2>
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
          className={`${style.containerWrap} ${style.containerGrey} ${style.container5xl}`}
        >
          <h2>This is a header</h2>
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
          className={`${style.containerWrap} ${style.containerGrey} ${style.container5xl}`}
        >
          <h2>Column Test</h2>
          <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto cu-column md:grid-cols-3">
            <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
              <a
                href="#"
                className="relative flex flex-col h-full cursor-pointer"
              >
                <img
                  className="object-cover w-full"
                  src="https://source.unsplash.com/random/400x300"
                />
                <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
                  <p className="flex items-start text-sm italic text-cu-black-600">
                    December 23, 2022
                  </p>
                  <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
                    End-of-Year Reflections and Resolutions for Our Web Services
                    Team
                  </h3>
                  <p className="flex items-start text-base text-cu-black-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam aliquam nulla eget est viverra, et tristique velit
                    elementum. Aliquam ultrices vitae felis sit amet phare...
                  </p>
                </div>
                <div className="pb-5 mt-auto px-7">
                  <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
                    Category One
                  </p>
                  <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
                    Category Two
                  </p>
                </div>
              </a>
            </div>
            <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
              <a
                href="#"
                className="relative flex flex-col h-full cursor-pointer"
              >
                <img
                  className="object-cover w-full"
                  src="https://source.unsplash.com/random/400x300"
                />
                <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
                  <p className="flex items-start text-sm italic text-cu-black-600">
                    December 14, 2022
                  </p>
                  <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
                    How to Write for the Web
                  </h3>
                  <p className="flex items-start text-base text-cu-black-600">
                    Proin placerat non nisl sed ullamcorper.
                  </p>
                </div>
                <div className="pb-5 mt-auto px-7">
                  <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
                    Category Three
                  </p>
                </div>
              </a>
            </div>
            <div className="not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg">
              <a
                href="#"
                className="relative flex flex-col h-full cursor-pointer"
              >
                <img
                  className="object-cover w-full"
                  src="https://source.unsplash.com/random/400x300"
                />
                <div className="flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3">
                  <p className="flex items-start text-sm italic text-cu-black-600">
                    November 25, 2022
                  </p>
                  <h3 className="text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl">
                    Captivating Captions: Why We Use Captions on Videos
                  </h3>
                  <p className="flex items-start text-base text-cu-black-600">
                    Donec dolor sapien, aliquet eu nibh vel, laoreet aliquam
                    arcu. Suspendisse potenti. Nulla varius, enim nec maximus.
                  </p>
                </div>
                <div className="pb-5 mt-auto px-7">
                  <p className="inline-flex px-2 mr-2 text-xs font-semibold rounded-xl bg-cu-black-50 text-cu-black-900 last:mr-0">
                    Category Four
                  </p>
                </div>
              </a>
            </div>
          </div>
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
      </div>
    </main>

    <footer className="px-10 py-6 text-white bg-cu-black-800">Footer</footer>
  </>
);
