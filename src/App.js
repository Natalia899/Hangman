import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Letter from './components/Letter';
import Score from './components/Score';
import Solution from './components/Solution';


class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'calm',
        hint: 'Your ideal mood when coding'
      },
      score: 0

    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  render() {
    return (
      <div id='mainContainer'>
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} />
        <Score score={this.state.score} />
        <Letters letterStatus={this.state.letterStatus} />
      </div>
    )
  }

}

export default App;
