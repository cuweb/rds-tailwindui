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

const DefaultTemplate: Story<MarketplaceItemProps> = (args) => (
  <MarketplaceItem as="div" link={args.link}>
    <MarketplaceItem.Image image={args.image} alt={args.alt} />
    <MarketplaceItem.Content>
      <MarketplaceItem.Title
        as="h2"
        fontSize={args.fontSize}
        title={args.title}
        link={args.link}
        cost={args.cost}
      />
      <MarketplaceItem.Details condition={args.condition} cost={args.cost} />
      <MarketplaceItem.Category category={args.category} />
    </MarketplaceItem.Content>
  </MarketplaceItem>
);

const SingleItemPanelTemplate: Story<MarketplaceItemProps> = (args) => (
  <Column maxWidth="3xl">
    <Panel hasBorder>
      <MarketplaceItem as="div" link={args.link}>
        <MarketplaceItem.Image image={args.image} alt={args.alt} />
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
          <MarketplaceItem.Category category={args.category} />
        </MarketplaceItem.Content>
      </MarketplaceItem>
    </Panel>
  </Column>
);

const StackedListPanelTemplate: Story<MarketplaceItemProps> = () => (
  <Container>
    <Column maxWidth="3xl">
      <Panel hasShadow>
        <StackedList hasDividers>
          {data.map(
            ({ id, title, link, image, alt, condition, cost, category }) => (
              <MarketplaceItem key={id}>
                <MarketplaceItem.Image image={image} alt={alt} />
                <MarketplaceItem.Content>
                  <MarketplaceItem.Title title={title} link={link} />
                  <MarketplaceItem.Details condition={condition} cost={cost} />
                  <MarketplaceItem.Category category={category} />
                </MarketplaceItem.Content>
              </MarketplaceItem>
            )
          )}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const StackedListPanelTitleTemplate: Story<MarketplaceItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <Panel.Title>Marketplace listing</Panel.Title>
        <StackedList hasDividers>
          {data.map(
            ({ id, title, link, image, alt, condition, cost, category }) => (
              <MarketplaceItem key={id}>
                <MarketplaceItem.Image image={image} alt={alt} />
                <MarketplaceItem.Content>
                  <MarketplaceItem.Title title={title} link={link} />
                  <MarketplaceItem.Details condition={condition} cost={cost} />
                  <MarketplaceItem.Category category={category} />
                </MarketplaceItem.Content>
              </MarketplaceItem>
            )
          )}
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
  category: 'Category',
};

export const SingleItemPanel = SingleItemPanelTemplate.bind({});
SingleItemPanel.args = {
  ...Default.args,
};

export const StackedListPanel = StackedListPanelTemplate.bind({});
StackedListPanel.args = {
  ...Default.args,
};

export const StackedListPanelTitle = StackedListPanelTitleTemplate.bind({});
StackedListPanelTitle.args = {
  ...Default.args,
};

Default.storyName = 'Default item';
SingleItemPanel.storyName = 'Single item in panel';
StackedListPanel.storyName = 'Stacked list w/shadow';
StackedListPanelTitle.storyName = 'Stacked list w/title';
