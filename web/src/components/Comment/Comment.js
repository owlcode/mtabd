import React, {Component} from 'react';
import {Breadcrumb, Button, Form, Grid, Header, Icon, Input, Label, Segment, TextArea} from 'semantic-ui-react'
import {settings} from '../../settings';

var data = {
    _user: '_user',
    author: 'author',
    text: 'text'
}

class Comment extends Component {

    sections = [
        {
            key: 'Home',
            content: 'poMocny',
            href: '/'
        }, {
            key: 'Store',
            content: 'Komentarze',
            href: '/user',
            active: true
        }
        ];

    constructor(props) {
        super(props);
        this.state = {};

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
        this.handleInputChange = this
            .handleInputChange
            .bind(this);
    }

    handleSubmit(event) {
        const headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data; charset=UTF-8'
        });

        fetch(settings.api  + '/api/comment', {
            method: 'post',
            body: JSON.stringify(data),

            headers: headers
        })
            .then(res => res.json())
            .then(content => this.setState({}));

        event.preventDefault();
    }

    handleBack(){
        console.log("gdfgd");
        window.history.back();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render() {
        let secondRow = {
            paddingTop: '0'
        }
        return (
        <div className="Comment">
            <Grid>
                <Grid.Row style={secondRow}>
                    <Grid.Column floated='left' width={6} verticalAlign='middle'>
                        <Icon name='marker' />
                        <Breadcrumb icon='right angle' sections={this.sections}/>
                    </Grid.Column>
                    <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                        <Label as='a' tag onClick={this.handleBack()}>
                            <Icon name='angle double left'/>
                            Cofnij
                        </Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Segment.Group raised>
                <Segment color="green">
                    <Header as='h2' size='medium'>
                        <Icon name='comment'/>
                        <Header.Content>
                            Dodaj komentarz
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='Użytkownik' placeholder='Nazwa użytkownika' name='_user'
                                        value={this.state._user}/>
                            <Form.Field control={Input} label='Autor' placeholder='Autor komentarza' name='author'
                                        value={this.state.author}/>
                        </Form.Group>
                        <Form.Field control={TextArea} label='Komentarz' placeholder='Treść komentarza' name='text'
                                    value={this.state.text}/>
                        <Form.Field control={Button}>Dodaj komentarz</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>

        </div>
                    );
    }
}

export default Comment;