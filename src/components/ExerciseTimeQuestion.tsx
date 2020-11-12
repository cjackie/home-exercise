import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { levelQuestionPath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'
import { Time } from '../utils/Personalization';

const mapDispatchToProps = {
    update: (time: Time) => {
        return updateExerciseQuestionaire({
            time
        });
    },
};

const connector = connect(
    null,
    mapDispatchToProps,
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};

const PureExercisePrescreeningQuestion: React.FC<Props> = ({update}) => {
    const hisotry = useHistory();

    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    What is your time availability?
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    hisotry.push(levelQuestionPath);
                    update(Time.LITTLE);
                }}>Little: I can only exercise two to three days each week, less than half an hour each time.</Button>
                <Button onClick={() => {
                    hisotry.push(levelQuestionPath);
                    update(Time.SOME);
                }}>Some: I have time to exercise three to four days each week, roughly half an hour to forty minutes each time.
                </Button>
                <Button onClick={() => {
                    hisotry.push(levelQuestionPath);
                    update(Time.A_LOT);
                }}>A lot: I want to exercise almost every day! That is five days a week, up to an hour each time.
                </Button>
            </CardActions>
        </Card>
    );
}; 

export default connector(PureExercisePrescreeningQuestion);