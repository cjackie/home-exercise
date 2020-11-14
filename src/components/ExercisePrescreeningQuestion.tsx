import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { exitQuestionPath, goalQuestionPath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'
import { State as StoreState } from '../reducers';

const mapStateToProps = (state: StoreState) => {
    return {
        passPrescreening: state.questionaire.passPrescreening,
    }
};

const mapDispatchToProps = {
    update: (pass: boolean, exitQuestionContent: string) => {
        return updateExerciseQuestionaire({
            passPrescreening: pass,
            exitQuestionContent,
        })
    },
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};

const PureExercisePrescreeningQuestion: React.FC<Props> = ({update, passPrescreening}) => {
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
                    update(true, "");
                    hisotry.push(goalQuestionPath);
                }}
                color={passPrescreening!== undefined && passPrescreening ? "primary" : "default"}
                >Yes</Button>
                <Button onClick={() => {
                    update(false, "Must pass the prescreening before using the program.");
                    hisotry.push(exitQuestionPath);
                }}
                color={passPrescreening!== undefined && !passPrescreening ? "primary" : "default"}
                >No</Button>
            </CardActions>
        </Card>
    );
}; 

export default connector(PureExercisePrescreeningQuestion);

