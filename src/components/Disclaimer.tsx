import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import { prescreenQuestionPath, exitQuestionPath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'
import { State as StoreState } from '../reducers';

const mapStateToProps = (state: StoreState) => {
    return {
        agreeDisclaimer: state.questionaire.agreeDisclaimer,
    }
};

const mapDispatchToProps = {
    update: (agreeDisclaimer: boolean, exitQuestionContent: string) => {
        return updateExerciseQuestionaire({
            agreeDisclaimer,
            exitQuestionContent,
        });
    },
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};
export const PureDisclaimer: React.FC<Props> = ({ update, agreeDisclaimer }) => {
    const hisotry = useHistory();

    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    Disclaimer/Disclosure
                </Typography>

                <Typography component="h4">
                    This program generator is designed based on the article entitled “name of the article.” The contents shown in this application are solely based on the personal opinions and ideas of the developers. This application is not-for-profit. There is no conflict of interest between the developers of this application. Users who intend to use this application should always consult his/her physicians or other healthcare providers before starting any exercise program, if necessary. Users understand that there is a risk of injury associated with participating and using the exercise programs generated by this application. Users assume full responsibility for any injuries, losses, and damages that he/she might incur while exercising or using the exercise programs generated by this application. Users waive all claims against the developers of this application for any and all injuries, claims, or damages that he/she might incur.
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    onClick={() => {
                    hisotry.push(prescreenQuestionPath);
                    update(true, "");
                }}
                color={agreeDisclaimer!== undefined && agreeDisclaimer ? "primary" : "default"}
                >
                    I have read and understood the above statements by the developers.
                </Button>
                <Button 
                onClick={() => {
                    hisotry.push(exitQuestionPath);
                    update(false, "Must agree the disclaimer before using the problem.");
                }}
                color={agreeDisclaimer!== undefined && !agreeDisclaimer ? "primary" : "default"}
                >
                    I have not read nor understood the above statements by the developers.
                </Button>
            </CardActions>
        </Card>
    );
};

export default connector(PureDisclaimer);