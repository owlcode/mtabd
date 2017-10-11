import React, {Component} from 'react';
import {Button, List, Segment, Header, Icon, Image, Divider} from 'semantic-ui-react';
import {Link} from 'react-router';
import {settings} from "../../settings";

class ChatList extends Component {
    source;

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

        this.source = new EventSource(settings.api + '/sse/talk');

        this.source.onmessage = (e) => {
            this.setState({data: [JSON.parse(e.data)]});
        };

        fetch(settings.api + '/api/talk')
            .then(res => res.json())
            .then(content => this.setState({data: content}));

    }

    renderDataList() {
        let list = [];

        this.state.data.forEach(item => {
            list.push(
                <List.Item key={item._id}>
                    <List.Content floated='right' verticalAlign='middle'>
                        <Link to={'chat/single/' + item._id}>
                            <Button size='large'>Wyświetl wiadomość</Button>
                        </Link>
                    </List.Content>
                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png' size='tiny'/>
                    <List.Content>
                        <h3>Jan Kaczkoski</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam. </p>
                        <i>{item.createdAt}</i>

                    </List.Content>
                    <Divider/>
                </List.Item>
            );
        }, this);

        return (list);
    }

    render() {
        if (this.state.data) {
            return (
                <Segment.Group>
                    <Segment>
                        <Header as='h2' size='medium'>
                            <Icon name='chat'/>
                            <Header.Content>
                                ChatList
                            </Header.Content>
                        </Header>
                    </Segment>
                    <List>
                        {this.renderDataList()}
                    </List>
                </Segment.Group>

            );
        }
    }

    componentWillUnmount() {
        this.source.close();
    }
}

export default ChatList;
