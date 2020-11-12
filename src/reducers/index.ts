import { UpdateExerciseQuestionaire } from "../actions/actions"
import { UPDATE_EXERCISE_QUESTIONAIRE } from "../actions/actionTypes"
import { Level, Goal, Time } from "../utils/Personalization"

interface Questionaire {
    goal: Goal,
    level: Level,
    time: Time,
    passPrescreen?: Boolean;
}

export interface State {
    questionaire: Questionaire;
}

function questionaireReducer(state: Questionaire, action: any): Questionaire {
    if (action.type === UPDATE_EXERCISE_QUESTIONAIRE) {
        let updateExerciseQuestionaire: UpdateExerciseQuestionaire = action.payload;
        if (updateExerciseQuestionaire.goal !== undefined) {
            return {
                ...state,
                goal: updateExerciseQuestionaire.goal
            };

        } else if (updateExerciseQuestionaire.level !== undefined) {
            return {
                ...state,
                level: updateExerciseQuestionaire.level
            };
        } else if (updateExerciseQuestionaire.time !== undefined) {
            return {
                ...state,
                time: updateExerciseQuestionaire.time
            };

        } else if (updateExerciseQuestionaire.passPrescreening !== undefined) {
            return {
                ...state,
                passPrescreen: updateExerciseQuestionaire.passPrescreening
            };
        }
    }
    return state;
}

const initialState: State = {
    questionaire: {
        goal: Goal.UNSPECIFIED,
        level: Level.UNSPECIFIED,
        time: Time.UNSPECIFIED,
    }
}

export default function rootReducer(state = initialState, action: any) {
    return {
        ...state,
        questionaire: questionaireReducer(state.questionaire, action),
    }
}