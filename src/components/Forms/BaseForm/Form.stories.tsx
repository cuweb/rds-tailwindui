import { Meta, Story } from '@storybook/react';
import React from 'react';
import { CheckboxData } from '../Checkbox/CheckboxData';
import { RadioData } from '../Radio/RadioData';
import { SelectData } from '../Select/SelectData';
import { Form, FormProps } from './Form';
import { FormSchema } from './FormData';

export default {
  title: 'Components/Forms/Base Form',
  component: Form,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
} as Meta<typeof Form>;

// Form Submit method
const formOnSubmit = async (values: any) => {
  alert('Submitted');
  console.log(values);
};

const DefaultTemplate: Story<FormProps> = () => (
  <Form onSubmit={() => {}} schema={{}}>
    Add input components inside the form as children
  </Form>
);

const ExampleTemplate: Story<FormProps> = args => {
  return (
    <Form {...args} onSubmit={formOnSubmit} schema={FormSchema}>
      <Form.Input
        label="First Name"
        name="firstname"
        placeholder="Enter your first name"
        required
      />

      <Form.Input
        label="Last Name"
        name="lastname"
        placeholder="Enter your last name"
      />

      <Form.Input
        label="Address"
        name="address"
        placeholder="Enter your street name and house number, if applicable"
      />

      <Form.WYSIWYG
        label="Event Description"
        name="description"
        placeholder="write some Descriptoin..."
      />

      <Form.Input
        label="Address"
        name="address"
        placeholder="Enter your street name and house number, if applicable"
      />
      <Form.Select
        label="What is your favorite 90s sitcom?"
        name="favsitcom"
        options={SelectData}
      />

      <Form.Radio
        label="How many of these shows did you watch regularly?"
        name="regularviewer"
        options={RadioData}
      />
      <div className="max-w-xl">
        <Form.DateTimePicker label="Pick Start date and time" name="dateTime" />
      </div>
      <div className="max-w-3xl">
        <Form.PlacesAutoComplete name="location" />
      </div>

      <Form.Checkbox
        label="Who are your favourite 90s sitcom characters?"
        name="favcharacters"
        options={CheckboxData}
      />

      <Form.Submit title="Submit Your Answers" />
    </Form>
  );
};

export const Default = DefaultTemplate.bind({});
export const Example = ExampleTemplate.bind({});
