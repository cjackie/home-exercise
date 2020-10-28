import React from 'react';
import { HumanSchedule } from '../utils/Schedule';

import './HumanScheduleViewer.css';

export interface Props {
    humanSchedule: HumanSchedule;
}

export const HumanScheduleViewer: React.FC<Props> = ({ humanSchedule }) => {
    return (
        <table>
            <thead>
                <th>Time (minute:second)</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                <th>Sunday</th>
            </thead>

            {humanSchedule.rows.map((row) => {
                return (<tr>
                    <td>{`${row.startTime.getMinutes()}:${row.startTime.getSeconds()}`}</td>
                    <td>{row.monday}</td>
                    <td>{row.tuesday}</td>
                    <td>{row.wednesday}</td>
                    <td>{row.thursday}</td>
                    <td>{row.friday}</td>
                    <td>{row.saturday}</td>
                    <td>{row.sunday}</td>
                </tr>)
            })}
        </table>
    );
};


