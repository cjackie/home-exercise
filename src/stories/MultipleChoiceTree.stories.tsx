import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MultipleChoiceTree, MultipleChoiceTreeProps } from './MultipleChoiceTree';

export default {
    title: 'Example/MutlipleChoiceTree',
    component: MultipleChoiceTree,
} as Meta;

const Template: Story<MultipleChoiceTreeProps> = (args) => <MultipleChoiceTree {...args} />;

export const SimpleMultipleChoiceTree = Template.bind({});
SimpleMultipleChoiceTree.args = {
    initialNode: { id: "1" },
    nodes: [
        {
            nodeId: { id: "1" },
            headerText: `I have completed the pre-PA 
            screening such as PAR-Q+ and I have had proper set-up and a safe area to workout at home.`,
            choices: [
                {
                    choiceId: "choice1",
                    choiceText: "Yes",
                    nextNodeId: {id: "2"},
                },
                {
                    choiceId: "choice2",
                    choiceText: "No",
                    nextNodeId: {id: "2"},
                }
            ]
        },
        {
            nodeId: { id: "2" },
            headerText: `What is your goal?`,
            choices: [
                {
                    choiceId: "choice3",
                    choiceText: "My goal is to improve strength",
                    nextNodeId: {id: "3"},
                },
                {
                    choiceId: "choice4",
                    choiceText: "My goal is to lose weight",
                    nextNodeId: {id: "3"},
                }
            ],
        },
        {
            nodeId: { id: "3" },
            headerText: "Do you have time",
            choices: [
                {
                    choiceId: "choice5",
                    choiceText: "I only have time to exercie 10-20 minutes per day",
                    nextNodeId: {id: "4"},
                },
                {
                    choiceId: "choice6",
                    choiceText: "I have time to exercie 60 minutes per day",
                    nextNodeId: {id: "4"},
                }
            ],
        },
        {
            nodeId: { id: "4" },
            headerText: "What is your level now?",
            choices: [
                {
                    choiceId: "choice6",
                    choiceText: "Level 1",
                    nextNodeId: {id: "5"},
                },
                {
                    choiceId: "choice6",
                    choiceText: "Level 2",
                    nextNodeId: {id: "5"},
                }
            ],
        },
        {
            nodeId: { id: "5" },
            headerText: "You completed the survey, thanks!",
            choices: [
            ],
        },
    ]
};
