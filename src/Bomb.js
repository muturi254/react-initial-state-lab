// your Bomb code here!
import React, { Component } from 'react';


class Bomb extends Component {

    constructor(props) {
        super();
        this.state = {
            secondsLeft: props.initialCount,
        }        
    }
    render() {
        return (
            <div>
                <p>{this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
            </div>
        )
    }
}


export default Bomb;