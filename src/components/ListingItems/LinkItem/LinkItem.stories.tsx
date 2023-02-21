import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LinkItem, LinkItemProps } from './LinkItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { StackedList } from '../../../layouts/StackedList';
import { LinkItemData as data } from './LinkItemData';

export default {
  title: 'Cards & Lists/Links/List Items',
  component: LinkItem,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof LinkItem>;

const DefaultTemplate: Story<LinkItemProps> = args => (
  <LinkItem as="div" link={args.link}>
    <LinkItem.Content>
      <LinkItem.Title as="h2" fontSize={args.fontSize} title={args.title} />
    </LinkItem.Content>
  </LinkItem>
);

const SingleItemListTemplate: Story<LinkItemProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      <LinkItem as="div" link={args.link}>
        <LinkItem.Content>
          <LinkItem.Title as="h3" fontSize={args.fontSize} title={args.title} />
        </LinkItem.Content>
      </LinkItem>
    </StackedList>
  </Column>
);

const MultiItemListTemplate: Story<LinkItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <StackedList header="Link listing" hasBorder hasShadow>
        {data.map(({ id, title, link }) => (
          <LinkItem key={id}>
            <LinkItem.Content>
              <LinkItem.Title title={title} link={link} />
            </LinkItem.Content>
          </LinkItem>
        ))}
      </StackedList>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'Job item title',
  link: 'https://carleton.ca',
};

export const SingleItemList = SingleItemListTemplate.bind({});
SingleItemList.args = {
  ...Default.args,
};

export const MultiItemList = MultiItemListTemplate.bind({});
MultiItemList.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemList.storyName = 'Single item list';
MultiItemList.storyName = 'Multi item list';
