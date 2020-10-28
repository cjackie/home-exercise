import React from 'react';
import './App.css';
import { HomeExerciseQuestionnaire, Answer } from './stories/HomeExerciseQuestionnaire';
import { generateHumanSchedule } from './utils/Schedule';
import { HumanScheduleViewer } from './stories/HumanScheduleViewer';


interface Props { }
interface State {
  anwser?: Answer;
}

export class App extends React.Component<Props, State> {
  state: State = {};

  onAnswer(anwser: Answer) {
    this.setState(prevState => {
      return { anwser: anwser };
    });
  }

  render() {
    let content = <div></div>;
    if (this.state.anwser) {
      if (!this.state.anwser.passPrescreen) {
        content = <div>Please pass the prescreen before proceeed.</div>;
      } else {
        const humanSchedule = generateHumanSchedule(this.state.anwser.level, this.state.anwser.time, this.state.anwser.goal);
        content = <HumanScheduleViewer humanSchedule={humanSchedule}></HumanScheduleViewer>;
      }
    } else {
      content = <HomeExerciseQuestionnaire onFilledOut={(answer) => this.onAnswer(answer)} id={"1"}></HomeExerciseQuestionnaire>
    }

    return (
      <div className="App">
        {content}
      </div>
    )
  }
}

export default App;
