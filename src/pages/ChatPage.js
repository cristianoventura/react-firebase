import React, { Component } from 'react';
import Info from '../components/Info';
import Chat from '../components/Chat';

class ChatPage extends Component {
    state = {
        name: null
    }

    renderMessageContainer = () => {
        if (this.state.name)
            return <Chat name={this.state.name} />
    }
    
    renderInfo = () => {
        if (!this.state.name)
            return <Info onUpdate={(value) => this.setState({ name: value })} />
    }

    render() {
        return (
            <div className="chat-page">
                {this.renderInfo()}
                {this.renderMessageContainer()}
            </div>
        )
    }
}

export default ChatPage;