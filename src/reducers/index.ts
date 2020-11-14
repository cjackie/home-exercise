import { UpdateExerciseQuestionaire } from "../actions/actions"
import { UPDATE_EXERCISE_QUESTIONAIRE } from "../actions/actionTypes"
import { Level, Goal, Time } from "../utils/Personalization"

interface Questionaire {
    goal: Goal,
    level: Level,
    time: Time,
    passPrescreening?: boolean;
    agreeDisclaimer?: boolean;
    exitQuestionContent?: string;
}

export interface State {
    questionaire: Questionaire;
}

function questionaireReducer(state: Questionaire, action: any): Questionaire {
    if (action.type === UPDATE_EXERCISE_QUESTIONAIRE) {
        let updateExerciseQuestionaire: UpdateExerciseQuestionaire = action.payload;
        if (updateExerciseQuestionaire !== undefined) {
            return {
                ...state,
                ...updateExerciseQuestionaire,
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