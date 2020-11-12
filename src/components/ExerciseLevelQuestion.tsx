import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { humanSechedulePath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'
import { Level } from '../utils/Personalization';

const mapDispatchToProps = {
    update: (level: Level) => {
        return updateExerciseQuestionaire({
            level,
        });
    },
};

const connector = connect(
    null,
    mapDispatchToProps,
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};
export const PureExercisePrescreeningQuestion: React.FC<Props> = ({update}) => {
    const hisotry = useHistory();

    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    What is your exercise level?
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    hisotry.push(humanSechedulePath);
                    update(Level.BEGINNER);
                }}>
                    I have never had any structured exercise regime in the past. I can barely perform 5-10 push-ups in a row.
                </Button>
                <Button onClick={() => {
                    hisotry.push(humanSechedulePath);
                    update(Level.INTERMEDIATE);
                }}>I have some past exercise experiences. I can perform push-ups with ease.
                </Button>
                <Button onClick={() => {
                    hisotry.push(humanSechedulePath);
                    update(Level.ADVANCED);
                }}>I have been quite physically active and I can do tens of push-ups without getting too much fatigue.
                </Button>
            </CardActions>
        </Card>
    );
}; 

export default connector(PureExercisePrescreeningQuestion);