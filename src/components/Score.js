import React, { Component } from 'react';
class Score extends Component {
    render() {
        return (
            <div id='score'>The score is {this.props.score}</div>
        )
    }
}
export default Score