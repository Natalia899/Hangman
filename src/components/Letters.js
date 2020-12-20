import Letter from "./Letter";
import React, { Component } from 'react';

class Letters extends Component {
    render() {
        return (
            <div id='letters'>
            <Letter/>
            <div id='availableLetters'>Available letters</div>
        </div>
        )
       
    }
}
export default Letters