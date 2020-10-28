import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { HumanScheduleViewer, Props as  HumanScheduleViewerProps } from './HumanScheduleViewer';

export default {
    title: 'Example/HumanScheduleViewer',
    component: HumanScheduleViewer,
} as Meta;

const Template: Story<HumanScheduleViewerProps> = (args) => <HumanScheduleViewer {...args} />;

export const SimpleHumanScheduleViewer = Template.bind({});
SimpleHumanScheduleViewer.args = {
    humanSchedule: {
        rows: [{
            startTime: new Date(),
            monday: "monday entry1 entry1 entry1 monday entry1 entry1 entry1 monday entry1 entry1 entry1",
            wednesday: "wed entry1",
        },{
            startTime: new Date(),
            monday: "monday entry2 monday entry1 entry1 entry1",
            wednesday: "wed entry2",
        },{
            startTime: new Date(),
            monday: "monday entry3",
            wednesday: "wed entry3 monday entry1 entry1 entry1 monday entry1 entry1 entry1 monday entry1 entry1 entry1 monday entry1 entry1 entry1",
        }]
    }
};
