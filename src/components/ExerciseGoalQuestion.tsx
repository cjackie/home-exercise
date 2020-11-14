import { Card, CardActions, CardContent, Typography, Button, Tooltip } from '@material-ui/core';
import { timeQuestionPath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'
import { Goal } from '../utils/Personalization';
import { State as StoreState } from '../reducers';

const mapStateToProps = (state: StoreState) => {
    return {
        goal: state.questionaire.goal,
    }
};

const mapDispatchToProps = {
    update: (goal: Goal) => {
        return updateExerciseQuestionaire({
            goal,
        });
    },
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};

export const PureExerciseGoalQuestion: React.FC<Props> = ({ update, goal }) => {
    const hisotry = useHistory();

    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    What is your goal?
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title='My goal is to build up muscle mass and improve my overall "strongness".' placement="bottom">
                    <Button
                        onClick={() => {
                            hisotry.push(timeQuestionPath);
                            update(Goal.STRENGTH);
                        }}
                        color={goal === Goal.STRENGTH ? "primary" : "default"}
                    >
                        Strength
                </Button>
                </Tooltip>
                <Tooltip title="My goal is to shape up my body and improve my muscular endurance." placement="bottom">
                    <Button
                        onClick={() => {
                            hisotry.push(timeQuestionPath);
                            update(Goal.ENDURANCE);
                        }}
                        color={goal === Goal.ENDURANCE ? "primary" : "default"}
                    >
                        Toning Up
                        </Button>
                </Tooltip>
                <Tooltip title="My goal is to build up my heart and lung functioning and lose weight." placement="bottom">
                    <Button
                        onClick={() => {
                            hisotry.push(timeQuestionPath);
                            update(Goal.AEROBIC);
                        }}
                        color={goal === Goal.AEROBIC ? "primary" : "default"}
                    >
                        Aerobic
                </Button>
                </Tooltip>
            </CardActions >
        </Card >
    );
};

export default connector(PureExerciseGoalQuestion);