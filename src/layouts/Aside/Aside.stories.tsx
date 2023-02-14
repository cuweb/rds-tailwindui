import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Aside, AsideProps } from './Aside';
import { Column } from '../Column';
import { Container } from '../Container';

export default {
  title: 'Layouts/Aside',
  component: Aside,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Aside>;

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

const DefaultTemplate: Story<AsideProps> = () => (
  <Aside>
    <p>This is an aside</p>
  </Aside>
);

export const Default = DefaultTemplate.bind({});
Default.args = {};

const IsStickyTemplate: Story<AsideProps> = args => (
  <Container>
    <Column cols="2/3" maxWidth="7xl">
      <article>
        <SampleContent />
      </article>

      <Aside {...args}>
        <p>This is an aside as a sticky item</p>
      </Aside>
    </Column>
  </Container>
);

export const IsSticky = IsStickyTemplate.bind({});
IsSticky.args = {
  isSticky: true,
  topSpace: '8',
};
