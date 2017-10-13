import React, {Component} from 'react';
import {Breadcrumb, Button, Form, Grid, Header, Icon, Input, Label, Segment, TextArea} from 'semantic-ui-react'
import {settings} from '../../settings';

class ArticleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit(event) {
        const headers = new Headers({
            'Content-Type' : 'application/json; charset=UTF-8'
        });

        fetch(settings.api + '/api/article', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: headers
        })
            .then(res => res.json())
            .then(content => this.setState({}));

        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }
    sections = [
        {
            key: 'Home',
            content: 'poMocny',
            href: '/'

        }, {
            key: 'Store',
            content: 'Artykuły',
            href: '/article',
            active: true
        }
    ];


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
                        <Label as='a' tag onClick={window.history.back}>
                            <Icon name='angle double left'/>
                            Cofnij
                        </Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Segment.Group raised>
                <Segment color="green">
                    <Header as='h2' size='medium'>
                        <Icon name='newspaper'/>
                        <Header.Content>
                            Dodaj artykuł
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field placeholder='Tytuł artykułu' name='title' control={Input}      value={this.state.title}/>
                        <Form.Field placeholder='Treść artykułu' name='text'  control={TextArea}   value={this.state.text}/>
                        <Form.Field control={Button}>Dodaj artykuł</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        </div>

        );
    }
}

export default ArticleForm;