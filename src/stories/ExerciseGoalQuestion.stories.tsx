import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PureExerciseGoalQuestion, Props } from '../components/ExerciseGoalQuestion';
import { Goal } from '../utils/Personalization';
import { updateExerciseQuestionaire } from '../actions/actions';

export default {
    title: 'Example/PureExerciseGoalQuestion',
    component: PureExerciseGoalQuestion,
} as Meta;

const Template: Story<Props> = (args) => <PureExerciseGoalQuestion {...args} />;

export const SimpleExerciseGoalQuestion = Template.bind({});
SimpleExerciseGoalQuestion.args = {
    update: (goal: Goal) => { return updateExerciseQuestionaire({goal: Goal.UNSPECIFIED}); }
};
