import Letter from "./Letter";
import React, { Component } from 'react';

class Letters extends Component {
    render() {
        return (
            <div id='letters'>
                <div id='availableLetters'> Available letters: {Object.keys(this.props.letterStatus).map(k => {
                    return (
                        this.props.letterStatus[k] ? <span class="true" ><Letter letter={k} /> </span> : <span class="false" ><Letter letter={k} /> </span>
                    )
                })}
                </div>
            </div>
        )
    }
}
export default Letters