import React, { Component } from 'react';

class Info extends Component {
    state = {
        name: ''
    }

    handleStart = () => {
        if (this.state.name != '')
            this.props.onUpdate(this.state.name);
    }

    render() {
        return (
            <div className="info">
                <h2>Type your name to start</h2>
                
                <div className={`ui input fluid ${!this.state.name ? 'error' : ''}`}>
                    <input onChange={(event) => this.setState({ name: event.target.value })}
                           type="text"
                           id="name"
                           placeholder="Your name" />
                </div>

                <br/>

                <button className="ui fluid green button" onClick={this.handleStart}>Start</button>
            </div>
        )
    }
}

export default Info;