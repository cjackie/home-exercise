import React from 'react';
import './App.css';
import { goalQuestionPath, levelQuestionPath, timeQuestionPath, humanSechedulePath } from './utils/RouterPaths';
import {
  Switch,
  Route,
} from "react-router-dom";
import ExercisePrescreeningQuestion from './components/ExercisePrescreeningQuestion';
import ExerciseGoalQuestion from './components/ExerciseGoalQuestion';
import ExerciseLevelQuestion from './components/ExerciseLevelQuestion';
import ExerciseTimeQuestion from './components/ExerciseTimeQuestion';
import HumanScheduleViewer from './components/HumanScheduleViewer';

export const App: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ExercisePrescreeningQuestion />
      </Route>
      <Route path={goalQuestionPath}>
        <ExerciseGoalQuestion />
      </Route>
      <Route path={timeQuestionPath}>
        <ExerciseTimeQuestion />
      </Route>
      <Route path={levelQuestionPath}>
        <ExerciseLevelQuestion />
      </Route>
      <Route path={humanSechedulePath}>
        <HumanScheduleViewer />
      </Route>
    </Switch>
  );
};

export default App;
