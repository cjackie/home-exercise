import React from 'react';
import { State as StoreState } from '../reducers';
import { Card, CardContent, Typography } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux'

const mapStateToProps = (state: StoreState) => {
    return {
        exitQuestionContent: state.questionaire.exitQuestionContent,
    }
};

const connector = connect(
    mapStateToProps
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};

export const PureExitQuestion: React.FC<Props> = ({ exitQuestionContent }) => {
    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    {exitQuestionContent}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default connector(PureExitQuestion);
