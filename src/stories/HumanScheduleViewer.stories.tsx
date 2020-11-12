import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PureHumanScheduleViewer, Props } from '../components/HumanScheduleViewer';
import { Goal, Level, Time } from '../utils/Personalization';

export default {
    title: 'Example/HumanScheduleViewer',
    component: PureHumanScheduleViewer,
} as Meta;

const Template: Story<Props> = (args) => <PureHumanScheduleViewer {...args} />;

export const SimpleHumanScheduleViewer = Template.bind({});
SimpleHumanScheduleViewer.args = {
    goal: Goal.STRENGTH,
    level: Level.ADVANCED,
    time: Time.A_LOT,
};
