import React, { Component } from 'react';
class Score extends Component {
    render() {
        return (
            <div id='score'>The score is: {this.props.score >= 80 ? <span className='highScore'>{this.props.score}</span> :
                this.props.score < 80 && this.props.score >= 50 ? <span className='medScore'>{this.props.score}</span> :
                    <span className='lowScore'>{this.props.score}</span>}
            </div>
        )
    }
}
export default Score