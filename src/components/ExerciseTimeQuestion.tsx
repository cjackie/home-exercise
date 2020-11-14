import { Card, CardActions, CardContent, Typography, Button, Tooltip } from '@material-ui/core';
import { levelQuestionPath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'
import { Time } from '../utils/Personalization';
import { State as StoreState } from '../reducers';

const mapStateToProps = (state: StoreState) => {
    return {
        time: state.questionaire.time,
    }
};

const mapDispatchToProps = {
    update: (time: Time) => {
        return updateExerciseQuestionaire({
            time
        });
    },
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};

const PureExercisePrescreeningQuestion: React.FC<Props> = ({ update, time }) => {
    const hisotry = useHistory();

    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    What is your time availability?
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="I can only exercise two to three days each week, less than half an hour each time." placement="bottom">
                    <Button
                        onClick={() => {
                            hisotry.push(levelQuestionPath);
                            update(Time.LITTLE);
                        }}
                        color={time === Time.LITTLE ? "primary" : "default"}
                    >
                        Little
                    </Button>
                </Tooltip>
                <Tooltip title="I have time to exercise three to four days each week, roughly half an hour to forty minutes each time." placement="bottom">
                    <Button onClick={() => {
                        hisotry.push(levelQuestionPath);
                        update(Time.SOME);
                    }}
                        color={time === Time.SOME ? "primary" : "default"}
                    >
                        Some
                    </Button>
                </Tooltip>
                <Tooltip title=" I want to exercise almost every day! That is five days a week, up to an hour each time." placement="bottom">
                    <Button
                        onClick={() => {
                            hisotry.push(levelQuestionPath);
                            update(Time.A_LOT);
                        }}
                        color={time === Time.A_LOT ? "primary" : "default"}
                    >
                        A lot
                    </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default connector(PureExercisePrescreeningQuestion);