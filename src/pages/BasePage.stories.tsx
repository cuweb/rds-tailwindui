import React from 'react';
import { Meta } from '@storybook/react';
import { Column, Container, Main } from '../layouts';
import { TopNav, Banner, Prose } from '../components';

export default {
  title: 'Page Templates/Base Page',
  argTypes: {
    bgColor: {
      control: 'inline-radio',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta;

export const BasePage = () => (
  <>
    <TopNav title="Carleton University" />
    <Banner title="Basic Page Template" />

    <Main>
      <Prose as="section">
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

        <Container bgColor="grey">
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
        </Container>

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

        <Container bgColor="grey">
          <Column cols="1">
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

        <Container bgColor="grey">
          <Column cols="2">
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

        <Container bgColor="grey">
          <Column cols="3">
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
            <p>
              Velit et dolor delectus enim. Nemo necessitatibus illo ratione
              facilis culpa. Culpa praesentium eligendi laudantium cumque et
              optio itaque. Ex assumenda aut minus voluptate.
            </p>
          </Column>
        </Container>

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

        <Container bgColor="grey">
          <Column cols="4" maxWidth="7xl">
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
        <p>
          Officiis ratione praesentium expedita labore. Adipisci sequi excepturi
          dolor modi quas saepe ea. Assumenda rerum totam aut aliquid sed
          commodi ullam nobis. Repudiandae consequatur dolorum voluptas
          corporis. Omnis in impedit quo a quas.Porro omnis soluta doloremque.
          Et harum eveniet qui officiis hic qui et enim. Nam pariatur quae qui.
          Veritatis laborum qui tempora ea commodi voluptas nulla architecto.
          Laboriosam ratione et quam unde. Est inventore fuga vitae laboriosam.
          Aperiam dolores distinctio ut vel voluptatem ducimus. Voluptate est
          quo nemo nostrum similique error. Saepe ullam harum omnis possimus. Ut
          et quia repudiandae dolores veniam et. Non sit qui consectetur eum
          quia. Aliquam labore molestiae ut omnis. Culpa est est non libero
          voluptatum non commodi.
        </p>
        <p>
          Reiciendis omnis amet expedita quidem maxime neque officiis.
          Blanditiis animi laborum quos in vero. Consequatur expedita similique
          sed esse. Voluptas qui deserunt quas illo non modi ut aut.
        </p>
        <p>
          Id libero quia quia in fugit iure rerum. Omnis ut aut quae vel iure.
        </p>
        <p>
          Nesciunt perspiciatis deserunt itaque. Recusandae aliquam quis totam
          optio. Quae quo sit ut id. Quibusdam similique et rem suscipit.Sed
          consectetur assumenda expedita culpa sunt rerum. Quos velit commodi
          hic qui occaecati repellat. Est id in quo qui perferendis officia.
          Inventore neque cum tempora ipsa amet ratione repudiandae. Officia
          quos ratione quaerat ducimus ut accusantium vel delectus. Et dicta est
          ut doloribus nisi. Id provident consequatur nisi ut corporis placeat.
          Ab id sint voluptas laboriosam officiis rerum consequatur. Autem id
          sed minima sint minus quia sapiente. Occaecati corporis laudantium
          minus molestias. Velit alias commodi voluptas officiis et.
        </p>
        <p>
          Dolores omnis repudiandae commodi debitis corporis animi laborum.
          Dolorem distinctio et in rerum sed. Sunt sunt quidem sed sint ea
          exercitationem eaque. Nemo illum enim eligendi ipsum. Aliquam et alias
          maiores.
        </p>
        <p>
          Doloremque omnis architecto nemo voluptatem. Vero aut accusantium nemo
          delectus exercitationem non. Hic maxime magni reiciendis perspiciatis
          itaque aspernatur ducimus nostrum.
        </p>
        <p>
          Consequuntur delectus nisi eveniet quia. Quia veritatis beatae numquam
          illum numquam. Excepturi quasi et placeat pariatur id voluptas.Omnis
          ea odit sunt odio quae dolorem harum. Officiis veniam quia eos ipsum.
          Dicta aut nemo incidunt qui est reprehenderit. Eum veniam quia velit
          molestiae tempora aut sunt. Voluptas laudantium facere non qui ut.
          Necessitatibus distinctio saepe ut eum voluptatem. Sequi commodi rerum
          ut quas. Iure quo distinctio ut facilis eius molestiae. Eligendi
          expedita odit a commodi modi. Qui a placeat ad. Aperiam et vero quos
          ipsum exercitationem. Aut dolores amet ullam amet illo voluptatum.
          Sint rem aut officia quia occaecati minus beatae quia. Rerum ut eos
          numquam et qui. Eveniet error animi blanditiis quos qui. Eos aut
          pariatur odit quisquam. Est nesciunt commodi assumenda necessitatibus
          nisi.
        </p>
        <p>
          Excepturi ut ut tenetur sit praesentium dolor et fugiat. Voluptas aut
          est assumenda ipsam. A deserunt laborum vitae voluptas id modi
          incidunt pariatur.
        </p>
        <p>
          Voluptas alias provident aliquam. Voluptatem repellendus ut
          architecto. Nobis hic cumque occaecati. Repellat repellendus non
          facere accusantium.
        </p>
        <p>
          Est fuga consequatur eum voluptatem dolore. Ducimus iste sapiente ut
          eos. Est in aut temporibus. Corporis reprehenderit doloribus quod
          velit nulla consequuntur quasi.Totam fugit libero eos id dolor fugit.
          Molestiae ab reiciendis deleniti dicta praesentium ut. Deleniti soluta
          sapiente voluptatem consequatur ipsa aut necessitatibus itaque.
          Adipisci quia assumenda et fuga reprehenderit. Soluta perferendis quam
          laboriosam rerum ut ut. Dicta saepe veritatis rerum voluptatem. Dicta
          provident quos tenetur et quis sed aut error. Dolore totam aut
          voluptas et. Nemo optio tempora eum omnis magnam adipisci voluptatem
          inventore. Quis sint temporibus assumenda architecto est. Quis
          nesciunt commodi ut rem sit voluptas cupiditate. Et atque hic quod
          velit amet. Sed aut est eos culpa cumque nobis numquam.
        </p>
        <p>
          Eaque dolore eos necessitatibus cupiditate quae ipsa. Unde modi est ut
          sunt ducimus ut vel. Velit expedita minus nisi qui aspernatur. Fuga
          enim ut ut iure voluptatem iure nemo.
        </p>
        <p>
          Cum et ipsam veniam modi. Dolores non est harum earum esse enim. Qui
          fugit dolorem et consequatur repellat. Est nulla enim sunt eligendi.
        </p>
        <p>
          Qui temporibus eum ea in. Ullam labore sint autem nemo architecto
          omnis. Consequatur dolorem quo quos veniam alias. Alias nihil enim qui
          sit non.Nihil architecto doloribus voluptatem et. Et ex sed aut aut
          dolor nemo omnis earum. Sint labore modi et iusto itaque illo. Tempora
          porro iste et voluptatem quia saepe. Eum exercitationem et reiciendis
          debitis. Molestiae veniam perferendis quia minus sapiente fugiat. Et
          illum ullam totam non commodi. Eligendi natus minima assumenda et.
          Laborum qui recusandae dolores similique et dolores maxime. Eos et
          doloremque nesciunt vel. Rem iusto aut totam rem error fugit soluta.
          Dolor eum eos nam numquam est et.
        </p>
        <p>
          Aut laboriosam tempora libero nemo iste corporis aliquid. Adipisci
          sunt sit qui totam maxime repudiandae pariatur. Qui eveniet voluptas
          est adipisci nobis doloribus non labore.
        </p>
        <p>
          Animi laborum saepe dicta voluptas rerum. Est eum ad temporibus dolor
          consequatur eum voluptas. Temporibus nostrum quia vero voluptatem
          voluptatum amet animi.
        </p>
        <p>
          Sit esse aliquid reprehenderit placeat in cumque. Consectetur culpa
          sit id ex. Itaque dolor cumque distinctio nulla. Quod maiores
          voluptatem expedita at et sed.Voluptatem consequatur placeat cum amet
          odit dolor ipsum. Eveniet atque quis ullam ut eaque unde est.
          Cupiditate ea illum vel temporibus fugiat voluptas porro. Id
          consectetur ea itaque maiores recusandae velit sapiente consequatur.
          Natus consectetur qui fugit illum voluptate perferendis. Asperiores
          hic et autem quo laudantium fuga quo. Odit est omnis repellendus
          maxime distinctio quas. Ea nam hic unde fugiat. Sed tenetur animi cum
          sapiente sit repudiandae dolor. Voluptas voluptatem alias facilis
          porro. Porro laborum error voluptatem dolorum qui enim. Dolorum
          asperiores eveniet veniam voluptatibus porro et est.
        </p>
      </Prose>
    </Main>
  </>
);
