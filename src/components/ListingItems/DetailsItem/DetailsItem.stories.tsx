import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DetailsItem, DetailsItemProps } from './DetailsItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { StackedList } from '../../../layouts/StackedList';
import { DetailsItemData as data } from './DetailsItemData';
import { MapPinIcon } from '@heroicons/react/24/solid';

export default {
  title: 'Cards & Lists/Details/List Item',
  component: DetailsItem,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof DetailsItem>;

const DefaultTemplate: Story<DetailsItemProps> = args => (
  <DetailsItem as="div">
    <DetailsItem.Icon icon="PlusIcon" />
    <DetailsItem.Content>
      <DetailsItem.Title title={args.title} />
      <DetailsItem.Description description={args.description} />
    </DetailsItem.Content>
  </DetailsItem>
);

const SingleItemListTemplate: Story<DetailsItemProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
      <DetailsItem as="div">
        <DetailsItem.Icon icon={args.icon} />
        <DetailsItem.Content>
          <DetailsItem.Title title={args.title} />
          <DetailsItem.Description description={args.description} />
        </DetailsItem.Content>
      </DetailsItem>
    </StackedList>
  </Column>
);

const MultiItemlistTemplate: Story<DetailsItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <StackedList header="Details listing" hasBorder hasShadow>
        {data.map(({ title, description, icon }) => (
          <DetailsItem key={title}>
            <DetailsItem.Icon icon={icon} />
            <DetailsItem.Content>
              <DetailsItem.Title title={title} />
              <DetailsItem.Description description={description} />
            </DetailsItem.Content>
          </DetailsItem>
        ))}
      </StackedList>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  title: '405 Robertson Hall',
  description: '1125 Colonel By Drive, Ottawa, ON, K1A 4A4',
  icon: MapPinIcon,
};

export const SingleItemList = SingleItemListTemplate.bind({});
SingleItemList.args = {
  ...Default.args,
};

export const MultiItemlist = MultiItemlistTemplate.bind({});
MultiItemlist.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemList.storyName = 'Single item list';
MultiItemlist.storyName = 'Multi item list';
