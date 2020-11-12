import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { failPrescreeningPath, goalQuestionPath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'

const mapDispatchToProps = {
    update: (pass: boolean) => {
        return updateExerciseQuestionaire({
            passPrescreening: pass,
        })
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
                I have completed the pre-physical activity screening, such as <a href="https://www.acsm.org/docs/default-source/files-for-resource-library/par-q-acsm.pdf">Physical Activity Readiness Questionnaire for Everyone (PAR-Q+)</a>, and I have had proper set-up and a safe area to workout at home.
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    hisotry.push(goalQuestionPath);
                    // update(true);
                }}>Yes</Button>
                <Button onClick={() => {
                    hisotry.push(failPrescreeningPath);
                    // update(false);
                }}>No</Button>
            </CardActions>
        </Card>
    );
}; 

export default connector(PureExercisePrescreeningQuestion);

