import { deepclone } from '../stories/utils/deepclone';
import { Goal, Time, Level } from './Personalization'

enum MuscleGroupKey {
    UNSPECIFIED,
    CHEST_TRICEPS_SHOULDERS,
    LEG,
    BACK_BICEPS,
    CORE,
    AEROBIC,
}

interface ScheduleTemplateRow {
    exercise: MuscleGroupKey;
    numOfSets: number;
}

interface ScheduleTemplateTable {
    rows: Array<ScheduleTemplateRow>;
    circuits?: number;
    desc: string;
}

function computeTotalNumOfSets(table: ScheduleTemplateTable): number {
    let n = 0;
    table.rows.forEach((row) => {
        n += row.numOfSets;
    });
    return n * (table.circuits || 1);
}

interface ScheduleTemplate {
    day1?: ScheduleTemplateTable;
    day2?: ScheduleTemplateTable;
    day3?: ScheduleTemplateTable;
    day4?: ScheduleTemplateTable;
    day5?: ScheduleTemplateTable;
    day6?: ScheduleTemplateTable;
    day7?: ScheduleTemplateTable;
}

function generateScheduleTemplate(goal: Goal, time: Time): ScheduleTemplate {
    const isStrength: boolean = goal == Goal.ENDURANCE || goal == Goal.STRENGTH;
    const isAerobic: boolean = goal == Goal.AEROBIC;
    const template: ScheduleTemplate = {};
    if (time === Time.LITTLE && isStrength) {
        const hybridDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.LEG,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.BACK_BICEPS,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.CORE,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
            ],
            desc: "Hydrid Day",
        }
        template.day1 = deepclone(hybridDay);
        template.day3 = deepclone(hybridDay);
        template.day5 = deepclone(hybridDay);
    } else if (time === Time.LITTLE && isAerobic) {
        const hybridDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
            ],
            desc: "Hydrid Day",
        }
        const hybridDay2: ScheduleTemplateTable = deepclone(hybridDay);
        hybridDay2.rows[0].exercise = MuscleGroupKey.LEG;

        const hybridDay3: ScheduleTemplateTable = deepclone(hybridDay);
        hybridDay3.rows[0].exercise = MuscleGroupKey.BACK_BICEPS;

        template.day1 = deepclone(hybridDay);
        template.day3 = deepclone(hybridDay2);
        template.day5 = deepclone(hybridDay3);
    } else if (time === Time.SOME) {
        const resistanceDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.LEG,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.BACK_BICEPS,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.CORE,
                    numOfSets: 1,
                },
            ],
            desc: "Resistance Day",
        }
        const aerobicDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
            ],
            circuits: 2,
            desc: "Resistance Day",
        }
        const hybridDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
                    numOfSets: 2,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.LEG,
                    numOfSets: 2,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.BACK_BICEPS,
                    numOfSets: 2,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.CORE,
                    numOfSets: 1,
                },
            ],
            circuits: 2,
            desc: "Resistance Day",
        }
        if (isStrength) {
            template.day1 = deepclone(resistanceDay);
            template.day2 = deepclone(aerobicDay);
            template.day4 = deepclone(resistanceDay);
            template.day5 = deepclone(aerobicDay);
        } else if (isAerobic) {
            template.day1 = deepclone(aerobicDay);
            template.day2 = deepclone(aerobicDay);
            template.day4 = deepclone(resistanceDay);
            template.day4 = deepclone(hybridDay);
        }
    } else if (time === Time.A_LOT) {
        const upperBodyDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.BACK_BICEPS,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.BACK_BICEPS,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
                    numOfSets: 3,
                },
            ],
            desc: "Upper Body Day",
        }
        const lowerBodyDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.LEG,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.LEG,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.LEG,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.CORE,
                    numOfSets: 3,
                },
                {
                    exercise: MuscleGroupKey.CORE,
                    numOfSets: 3,
                },
            ],
            desc: "Lower Body Day",
        }
        const aerobicDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
            ],
            circuits: 3,
            desc: "Aerobic Day",
        }
        const hybridDay: ScheduleTemplateTable = {
            rows: [
                {
                    exercise: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.LEG,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.AEROBIC,
                    numOfSets: 1,
                },
                {
                    exercise: MuscleGroupKey.BACK_BICEPS,
                    numOfSets: 1,
                },
            ],
            circuits: 3,
            desc: "Resistance Day",
        }
        if (isStrength) {
            template.day1 = deepclone(upperBodyDay);
            template.day2 = deepclone(lowerBodyDay);
            template.day4 = deepclone(aerobicDay);
            template.day5 = deepclone(aerobicDay);
            template.day6 = deepclone(hybridDay);
        } else if (isAerobic) {
            template.day1 = deepclone(upperBodyDay);
            template.day2 = deepclone(lowerBodyDay);
            template.day4 = deepclone(aerobicDay);
            template.day5 = deepclone(aerobicDay);
            template.day6 = deepclone(aerobicDay);
        }
    }
    if (!template) {
        throw new Error("no template!");
    }

    return template;
}

const secondsPerSet: Map<Level, number> = new Map();
secondsPerSet.set(Level.BEGINNER, 45);
secondsPerSet.set(Level.INTERMEDIATE, 1 * 60);
secondsPerSet.set(Level.ADVANCED, 1.25 * 60);

const secondsPerRest: Map<Level, number> = new Map();
secondsPerRest.set(Level.BEGINNER, 1.25 * 60);
secondsPerRest.set(Level.INTERMEDIATE, 1 * 60);
secondsPerRest.set(Level.ADVANCED, 45);

const repsPerSet: Map<Goal, number> = new Map();
repsPerSet.set(Goal.STRENGTH, 10);
repsPerSet.set(Goal.ENDURANCE, 17);
repsPerSet.set(Goal.AEROBIC, 14);

interface Exercise {
    name: string;
    muscle: MuscleGroupKey;
}

const exercises: Array<Exercise> = [
    {
        name: "Wall Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
    },
    {
        name: "Leg Bent Floor Dips",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
    },
    {
        name: "Push-ups",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
    },
    {
        name: "Chair Dips",
        muscle: MuscleGroupKey.CHEST_TRICEPS_SHOULDERS,
    },
    {
        name: "Towel Rows",
        muscle: MuscleGroupKey.BACK_BICEPS,
    },
    {
        name: "Bentover Arm raises",
        muscle: MuscleGroupKey.BACK_BICEPS,
    },
    {
        name: "Doorframe Raw",
        muscle: MuscleGroupKey.BACK_BICEPS,
    },
    {
        name: "Towel Curls",
        muscle: MuscleGroupKey.BACK_BICEPS,
    },
    {
        name: "Chair Squats",
        muscle: MuscleGroupKey.LEG,
    },
    {
        name: "Calf Raise",
        muscle: MuscleGroupKey.LEG,
    },
    {
        name: "Lunges",
        muscle: MuscleGroupKey.LEG,
    },
    {
        name: "Squats",
        muscle: MuscleGroupKey.LEG,
    },
    {
        name: "Curl-ups",
        muscle: MuscleGroupKey.CORE,
    },
    {
        name: "Sit-ups",
        muscle: MuscleGroupKey.CORE,
    },
    {
        name: "Plank holds",
        muscle: MuscleGroupKey.CORE,
    },
    {
        name: "Jump",
        muscle: MuscleGroupKey.AEROBIC,
    },
    {
        name: "Run",
        muscle: MuscleGroupKey.AEROBIC,
    },
    {
        name: "Walk",
        muscle: MuscleGroupKey.AEROBIC,
    },
]

export interface HumanScheduleRow {
    // Only hour, minute, seconds are valid.
    startTime: Date;
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
}

// U.S. High school shedule format.
export interface HumanSchedule {
    rows: Array<HumanScheduleRow>;
}

// Get muscle group key at current set for the day.
function getMuscleKey(scheduleTemplateTable: ScheduleTemplateTable, setCounter: number): MuscleGroupKey {
    const totalNumOfSets = computeTotalNumOfSets(scheduleTemplateTable);
    const index = setCounter % totalNumOfSets;
    // Find the index.
    let accumlativeNumOfSets: number = 0;
    for (let i = 0; i < scheduleTemplateTable.rows.length; ++i) {
        const row = scheduleTemplateTable.rows[i];
        if (index - accumlativeNumOfSets < row.numOfSets) {
            return row.exercise;
        }
    }
    return MuscleGroupKey.UNSPECIFIED;
}

function getExercise(exercises: Array<Exercise>, muscle: MuscleGroupKey, curMuscleCounter: number): Exercise {
    exercises.filter(exercise => {
        return muscle === exercise.muscle;
    });
    return exercises[curMuscleCounter % exercises.length];
}

export function generateHumanSchedule(level: Level, time: Time, goal: Goal): HumanSchedule {
    const setTime: number = secondsPerSet.get(level)!;
    const restTime: number = secondsPerSet.get(level)!;
    const reps: number = repsPerSet.get(goal)!;

    const scheduleTemplate: ScheduleTemplate = generateScheduleTemplate(goal, time);
    // Get the max number of sets
    let maxNumOfSets: number = 0
    if (scheduleTemplate.day1) {
        const numOfSets: number = computeTotalNumOfSets(scheduleTemplate.day1);
        maxNumOfSets = numOfSets > maxNumOfSets ? numOfSets : maxNumOfSets;
    }
    if (scheduleTemplate.day2) {
        const numOfSets: number = computeTotalNumOfSets(scheduleTemplate.day2);
        maxNumOfSets = numOfSets > maxNumOfSets ? numOfSets : maxNumOfSets;
    }
    if (scheduleTemplate.day3) {
        const numOfSets: number = computeTotalNumOfSets(scheduleTemplate.day3);
        maxNumOfSets = numOfSets > maxNumOfSets ? numOfSets : maxNumOfSets;
    }
    if (scheduleTemplate.day4) {
        const numOfSets: number = computeTotalNumOfSets(scheduleTemplate.day4);
        maxNumOfSets = numOfSets > maxNumOfSets ? numOfSets : maxNumOfSets;
    }
    if (scheduleTemplate.day5) {
        const numOfSets: number = computeTotalNumOfSets(scheduleTemplate.day5);
        maxNumOfSets = numOfSets > maxNumOfSets ? numOfSets : maxNumOfSets;
    }
    if (scheduleTemplate.day6) {
        const numOfSets: number = computeTotalNumOfSets(scheduleTemplate.day6);
        maxNumOfSets = numOfSets > maxNumOfSets ? numOfSets : maxNumOfSets;
    }
    if (scheduleTemplate.day7) {
        const numOfSets: number = computeTotalNumOfSets(scheduleTemplate.day7);
        maxNumOfSets = numOfSets > maxNumOfSets ? numOfSets : maxNumOfSets;
    }

    const initialTime: Date = new Date();
    initialTime.setHours(9, 0, 0);
    const humanSchedule: HumanSchedule = { rows: [] };
    const muscleCounter: Map<MuscleGroupKey, number> = new Map();
    for (let setCounter = 0; setCounter < maxNumOfSets; ++setCounter) {
        const curTime: Date = new Date();
        curTime.setUTCSeconds(initialTime.getUTCSeconds() + (setTime + restTime) * setCounter);
        const exerciseRow: HumanScheduleRow = {
            startTime: curTime,
        };
        // Rest time
        const restAt: Date = new Date();
        restAt.setUTCSeconds(curTime.getUTCSeconds() + restTime);
        const restRow: HumanScheduleRow = {
            startTime: restAt,
        }

        if (scheduleTemplate.day1) {
            // Get muscle group key at current set for the day.
            const muscle: MuscleGroupKey = getMuscleKey(scheduleTemplate.day1, setCounter);
            // Get execise
            const curMuscleCounter = muscleCounter.get(muscle) || 0;
            const exercise: Exercise = getExercise(exercises, muscle, curMuscleCounter);
            muscleCounter.set(muscle, curMuscleCounter + 1);
            exerciseRow.monday = `${reps} reps of ${exercise.name}`
            restRow.monday = `Rest`;
        } 
        
        if (scheduleTemplate.day2) {
            // Get muscle group key at current set for the day.
            const muscle: MuscleGroupKey = getMuscleKey(scheduleTemplate.day2, setCounter);
            // Get execise
            const curMuscleCounter = muscleCounter.get(muscle) || 0;
            const exercise: Exercise = getExercise(exercises, muscle, curMuscleCounter);
            muscleCounter.set(muscle, curMuscleCounter + 1);
            exerciseRow.tuesday = `${reps} reps of ${exercise.name}`
            restRow.tuesday = `Rest`;
        } 
        
        if (scheduleTemplate.day3) {
            // Get muscle group key at current set for the day.
            const muscle: MuscleGroupKey = getMuscleKey(scheduleTemplate.day3, setCounter);
            // Get execise
            const curMuscleCounter = muscleCounter.get(muscle) || 0;
            const exercise: Exercise = getExercise(exercises, muscle, curMuscleCounter);
            muscleCounter.set(muscle, curMuscleCounter + 1);
            exerciseRow.wednesday = `${reps} reps of ${exercise.name}`
            restRow.wednesday = `Rest`;
        }
        
        if (scheduleTemplate.day4) {
            // Get muscle group key at current set for the day.
            const muscle: MuscleGroupKey = getMuscleKey(scheduleTemplate.day4, setCounter);
            // Get execise
            const curMuscleCounter = muscleCounter.get(muscle) || 0;
            const exercise: Exercise = getExercise(exercises, muscle, curMuscleCounter);
            muscleCounter.set(muscle, curMuscleCounter + 1);
            exerciseRow.thursday = `${reps} reps of ${exercise.name}`
            restRow.thursday = `Rest`;
        }
        
        if (scheduleTemplate.day5) {
            // Get muscle group key at current set for the day.
            const muscle: MuscleGroupKey = getMuscleKey(scheduleTemplate.day5, setCounter);
            // Get execise
            const curMuscleCounter = muscleCounter.get(muscle) || 0;
            const exercise: Exercise = getExercise(exercises, muscle, curMuscleCounter);
            muscleCounter.set(muscle, curMuscleCounter + 1);
            exerciseRow.friday = `${reps} reps of ${exercise.name}`
            restRow.friday = `Rest`;
        }
        
        if (scheduleTemplate.day6) {
            // Get muscle group key at current set for the day.
            const muscle: MuscleGroupKey = getMuscleKey(scheduleTemplate.day6, setCounter);
            // Get execise
            const curMuscleCounter = muscleCounter.get(muscle) || 0;
            const exercise: Exercise = getExercise(exercises, muscle, curMuscleCounter);
            muscleCounter.set(muscle, curMuscleCounter + 1);
            exerciseRow.saturday = `${reps} reps of ${exercise.name}`
            restRow.saturday = `Rest`;
        }
        
        if (scheduleTemplate.day7) {
            // Get muscle group key at current set for the day.
            const muscle: MuscleGroupKey = getMuscleKey(scheduleTemplate.day7, setCounter);
            // Get execise
            const curMuscleCounter = muscleCounter.get(muscle) || 0;
            const exercise: Exercise = getExercise(exercises, muscle, curMuscleCounter);
            muscleCounter.set(muscle, curMuscleCounter + 1);
            exerciseRow.sunday = `${reps} reps of ${exercise.name}`
            restRow.sunday = `Rest`;
        }
        
        humanSchedule.rows.push(exerciseRow);
        humanSchedule.rows.push(restRow);
    }

    return humanSchedule;
}