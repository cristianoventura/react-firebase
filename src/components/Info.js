import React, { Component } from 'react';

class Info extends Component {

    render() {
        return (
            <div className="info">
                <h2>Type your name to start</h2>
                
                <div className="ui input fluid">
                    <input type="text" id="name" placeholder="Your name" />
                </div>

                <br/>

                <button className="ui fluid green button">Start</button>
            </div>
        )
    }
}

export default Info;