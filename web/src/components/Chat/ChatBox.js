import React, {Component} from 'react';
import {Segment, Header, Container, Icon, Message, Image, Divider} from 'semantic-ui-react'
import {settings} from "../../settings";
class ChatBox extends Component {
    source;

    constructor(props) {
        super(props);
        this.state = {
            data: undefined
        };
        this.img = {};

        this.source = new EventSource(settings.api + '/sse/talk/' + this.props.id);

        this.source.onmessage = (e) => {
            this.setState({data: JSON.parse(e.data)});
        }
    }

    renderMessageList() {
        let list = [];

        (this.state.data || []).forEach((item, index) => {
            list.push(
                <Message key={index} compact color='blue' >
                    <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png'></Image>
                    <small>
                        <i>{item.createdAt}</i>
                    </small><br/>
                    {item.text}
                </Message>
            )
        });

        return (list);
    }

    render() {
        return (
            <Segment.Group raised>
                <Segment color="green">
                    <Header as='h2' size='medium'>
                        <Icon name='keyboard'/>
                        <Header.Content>
                            ChatBox
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Container text>
                        {this.renderMessageList()}
                    </Container>
                </Segment>
            </Segment.Group>
        );
    }

    componentWillUnmount() {
        this.source.close();
    }
}
export default ChatBox
