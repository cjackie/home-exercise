import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Answer, HomeExerciseQuestionnaire, Props as HomeExerciseQuestionnaireProps  } from './HomeExerciseQuestionnaire';

export default {
    title: 'Example/HomeExerciseQuestionnaire',
    component: HomeExerciseQuestionnaire,
} as Meta;

const Template: Story<HomeExerciseQuestionnaireProps> = (args) => <HomeExerciseQuestionnaire {...args} />;

export const SimpleHomeExerciseQuestionnaire = Template.bind({});
SimpleHomeExerciseQuestionnaire.args = {
    onFilledOut: (anwser: Answer) => {
        alert(JSON.stringify(anwser));
    },
    id: "question1",
};