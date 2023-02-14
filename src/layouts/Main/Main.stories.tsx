import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Main, MainProps } from './Main';
import { Column } from '../Column';
import { Banner } from '../../components/Banner';
import { Container } from '../Container';

export default {
  title: 'Layouts/Main',
  component: Main,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Main>;

const DefaultTemplate: Story<MainProps> = () => (
  <Main>
    <p>This is a main element</p>
  </Main>
);

const SampleContent = () => {
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

const WithContentTemplate: Story<MainProps> = args => (
  <Main {...args}>
    <Column maxWidth="5xl">
      <article>
        <SampleContent />
      </article>
    </Column>
  </Main>
);

const WithContainerTemplate: Story<MainProps> = args => (
  <Main {...args}>
    <Container bgColor="grey">
      <Column maxWidth="5xl">
        <article>
          <SampleContent />
        </article>
      </Column>
    </Container>
  </Main>
);

const WithOverlapTemplate: Story<MainProps> = args => (
  <>
    <Banner hasOverlap isType="dark-wave" title="Content Overlay" />
    <Main {...args}>
      <Column maxWidth="5xl">
        <div className="py-12 bg-white rounded-lg px-14">
          <article>
            <SampleContent />
          </article>
        </div>
      </Column>
    </Main>
  </>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

export const WithContent = WithContentTemplate.bind({});
WithContent.args = {};

export const WithContainer = WithContainerTemplate.bind({});
WithContainer.args = {};

export const WithOverlap = WithOverlapTemplate.bind({});
WithOverlap.args = {
  hasOverlap: true,
};
