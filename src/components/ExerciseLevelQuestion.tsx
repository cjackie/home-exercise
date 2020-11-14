import { Card, CardActions, CardContent, Typography, Button, Tooltip } from '@material-ui/core';
import { humanSechedulePath } from "../utils/RouterPaths";
import { useHistory } from 'react-router-dom';
import React from 'react';
import { connect, ConnectedProps } from 'react-redux'
import { updateExerciseQuestionaire } from '../actions/actions'
import { Level } from '../utils/Personalization';
import { State as StoreState } from '../reducers';

const mapStateToProps = (state: StoreState) => {
    return {
        level: state.questionaire.level,
    }
};

const mapDispatchToProps = {
    update: (level: Level) => {
        return updateExerciseQuestionaire({
            level,
        });
    },
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps,
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};
export const PureExercisePrescreeningQuestion: React.FC<Props> = ({ update, level }) => {
    const hisotry = useHistory();

    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    What is your exercise level?
                </Typography>
            </CardContent>
            <CardActions>
                <Tooltip title='I have never had any structured exercise regime in the past. I can barely perform 5-10 push-ups in a row.' placement="bottom">
                    <Button
                        onClick={() => {
                            hisotry.push(humanSechedulePath);
                            update(Level.BEGINNER);
                        }}
                        color={level === Level.BEGINNER ? "primary" : "default"}
                    >
                        Beginer
                </Button>
                </Tooltip>
                <Tooltip title="I have some past exercise experiences. I can perform push-ups with ease." placement="bottom">
                    <Button onClick={() => {
                        hisotry.push(humanSechedulePath);
                        update(Level.INTERMEDIATE);
                    }}
                        color={level === Level.INTERMEDIATE ? "primary" : "default"}
                    >
                        Intermediate
                </Button>
                </Tooltip>
                <Tooltip title="I have been quite physically active and I can do tens of push-ups without getting too much fatigue." placement="bottom">
                    <Button onClick={() => {
                        hisotry.push(humanSechedulePath);
                        update(Level.ADVANCED);
                    }}
                        color={level === Level.ADVANCED ? "primary" : "default"}
                    >
                        Advance
                </Button>
                </Tooltip>
            </CardActions>
        </Card>
    );
};

export default connector(PureExercisePrescreeningQuestion);