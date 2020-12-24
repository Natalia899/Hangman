import React, { Component } from 'react';
class EndGame extends Component {

    isGameOver = () => {
        if (this.props.score < 5) {
            return true
        }
    }

    winTheGame = () => {
        let arr = this.props.solution.split("")
        if (arr.every(l => this.props.letterStatus[l] === true)) {
            return true
        }
    }

    render() {

        if (this.isGameOver()) {
            return (
                <div>{this.props.solution}</div>
            )
        } else if (this.winTheGame()) {
            return (
                <div>"Congratulations"</div>
            )
        } else { return null }
    }
}
export default EndGame