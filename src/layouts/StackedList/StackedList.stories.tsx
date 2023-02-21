import React from 'react';
import { Meta, Story } from '@storybook/react';
import { StackedList, StackedListProps } from './StackedList';

const content = {
  spacing: `p-6`,
  paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id augue id est iaculis auctor. Vestibulum lobortis hendrerit enim, sit amet viverra velit tincidunt a. Sed lobortis consectetur sapien a egestas. Ut vestibulum turpis non molestie aliquam. Quisque dictum iaculis tellus, vel vehicula diam lobortis non.`,
};

export default {
  title: 'Layouts/StackedList',
  component: StackedList,
  argTypes: {
    hasBorder: {
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    hasShadow: {
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
  <StackedList hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
    <p className={content.spacing}>{content.paragraph}</p>
  </StackedList>
);

// const WithBorderTemplate: Story<StackedListProps> = args => (
//   <StackedList hasBorder={args.hasBorder}>
//     <p className={content.spacing}>{content.paragraph}</p>
//   </StackedList>
// );

// const WithShadowTemplate: Story<StackedListProps> = args => (
//   <StackedList hasShadow={args.hasShadow}>
//     <p className={content.spacing}>{content.paragraph}</p>
//   </StackedList>
// );

// const ShadowAndBorderTemplate: Story<StackedListProps> = args => (
//   <StackedList hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
//     <p className={content.spacing}>{content.paragraph}</p>
//   </StackedList>
// );

// const WithTitleTemplate: Story<StackedListProps> = args => (
//   <StackedList hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
//     <StackedList.Title>StackedList Title</StackedList.Title>
//     <p className={content.spacing}>{content.paragraph}</p>
//   </StackedList>
// );

// const ConsecutiveTemplate: Story<StackedListProps> = args => (
//   <>
//     <StackedList hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
//       <StackedList.Title>StackedList Title</StackedList.Title>
//       <p className={content.spacing}>{content.paragraph}</p>
//     </StackedList>
//     <StackedList hasBorder={args.hasBorder} hasShadow={args.hasShadow}>
//       <StackedList.Title>StackedList Title</StackedList.Title>
//       <p className={content.spacing}>{content.paragraph}</p>
//     </StackedList>
//   </>
// );

export const Default = DefaultTemplate.bind({});
Default.args = {
  hasBorder: false,
  hasShadow: false,
};

// export const WithBorder = WithBorderTemplate.bind({});
// WithBorder.args = {
//   hasBorder: true,
//   hasShadow: false,
// };

// export const WithShadow = WithShadowTemplate.bind({});
// WithShadow.args = {
//   hasBorder: false,
//   hasShadow: true,
// };

// export const ShadowAndBorder = ShadowAndBorderTemplate.bind({});
// ShadowAndBorder.args = {
//   hasBorder: true,
//   hasShadow: true,
// };

// export const WithTitle = WithTitleTemplate.bind({});
// WithTitle.args = {
//   ...ShadowAndBorder.args,
// };

// export const Consecutive = ConsecutiveTemplate.bind({});
// Consecutive.args = {
//   ...ShadowAndBorder.args,
// };

Default.storyName = 'Default item';
// WithBorder.storyName = 'With border';
// WithShadow.storyName = 'With shadow';
// ShadowAndBorder.storyName = 'With border & shadow';
// WithTitle.storyName = 'With a title';
// Consecutive.storyName = 'Consecutive panels';
