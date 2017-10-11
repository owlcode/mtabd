import React, {Component} from 'react';
import ChatList from "./ChatList";

class ChatPage extends Component {
    render() {
        return (
            <div className="ChatPage">
                <ChatList/>
            </div>
        )
    }
}

export default ChatPage;