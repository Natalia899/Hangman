import Letter from "./Letter";
import React, { Component } from 'react';

class Letters extends Component {
    render() {
        return (
            <div id='letters'>
                <div id='availableLetters'> Available letters: {Object.keys(this.props.letterStatus).map(k => {
                    return (
                        this.props.letterStatus[k] ? <span className="false" ><Letter selectLetter={this.props.selectLetter} letter={k} /> </span>
                            : <span className="true" ><Letter selectLetter={this.props.selectLetter} letter={k} /> </span>
                    )
                })}
                </div>
            </div>
        )
    }
}
export default Letters