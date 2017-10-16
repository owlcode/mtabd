import React, {Component} from 'react';
import ChatList from "./ChatList";
import {Grid, Icon, Breadcrumb, Button} from "semantic-ui-react";
class ChatPage extends Component {
    sections = [
        {
            key: 'Home',
            content: 'mta.bd',
            href: '/'
        }, {
            key: 'Store',
            content: 'Chat',
            href: '/chat',
            active: true
        }
    ];

    render() {
        return (
            <div className="ChatPage">
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated='left' width={6} verticalAlign='middle'>
                            <Icon name='marker'/>
                            <Breadcrumb icon='right angle' sections={this.sections}/>
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Button onClick={this.handleOpen} primary compact><Icon name='plus'/> Dodaj</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <ChatList/>
            </div>
        )
    }
}

export default ChatPage;