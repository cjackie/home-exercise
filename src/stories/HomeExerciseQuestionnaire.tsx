import React from 'react';
import { MultipleChoiceTree, MultipleChoiceTreeProps } from './MultipleChoiceTree';
import { deepclone } from './utils/deepclone';
import {Level, Goal, Time} from "../utils/Personalization";

export interface Answer {
    goal: Goal;
    time: Time;
    level: Level;
    passPrescreen: boolean;
}

export interface Props {
    onFilledOut: (answer: Answer) => void;
    id: string;
}

interface State {
    answer: Answer;
}

function buildMultipleChoiceTreeProps(onChoice: (choiceId: string) => void): MultipleChoiceTreeProps {
    let multipleChoiceTreeProps : MultipleChoiceTreeProps = {
        initialNode: { id: "1" },
        nodes: [
            {
                nodeId: { id: "1" },
                headerText: `I have completed the pre-PA 
                screening such as PAR-Q+ and I have had proper set-up and a safe area to workout at home.`,
                choices: [
                    {
                        choiceId: "1_yes",
                        choiceText: "Yes",
                        nextNodeId: {id: "2"},
                    },
                    {
                        choiceId: "1_no",
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
                        choiceId: "2_strength",
                        choiceText: "My goal is to build muscle and improve my strength.",
                        nextNodeId: {id: "3"},
                    },
                    {
                        choiceId: "2_endurance",
                        choiceText: "My goal is to tone my muscle shape up and lose weight.",
                        nextNodeId: {id: "3"},
                    },
                    {
                        choiceId: "3_aerobic",
                        choiceText: "My goal is to lose weight and improve my aerobic capacity.",
                        nextNodeId: {id: "3"},
                    }
                ],
            },
            {
                nodeId: { id: "3" },
                headerText: "Do you have time?",
                choices: [
                    {
                        choiceId: "3_little",
                        choiceText: "I only have time to exercie 10-20 minutes per day",
                        nextNodeId: {id: "4"},
                    },
                    {
                        choiceId: "3_some",
                        choiceText: "I have time to exercie 60 minutes per day",
                        nextNodeId: {id: "4"},
                    },
                    {
                        choiceId: "3_alot",
                        choiceText: "I plenty of time to exercise. I can exercise up to an hour each session and 4-5 days a week.",
                        nextNodeId: {id: "4"},
                    },
                ],
            },
            {
                nodeId: { id: "4" },
                headerText: "What is your level now?",
                choices: [
                    {
                        choiceId: "4_beginner",
                        choiceText: "I have never had any structured exercise regime in the past. I can barely perform 5-10 push-ups in a row.",
                        nextNodeId: {id: "5"},
                    },
                    {
                        choiceId: "4_intermediate",
                        choiceText: "I have some past exercise experiences. I can perform push-ups with ease.",
                        nextNodeId: {id: "5"},
                    },
                    {
                        choiceId: "4_advanced",
                        choiceText: "I have been quite physically active and I can do tens of push-ups without getting too much fatigue.",
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
    multipleChoiceTreeProps.nodes.forEach((node) => {
        node.choices.forEach((choice) => {
            choice.onClick = onChoice;
        });
    });
    return multipleChoiceTreeProps;
}


export class HomeExerciseQuestionnaire extends React.Component<Props, State> {
    state: State = {
        answer: {
            goal: Goal.UNSPECIFIED,
            time: Time.UNSPECIFIED,
            level: Level.UNSPECIFIED,
            passPrescreen: false,
        } 
    };

    shouldComponentUpdate(nextProps: Props) {
        return this.props.id !== nextProps.id;
    }

    onChoice(choiceId: string) {
        this.setState((prevState) => {
            const newState: State = deepclone(prevState);
            const tokens: Array<string> = choiceId.split("_");
            const nodeId = tokens[0];
            const answerId = tokens[1];
            if (nodeId === "1") {
                newState.answer.passPrescreen = answerId === "yes";
                if (!newState.answer.passPrescreen) {
                    this.props.onFilledOut(deepclone(newState.answer));
                }
            } else if (nodeId === "2") {
                switch (answerId) {
                    case "strength":
                        newState.answer.goal = Goal.STRENGTH;
                        break;
                    case "endurance":
                        newState.answer.goal = Goal.ENDURANCE;
                        break;
                    case "aerobic":
                        newState.answer.goal = Goal.AEROBIC;
                        break;
                }
            } else if (nodeId === "3") {
                switch (answerId) {
                    case "little":
                        newState.answer.time = Time.LITTLE;
                        break;
                    case "some":
                        newState.answer.time = Time.SOME;
                        break;
                    case "alot":
                        newState.answer.time = Time.A_LOT;
                        break;
                }
            } else if (nodeId === "4") {
                switch (answerId) {
                    case "beginner":
                        newState.answer.level = Level.BEGINNER;
                        break;
                    case "intermediate":
                        newState.answer.level = Level.INTERMEDIATE;
                        break;
                    case "advanced":
                        newState.answer.level = Level.ADVANCED;
                        break;
                }
            } 

            return newState;
        });
    }
    
    render() {
        const multipleChoiceTreeProps = buildMultipleChoiceTreeProps((choiceId) => this.onChoice(choiceId));
        return <MultipleChoiceTree initialNode={multipleChoiceTreeProps.initialNode} nodes={multipleChoiceTreeProps.nodes} key={this.props.id}>

        </MultipleChoiceTree>
    }
}
