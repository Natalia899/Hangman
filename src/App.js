import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import EndGame from './components/EndGame';
import Score from './components/Score';
import Solution from './components/Solution';


class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),
      solution: {
        word: 'CALMM',
        hint: 'Your ideal mood when coding'
      },
      score: 10,
    }
  }

  selectLetter = (letter) => {
    let tempLetterStatus = { ... this.state.letterStatus }
    tempLetterStatus[letter] = true
    this.manipulateScore(letter)
    this.setState({
      letterStatus: tempLetterStatus
    })
  }

  manipulateScore = (letter) => {
    let arr = this.state.solution.word.split("")
    let count = 0
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i] == letter)
        count++;
    }

    if (arr.includes(letter)) {
      let tempScore = this.state.score
      tempScore += 5 * count
      this.setState({ score: tempScore })
    } else {
      let tempScore = this.state.score
      tempScore -= 5
      this.setState({ score: tempScore })
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
        <Solution letterStatus={this.state.letterStatus} solution={this.state.solution} score={this.state.score} />
        <Score score={this.state.score} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
        <EndGame letterStatus={this.state.letterStatus} score={this.state.score} solution={this.state.solution.word} />
      </div>
    )
  }

}

export default App;
