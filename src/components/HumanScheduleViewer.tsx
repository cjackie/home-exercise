import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import { State as StoreState } from '../reducers';
import { connect, ConnectedProps } from 'react-redux'
import { generateHumanSchedule } from '../utils/Schedule'
import moment from 'moment';

const mapStateToProps = (state: StoreState) => {
    return {
        goal: state.questionaire.goal,
        time: state.questionaire.time,
        level: state.questionaire.level,
    }
};

const connector = connect(
    mapStateToProps
);

// The inferred type + customized props
export type Props = ConnectedProps<typeof connector> & {};

export const PureHumanScheduleViewer: React.FC<Props> = ({ goal, time, level }) => {
    const humanSchedule = generateHumanSchedule(level, time, goal);
    return (
        <TableContainer>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Time (minute:second)</TableCell>
                        <TableCell>Monday</TableCell>
                        <TableCell>Tuesday</TableCell>
                        <TableCell>Wednesday</TableCell>
                        <TableCell>Thursday</TableCell>
                        <TableCell>Friday</TableCell>
                        <TableCell>Saturday</TableCell>
                        <TableCell>Sunday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {humanSchedule.rows.map((row) => (
                        <TableRow>
                            <TableCell>{moment(row.startTime).format("mm:ss")}</TableCell>
                            <TableCell>{row.monday}</TableCell>
                            <TableCell>{row.tuesday}</TableCell>
                            <TableCell>{row.wednesday}</TableCell>
                            <TableCell>{row.thursday}</TableCell>
                            <TableCell>{row.friday}</TableCell>
                            <TableCell>{row.saturday}</TableCell>
                            <TableCell>{row.sunday}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default connector(PureHumanScheduleViewer);
