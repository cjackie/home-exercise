import React from 'react';
import { render } from '@testing-library/react';
import ExercisePicker from './ExercisePicker';
import { Exercise, MuscleGroupKey } from './Datatypes';
import { Level } from './Personalization';

test('contructor', () => {
    const exercisePicker  = new ExercisePicker();
    expect(exercisePicker).not.toBeUndefined();
});

test('testPick', () => {
    const exercises: Array<Exercise> = [
        {
            name: "A",
            muscle: MuscleGroupKey.AEROBIC,
            level: Level.BEGINNER
        },
        {
            name: "B",
            muscle: MuscleGroupKey.AEROBIC,
            level: Level.BEGINNER
        },
        {
            name: "C",
            muscle: MuscleGroupKey.AEROBIC,
            level: Level.ADVANCED
        },
        {
            name: "C",
            muscle: MuscleGroupKey.CORE,
            level: Level.BEGINNER
        }
    ];
    const exercisePicker  = new ExercisePicker(exercises);
    const picks: Array<string> = [];;
    picks.push(exercisePicker.pick(MuscleGroupKey.AEROBIC, Level.BEGINNER).name);
    picks.push(exercisePicker.pick(MuscleGroupKey.AEROBIC, Level.BEGINNER).name);
    picks.push(exercisePicker.pick(MuscleGroupKey.AEROBIC, Level.BEGINNER).name);
    picks.push(exercisePicker.pick(MuscleGroupKey.AEROBIC, Level.BEGINNER).name);
    expect(picks.filter((name) => name === "A").length).toEqual(2);
});

