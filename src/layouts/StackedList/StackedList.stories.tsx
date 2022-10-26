import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StackedList, StackedListProps } from './StackedList';
import { Container } from '../Container';
import { Column } from '../Column';
import { Panel } from '../Panel';
import { FeedItem } from '../../components';
import { FeedItemData as data } from '../../components/ListingItems/FeedItem/FeedItemData';

const styles = {
  spacing: `p-5`,
};

export default {
  title: 'Layouts/Stacked List',
  component: StackedList,
  argTypes: {
    dividers: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof StackedList>;

const DefaultTemplate: Story<StackedListProps> = args => (
  <StackedList hasDividers={args.hasDividers}>
    <li className={`${styles.spacing}`}>List Item</li>
    <li className={`${styles.spacing}`}>List Item</li>
    <li className={`${styles.spacing}`}>List Item</li>
  </StackedList>
);

const WithDividersTemplate: Story<StackedListProps> = args => (
  <StackedList hasDividers={args.hasDividers}>
    <li className={`${styles.spacing}`}>List Item</li>
    <li className={`${styles.spacing}`}>List Item</li>
    <li className={`${styles.spacing}`}>List Item</li>
  </StackedList>
);

const PanelAndDividersTemplate: Story<StackedListProps> = args => (
  <Container bgColor="gray">
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <StackedList hasDividers={args.hasDividers}>
          <li className={`${styles.spacing}`}>List Item</li>
          <li className={`${styles.spacing}`}>List Item</li>
          <li className={`${styles.spacing}`}>List Item</li>
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

const WithFeedItemTemplate: Story<StackedListProps> = args => (
  <Container bgColor="gray">
    <Column maxWidth="3xl">
      <Panel hasBorder hasShadow>
        <StackedList hasDividers={args.hasDividers}>
          {data.map(({ id, title, link, date, excerpt, category }) => (
            <FeedItem key={id}>
              <FeedItem.Content>
                <FeedItem.Title title={title} link={link} />
                <FeedItem.Date date={date} />
                <FeedItem.Excerpt excerpt={excerpt} />
                <FeedItem.Category category={category} />
              </FeedItem.Content>
            </FeedItem>
          ))}
        </StackedList>
      </Panel>
    </Column>
  </Container>
);

export const Default = DefaultTemplate.bind({});
Default.args = {
  hasDividers: false,
};

export const WithDividers = WithDividersTemplate.bind({});
WithDividers.args = {
  hasDividers: true,
};

export const PanelAndDividers = PanelAndDividersTemplate.bind({});
PanelAndDividers.args = {
  ...WithDividers.args,
};

export const WithFeedItem = WithFeedItemTemplate.bind({});
WithFeedItem.args = {
  ...WithDividers.args,
};

Default.storyName = 'Default item';
WithDividers.storyName = 'With item dviders';
PanelAndDividers.storyName = 'Panel with dividers';
WithFeedItem.storyName = 'List item component';
