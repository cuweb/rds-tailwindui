import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MarketplaceItem, MarketplaceItemProps } from './MarketplaceItem';
import { Container } from '../../../layouts/Container';
import { Column } from '../../../layouts/Column';
import { StackedList } from '../../../layouts/StackedList';
import { MarketplaceItemData as data } from './MarketplaceItemData';

export default {
  title: 'Cards & Lists/Marketplace/List Item',
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

const SingleItemListTemplate: Story<MarketplaceItemProps> = args => (
  <Column maxWidth="5xl">
    <StackedList hasBorder>
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
    </StackedList>
  </Column>
);

const MultiItemListTemplate: Story<MarketplaceItemProps> = () => (
  <Container bgColor="grey">
    <Column maxWidth="5xl">
      <StackedList header="Marketplace listing" hasBorder hasShadow>
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
