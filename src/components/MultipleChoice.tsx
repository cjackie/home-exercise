import { Card, CardActions, CardContent, Typography, Button } from '@material-ui/core';
import React from 'react';


export interface Choice {
    text: string; 
    onClick: () => void;
};

export interface MultipleChoiceProps {
    headerText: string;
    choices: Array<Choice>;
};

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({ headerText, choices }) => {
    return (
        <Card>
            <CardContent>
                <Typography component="h2">
                    {headerText}
                </Typography>
            </CardContent>
            <CardActions>
                {choices.map(choice => <Button key={choice.text} onClick={() => choice.onClick()} color="primary">{choice.text}</Button>)}
            </CardActions>
        </Card>
    );
};


