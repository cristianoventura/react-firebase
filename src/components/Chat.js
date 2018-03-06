import React, { Component } from 'react';
import firebase from 'firebase';
import moment from 'moment';

import Message from './Message';
import settings from '../firebase';

class Chat extends Component {
    state = {
        messages: []
    }

    constructor() {
        super();

        firebase.initializeApp(settings);
    }

    componentWillMount() {
        let ref = firebase.database().ref('chat');

        ref.on('value', (data) => {
            this.setState({ messages: data.val() });
            this.scrollContainer();
        });
    }

    renderMessages = () => {
        return Object.keys(this.state.messages).map((key, index) => {
            let message = this.state.messages[key];
            return <Message name={message.name}
                            text={message.text}
                            time={message.time}
                            key={index}
                    />
        });
    }

    sendMessage = (event) => {
        if (event.keyCode == 13) {
            firebase.database().ref('chat').push({
                name: this.props.name,
                text: event.target.value,
                time: moment().format('MMMM Do YYYY, h:mm:ss')
            }, () => {
                this.scrollContainer();
            });
            
            event.target.value = "";
        }
    }

    scrollContainer() {
        let element = document.getElementsByClassName('messages')[0];
        element.scrollTop = element.scrollHeight;
    }

    render() {
        return (
            <div>
                <div className="ui items messages">
                    {this.renderMessages()}
                </div>

                <div className="ui input fluid">
                    <input type="text"
                           placeholder="Type your message..."
                           name="message"
                           onKeyUp={this.sendMessage} />
                </div>
            </div>
        )
    }
}

export default Chat;