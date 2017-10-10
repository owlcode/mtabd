import React, {Component} from 'react';
import ChatBox from "./ChatBox";
import {Button, Input} from "semantic-ui-react";
import {settings} from "../../settings";

class SingleChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            talkData: undefined,
            text: '',
            _talk: this.props.params.talkId
        };

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
    }

    handleSubmit(event) {
        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});

        if (this.state.text !== '') {
            fetch(settings.api + '/api/message', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: headers
            })
                .then(res => res.json())
                .then(content => content.data)
                .catch(err => {
                    console.error(err);
                });

            this.setState({text: ''});
        }

        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="SingleChat">
                <ChatBox id={this.props.params.talkId}/>
                <Input label='Nowa wiadomość' placeholder='Wpisz wiadomość' name='text'
                       value={this.state.text} onChange={this.handleInputChange}/>
                <Button onClick={this.handleSubmit}>Wyślij</Button>
            </div>
        )
    }
}

export default SingleChat;