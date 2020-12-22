import React, { Component } from 'react';

class Letter extends Component {
    render() {

        return(
            <span id='letter'>{this.props.letter} </span>
        )
       
    }
}
export default Letter