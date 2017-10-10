import React, {Component} from 'react';
import {List, Segment, Header, Icon} from 'semantic-ui-react';
import {settings} from '../../settings';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: undefined
        };

        fetch(settings.api + '/api/comment')
            .then(res => res.json())
            .then(content => {
                this.setState({data: content});
            })

    }

    renderComments() {
        let list = [];

        this.state.data.forEach(item => {
            list.push(
                <ListRow {...item} key={item._id}></ListRow>
            );
        }, this);

        return (list);
    }

    render(){
        if (this.state.data) {
            return (
                <Segment.Group raised>
                <Segment color="green">
                    <Header as='h2' size='medium'>
                        <Icon name='newspaper'/>
                        <Header.Content>
                            Lista komentarzy
                        </Header.Content>
                    </Header>
                </Segment>
                <List>
                    {this.renderComments()}
                </List>
            </Segment.Group>

            );
        }
        else{
            return null;
        }
    }
}
export default CommentList;
class ListRow extends Component {
    render() {
        return (
            <List.Item>
                <List.Content>
                    <List.Header>{this.props.author}</List.Header>
                    <List.Description>{this.props.text}</List.Description>
                </List.Content>
            </List.Item>
        );
    }
}