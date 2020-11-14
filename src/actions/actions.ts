// redux/actions.js
import { Goal, Level, Time } from '../utils/Personalization'
import { UPDATE_EXERCISE_QUESTIONAIRE } from './actionTypes'

export interface UpdateExerciseQuestionaire {
  passPrescreening?: boolean;
  goal?: Goal;
  time?: Time;
  level?: Level;
  agreeDisclaimer?: boolean;
  exitQuestionContent?: string;
}

export const updateExerciseQuestionaire = (content: UpdateExerciseQuestionaire) => {
  return {
    type: UPDATE_EXERCISE_QUESTIONAIRE,
    payload: content
  };
}
