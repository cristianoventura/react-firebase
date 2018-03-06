import React, { Component } from 'react';

class Message extends Component {
    render() {
        return (
            <div className="message">
                <p className="message__name">{this.props.name}</p>
                <p className="message__text">{this.props.text}</p>
                <p className="message__time">{this.props.time}</p>
            </div>
        )
    }
}

export default Message;