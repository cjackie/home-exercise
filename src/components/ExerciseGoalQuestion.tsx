import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { timeQuestionPath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'
import { Goal } from '../utils/Personalization';

const mapDispatchToProps = {
    update: (goal: Goal) => {
        return updateExerciseQuestionaire({
            goal,
        });
    },
};

const connector = connect(
    null,
    mapDispatchToProps,
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};

export const PureExerciseGoalQuestion: React.FC<Props> = ({update}) => {
    const hisotry = useHistory();

    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    What is your goal?
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    hisotry.push(timeQuestionPath);
                    update(Goal.STRENGTH);
                }}>My goal is to build up muscle mass and improve my overall "strongness."
                </Button>
                <Button onClick={() => {
                    hisotry.push(timeQuestionPath);
                    update(Goal.ENDURANCE);
                }}>Toning Up: My goal is to shape up my body and improve my muscular endurance.
                </Button>
                <Button onClick={() => {
                    hisotry.push(timeQuestionPath);
                    update(Goal.AEROBIC);
                }}>Aerobic: My goal is to build up my heart and lung functioning and lose weight.
                </Button>
            </CardActions>
        </Card>
    );
}; 

export default connector(PureExerciseGoalQuestion);