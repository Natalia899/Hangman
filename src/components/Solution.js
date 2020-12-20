//import Letter from "./Letter";
import React, { Component } from 'react';


class Solution extends Component {
    render()
     {let solutionWord = ['_ ', '_ ', '_ ', '_ ']
        return (
            <div id='solution'>
                {solutionWord.map(l => <span>{l}</span>)}
            </div>
        )
    }
}
export default Solution