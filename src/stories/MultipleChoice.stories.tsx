import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MultipleChoice, MultipleChoiceProps } from './MutlipleChoice';

export default {
    title: 'Example/MutlipleChoice',
    component: MultipleChoice,
} as Meta;

const Template: Story<MultipleChoiceProps> = (args) => <MultipleChoice {...args} />;

export const SimpleMultipleChoice = Template.bind({});
SimpleMultipleChoice.args = {
    headerText: "Header Text",
    choices: [{ choiceId: "id", text: "text", "onClick": () => { } }]
};
