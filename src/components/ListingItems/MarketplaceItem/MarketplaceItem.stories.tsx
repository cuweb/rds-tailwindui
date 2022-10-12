import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MarketplaceItem, MarketplaceItemProps } from './MarketplaceItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { Panel } from '../../../layouts/Panel';
import { StackedList } from '../../../layouts/StackedList';
import { MarketplaceItemData as data } from './MarketplaceItemData';

export default {
  title: 'Components/List Items/Marketplace',
  component: MarketplaceItem,
  argTypes: {
    fontSize: {
      control: 'inline-radio',
      options: ['base', 'lg', 'xl'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof MarketplaceItem>;

const DefaultTemplate: Story<MarketplaceItemProps> = args => (
  <MarketplaceItem as="div" link={args.link}>
    <MarketplaceItem.Image image={args.image} />
    <MarketplaceItem.Content>
      <MarketplaceItem.Title
        as="h2"
        fontSize={args.fontSize}
        title={args.title}
        link={args.link}
        cost={args.cost}
      />
      <MarketplaceItem.Details condition={args.condition} cost={args.cost} />
      <MarketplaceItem.Category />
    </MarketplaceItem.Content>
  </MarketplaceItem>
);

const SingleItemPanelTemplate: Story<MarketplaceItemProps> = args => (
  <Column maxWidth="3xl">
    <Panel hasBorder>
      <MarketplaceItem as="div" link={args.link}>
        <MarketplaceItem.Image image={args.image} />
        <MarketplaceItem.Content>
          <MarketplaceItem.Title
            as="h2"
            fontSize={args.fontSize}
            title={args.title}
            link={args.link}
            cost={args.cost}
          />
          <MarketplaceItem.Details
            condition={args.condition}
            cost={args.cost}
          />
          <MarketplaceItem.Category />
        </MarketplaceItem.Content>
      </MarketplaceItem>
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<MarketplaceItemProps> = () => (
  <Container bgColor="gray">
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>Marketplace listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(({ id, title, link, image, condition, cost }) => (
            <MarketplaceItem key={id}>
              <MarketplaceItem.Image image={image} />
              <MarketplaceItem.Content>
                <MarketplaceItem.Title title={title} link={link} />
                <MarketplaceItem.Details condition={condition} cost={cost} />
                <MarketplaceItem.Category />
              </MarketplaceItem.Content>
            </MarketplaceItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  fontSize: 'base',
  title: 'Marketplace item title',
  link: 'https://carleton.ca',
  cost: '$100.00',
  condition: 'Like New',
  image: 'https://source.unsplash.com/random/400x300',
};

export const SingleItemPanel = SingleItemPanelTemplate.bind({});
SingleItemPanel.args = {
  ...Default.args,
};

export const StackedListPanel = StackedListPanelTemplate.bind({});
StackedListPanel.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemPanel.storyName = 'Single item in panel';
StackedListPanel.storyName = 'In a stacked list';
