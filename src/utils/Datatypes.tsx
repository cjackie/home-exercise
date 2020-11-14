import { Level } from "./Personalization";

export enum MuscleGroupKey {
    UNSPECIFIED,
    CHEST_TRICEPS_SHOULDERS,
    LEG,
    BACK_BICEPS,
    CORE,
    AEROBIC,
}

export interface ScheduleTemplateRow {
    exercise: MuscleGroupKey;
    numOfSets: number;
}

export interface ScheduleTemplateTable {
    rows: Array<ScheduleTemplateRow>;
    circuits?: number;
    desc: string;
}

export interface Exercise {
    // must be unique.
    name: string;
    muscle: MuscleGroupKey;
    level: Level;
}