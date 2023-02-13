import React from 'react';
import { Meta } from '@storybook/react';
import { Column, Container, Main } from '../layouts';
import { TopNav, Banner, Prose } from '../components';

export default {
  title: 'Page Templates/Base Template',
  argTypes: {
    bgColor: {
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const BaseTemplate = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Page Space Testing" />

    <Main>
      <Prose as="section" maxWidth="5xl">
        <p>
          Velit et dolor delectus enim. Nemo necessitatibus illo ratione facilis
          culpa. Culpa praesentium eligendi laudantium cumque et optio itaque.
          Ex assumenda aut minus voluptate.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in.
        </p>

        <Container maxWidth="5xl">
          <h2>Header inside container</h2>
          <p>
            Velit et dolor delectus enim. Nemo necessitatibus illo ratione
            facilis culpa. Culpa praesentium eligendi laudantium cumque et optio
            itaque. Ex assumenda aut minus voluptate.
          </p>
        </Container>
        <Container maxWidth="5xl">
          <p>
            Velit et dolor delectus enim. Nemo necessitatibus illo ratione
            facilis culpa. Culpa praesentium eligendi laudantium cumque et optio
            itaque. Ex assumenda aut minus voluptate.
          </p>
        </Container>
        <Container maxWidth="5xl">
          <p>
            Velit et dolor delectus enim. Nemo necessitatibus illo ratione
            facilis culpa. Culpa praesentium eligendi laudantium cumque et optio
            itaque. Ex assumenda aut minus voluptate.
          </p>
        </Container>

        <h2>Heading outside container</h2>
        <p>
          Velit et dolor delectus enim. Nemo necessitatibus illo ratione facilis
          culpa. Culpa praesentium eligendi laudantium cumque et optio itaque.
          Ex assumenda aut minus voluptate.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in.
        </p>

        <Column maxWidth="5xl" cols="2">
          <div>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
              Perferendis excepturi delectus nihil voluptatem non. Molestiae
              quas dolores accusamus in.
            </p>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
              Perferendis excepturi delectus nihil voluptatem non. Molestiae
              quas dolores accusamus in.
            </p>
          </div>
          <div>
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
          </div>
        </Column>

        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in.
        </p>

        <Column maxWidth="5xl" cols="2">
          <div>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
              Perferendis excepturi delectus nihil voluptatem non. Molestiae
              quas dolores accusamus in.
            </p>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
              Perferendis excepturi delectus nihil voluptatem non. Molestiae
              quas dolores accusamus in.
            </p>
          </div>
          <div>
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
          </div>
        </Column>
        <Column maxWidth="5xl" cols="2">
          <div>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
              Perferendis excepturi delectus nihil voluptatem non. Molestiae
              quas dolores accusamus in.
            </p>
            <h3>Heading</h3>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
              Perferendis excepturi delectus nihil voluptatem non. Molestiae
              quas dolores accusamus in.
            </p>
          </div>
          <div>
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
            <h3>Heading</h3>
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
          </div>
        </Column>

        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in.
        </p>

        <h2>Heading outside container</h2>
        <p>
          Velit et dolor delectus enim. Nemo necessitatibus illo ratione facilis
          culpa. Culpa praesentium eligendi laudantium cumque et optio itaque.
          Ex assumenda aut minus voluptate.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in.
        </p>

        <Container maxWidth="5xl">
          <Column maxWidth="5xl" cols="2">
            <div>
              <p>
                Velit et dolor delectus enim. Nemo necessitatibus illo ratione
                facilis culpa. Culpa praesentium eligendi laudantium cumque et
                optio itaque. Ex assumenda aut minus voluptate.
              </p>
            </div>
            <div>
              <p>
                Nobis voluptatem dolorum et eum doloremque cupiditate velit.
                Praesentium architecto a distinctio aut reprehenderit ducimus.
                Perferendis excepturi delectus nihil voluptatem non. Molestiae
                quas dolores accusamus in.
              </p>
            </div>
          </Column>
        </Container>
        {/* </Prose>

      <Prose as="section" maxWidth="5xl"> */}
        <p>
          Velit et dolor delectus enim. Nemo necessitatibus illo ratione facilis
          culpa. Culpa praesentium eligendi laudantium cumque et optio itaque.
          Ex assumenda aut minus voluptate.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in.
        </p>

        <Container bgColor="grey" maxWidth="5xl">
          <h2>Header inside container</h2>
          <p>
            Velit et dolor delectus enim. Nemo necessitatibus illo ratione
            facilis culpa. Culpa praesentium eligendi laudantium cumque et optio
            itaque. Ex assumenda aut minus voluptate.
          </p>
        </Container>
        <Container bgColor="grey" maxWidth="5xl">
          <p>
            Velit et dolor delectus enim. Nemo necessitatibus illo ratione
            facilis culpa. Culpa praesentium eligendi laudantium cumque et optio
            itaque. Ex assumenda aut minus voluptate.
          </p>
        </Container>
        <Container bgColor="grey" maxWidth="5xl">
          <p>
            Velit et dolor delectus enim. Nemo necessitatibus illo ratione
            facilis culpa. Culpa praesentium eligendi laudantium cumque et optio
            itaque. Ex assumenda aut minus voluptate.
          </p>
        </Container>

        <h2>Heading outside container</h2>
        <p>
          Velit et dolor delectus enim. Nemo necessitatibus illo ratione facilis
          culpa. Culpa praesentium eligendi laudantium cumque et optio itaque.
          Ex assumenda aut minus voluptate.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in.
        </p>

        <Column maxWidth="5xl" cols="2">
          <p>
            Velit et dolor delectus enim. Nemo necessitatibus illo ratione
            facilis culpa. Culpa praesentium eligendi laudantium cumque et optio
            itaque. Ex assumenda aut minus voluptate.
          </p>
          <p>
            Nobis voluptatem dolorum et eum doloremque cupiditate velit.
            Praesentium architecto a distinctio aut reprehenderit ducimus.
            Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
            dolores accusamus in.
          </p>
        </Column>

        <h2>Heading outside container</h2>
        <p>
          Velit et dolor delectus enim. Nemo necessitatibus illo ratione facilis
          culpa. Culpa praesentium eligendi laudantium cumque et optio itaque.
          Ex assumenda aut minus voluptate.
        </p>
        <p>
          Nobis voluptatem dolorum et eum doloremque cupiditate velit.
          Praesentium architecto a distinctio aut reprehenderit ducimus.
          Perferendis excepturi delectus nihil voluptatem non. Molestiae quas
          dolores accusamus in.
        </p>

        <Container bgColor="grey" maxWidth="5xl">
          <Column maxWidth="5xl" cols="2">
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
              Perferendis excepturi delectus nihil voluptatem non. Molestiae
              quas dolores accusamus in.
            </p>
          </Column>
          <Column maxWidth="5xl" cols="2">
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
              Perferendis excepturi delectus nihil voluptatem non. Molestiae
              quas dolores accusamus in.
            </p>
          </Column>
        </Container>
      </Prose>
    </Main>
  </>
);
