import React, { Component } from 'react';
import firebase from 'firebase';

import Message from './Message';

class Chat extends Component {
    state = {
        messages: []
    }

    constructor() {
        super();

        firebase.initializeApp({
            apiKey: "<your_api>",
            authDomain: "<your_domain>",
            databaseURL: "<your_url>",
            projectId: "<your_project_id>",
            storageBucket: "<your_storage_bucket>",
            messagingSenderId: "<your_messaging_id>"
        });
    }

    componentWillMount() {
        let ref = firebase.database().ref('chat');

        ref.on('value', (data) => {
            this.setState({ messages: data.val() });
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
                name: 'Cristiano',
                text: event.target.value,
                time: "teste data"
            });
            event.target.value = "";
        }
    }

    render() {
        return (
            <div className="ui items">
                {this.renderMessages()}

                <div className="ui input fluid">
                    <input type="text"
                           name="message"
                           onKeyUp={this.sendMessage} />
                </div>
            </div>
        )
    }
}

export default Chat;