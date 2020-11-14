import {EXERCISES} from './StaticData';

test('makeSureNameIsUnique', () => {
    let namesSoFar: Set<string> = new Set();
    EXERCISES.forEach((exercise) => {
        expect(namesSoFar.has(exercise.name));
        namesSoFar.add(exercise.name);
    });
});