import React, {Component} from 'react';
import {Image, Message} from 'semantic-ui-react'
import {settings} from "../../settings";

class ChatBox extends Component {
    source;

    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };

        // this.source = new EventSource(settings.api + '/sse/talk/' + this.props.id);
        //
        // this.source.onmessage = (e) => {
        //     this.setState({data: JSON.parse(e.data)});
        // };
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});
        fetch(settings.api + '/api/message', {
            headers: headers
        }).then(res => res.json())
            .then(res => this.setState({data: res}))
    }

    renderMessageList() {
        let list = [];

        (this.state.data || []).forEach((item, index) => {
            list.push(
                <Message key={index} color={Math.floor(Math.random() * 10) % 2 ? 'grey' : 'blue'}>
                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png'></Image>
                    <small>
                        <i>{item.createdAt}</i>
                    </small>
                    <br/>
                    {item.text}
                </Message>
            )
        });

        return (list);
    }

    render() {
        return (
            <div className="ChatBox">
                {this.renderMessageList()}
            </div>
        );
    }

    componentWillUnmount() {
        // this.source.close();
    }
}

export default ChatBox
