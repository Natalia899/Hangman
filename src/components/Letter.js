import React, { Component } from 'react';

class Letter extends Component {

    select = () => {
        this.props.selectLetter(this.props.letter)
    }
    render() {
        return (
            <span onClick={this.select} id='letter'>{this.props.letter} </span>
        )
    }
}
export default Letter