import Letter from "./Letter";
import React, { Component } from 'react';


class Solution extends Component {
    render() {
        console.log(this.props.solution.word.split(""));
        return (
            <div id='solution'>
                {this.props.solution.word.split("").map(l => {
                    return (
                        this.props.letterStatus[l]? <span> <Letter letter={l} /></span> : <span> <Letter letter={'_'} /> </span>)
                } ) }
                <p>{this.props.solution.hint}</p>
            </div>
        )
    }
}
export default Solution