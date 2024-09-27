import React from 'react';
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger
} from '../accordion';

export default {
  component: Accordion,
  title: 'Data Display/Accordion',
  args: {
    type: 'single',
    itemDisabled: false
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple']
    },
    itemDisabled: {
      control: 'boolean'
    }
  }
};

const Template = (args) => (
  <Accordion
    {...args}
  >
    <AccordionItem value="item-1" disabled={args.itemDisabled}>
      <AccordionTrigger>Page settings</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Profile Information</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>
  </Accordion>
);
export const Default = Template.bind({});
