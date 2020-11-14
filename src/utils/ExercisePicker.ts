
import {Exercise, MuscleGroupKey} from './Datatypes';
import {Level} from './Personalization';
import {EXERCISES, NOOP_EXERCISE} from './StaticData';

export default class {
    private exercisesMap: Map<Level, Map<MuscleGroupKey, Array<Exercise>>>;
    // Exercise.name -> count
    private exerciseCounter: Map<string, number>;

    constructor(exercises?: Array<Exercise>) {
        this.exercisesMap = new Map();
        exercises = exercises? exercises : EXERCISES;
        exercises.forEach(exercise => {
            if (!this.exercisesMap.has(exercise.level)) {
                this.exercisesMap.set(exercise.level, new Map());
            }
            let muscleToExerciseMap = this.exercisesMap.get(exercise.level)!;
            if (!muscleToExerciseMap.has(exercise.muscle)) {
                muscleToExerciseMap.set(exercise.muscle, [exercise]);
            } else {
                muscleToExerciseMap.get(exercise.muscle)!.push(exercise);
            }
        });
        this.exerciseCounter = new Map();
    }

    // Randomly pick a exercise. Returned exercises of a muscle group are distributed
    // evenly among all exercise for that muscle group. For example, say CORE has two exercises 
    // A and B. 4 calls of CORE will have two A returned and two B returned.
    pick(muscle: MuscleGroupKey, level: Level): Exercise {
        let exercises = this.exercisesMap.get(level)!.get(muscle);
        if (!exercises) {
            return NOOP_EXERCISE;  
        }
        // find out the min count of all exercises.
        let minCount = Infinity;
        exercises.forEach(exercise => {
            let count = this.exerciseCounter.get(exercise.name) || 0;
            minCount = count < minCount ? count : minCount;
        });
        
        // randomly pick an exercises among exercises wth minimum count.
        const exerciseWithMinCount: Array<Exercise> = exercises.filter(exercise => {
            let count = this.exerciseCounter.get(exercise.name) || 0;
            return count === minCount;
        });

        // update the count.
        const picked = exerciseWithMinCount[Math.floor(Math.random() * exerciseWithMinCount.length)];
        this.exerciseCounter.set(picked.name, (this.exerciseCounter.get(picked.name) || 0)+1);

        // return the exercise.
        return picked;
    }
}