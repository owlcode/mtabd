import React, {Component} from 'react';
import {Dimmer, Feed, Header, Icon, Loader, Segment} from 'semantic-ui-react'
import {settings} from "../../../settings";

class Wall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true
        }

        fetch(settings.api + '/api/message')
            .then(res => res.json())
            .then(content => {
                this.setState({data: content, loading: false});
            })
    }

    renderDataList() {
        let list = [];

        this.state.data.forEach(item => {
            list.push(
                <Feed.Event
                    key={list.length + 1}>
                    <Feed.Label>
                        <Icon name="checkmark" color="olive"/>
                        <Icon name="remove" color="red"/>
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                            <Feed.User>{item._user} użytkownik</Feed.User> właśnie wysłał wiadomość
                            <Feed.Date>
                                {new Date(item.createdAt) - Date.now()}
                            </Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>
                            {item.text}
                        </Feed.Extra>
                        <Feed.Meta>
                            {item.browserAgent}
                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            );
        }, this);

        return (list);
    }

    render() {
        let style = {
            minHeight: "250px"
        }
        return (
            <div className="Comment">

                <Segment.Group raised>
                    <Segment color="green">
                        <Header as='h2' size='medium'>
                            <Icon name='feed'/>
                            <Header.Content>
                                Ściana zdarzeń
                            </Header.Content>
                        </Header>
                    </Segment>
                    <Segment>
                        <Feed style={style}>
                            <Dimmer active={this.state.loading} inverted>
                                <Loader>Trwa ładowanie...</Loader>
                            </Dimmer>
                            {this.renderDataList()}
                        </Feed>
                    </Segment>
                </Segment.Group>
            </div>
        );
    }
}

export default Wall;