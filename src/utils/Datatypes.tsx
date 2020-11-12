
export enum MuscleGroupKey {
    UNSPECIFIED,
    CHEST_TRICEPS_SHOULDERS,
    LEG,
    BACK_BICEPS,
    CORE,
    AEROBIC,
}

export interface Exercise {
    id: string;
    name: string;
    muscle: MuscleGroupKey;
}