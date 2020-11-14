import React from 'react';
import './App.css';
import { goalQuestionPath, levelQuestionPath, timeQuestionPath, humanSechedulePath, exitQuestionPath, prescreenQuestionPath } from './utils/RouterPaths';
import {
  Switch,
  Route,
} from "react-router-dom";
import ExercisePrescreeningQuestion from './components/ExercisePrescreeningQuestion';
import ExerciseGoalQuestion from './components/ExerciseGoalQuestion';
import ExerciseLevelQuestion from './components/ExerciseLevelQuestion';
import ExerciseTimeQuestion from './components/ExerciseTimeQuestion';
import HumanScheduleViewer from './components/HumanScheduleViewer';
import ExitQuestion from './components/ExitQuestion';
import Disclaimer from './components/Disclaimer';

export const App: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        <Disclaimer />
      </Route>
      <Route path={prescreenQuestionPath}>
        <ExercisePrescreeningQuestion />
      </Route>
      <Route path={goalQuestionPath}>
        <ExerciseGoalQuestion />
      </Route>
      <Route path={timeQuestionPath}>
        <ExerciseTimeQuestion />
      </Route>
      <Route path={humanSechedulePath}>
        <HumanScheduleViewer />
      </Route>
      <Route path={levelQuestionPath}>
        <ExerciseLevelQuestion />
      </Route>
      <Route path={exitQuestionPath}>
        <ExitQuestion />
      </Route>
    </Switch>
  );
};

export default App;
