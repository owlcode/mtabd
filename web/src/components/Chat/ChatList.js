import React, {Component} from 'react';
import {Button, Divider, Header, Icon, Image, List, Segment, Grid} from 'semantic-ui-react';
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
                <Grid.Column key={item._id}>
                    <Link to={'chat/single/' + item._id}>
                        <Segment raised>
                            <Image avatar src='http://semantic-ui.com/images/avatar2/small/rachel.png' size='tiny'/>
                            <List.Content>
                                <h3>Jan Kaczkoski</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Aliquam. </p>
                                <i>{item.createdAt}</i>

                            </List.Content>
                        </Segment>

                    </Link>
                </Grid.Column>
            );
        }, this);

        return (list);
    }

    render() {
        if (this.state.data) {
            return (
                <div className="chatList">
                    <Grid doubling columns={4}>
                        {this.renderDataList()}
                    </Grid>
                </div>
            );
        }
    }

    componentWillUnmount() {
        this.source.close();
    }
}

export default ChatList;
