import React, {Component} from 'react';
import {Button, Form, Header, Icon, Input, Segment} from 'semantic-ui-react'
import {toast} from 'react-toastify';
import {settings} from '../../settings';

class DealForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            startDate: '',
            endDate: ''
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

        fetch(settings.api + '/api/deal', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: headers
        })
            .then(res => res.json())
            .then(content => {
                toast.success('Zlecenie ' + content.name + ' został pomyślnie dodany');
                this.props.closeForm();
            })
            .catch(err => {
                toast.error(err.message);
            });

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
            <Segment.Group compact>
                <Segment>
                    <Header as='h2' size='medium'>
                        <Icon name='cube'/>
                        <Header.Content>
                            Dodaj zlecenie
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='Czas rozpoczęcia' placeholder='Czas rozpoczęcia'
                                        name='startDate'
                                        value={this.state.startDate}
                                        onChange={this.handleInputChange}/>
                            <Form.Field control={Input} label='Czas zakończenia' placeholder='Czas zakończenia' name='endDate'
                                        value={this.state.endDate} onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Field control={Input} label='Nazwa' placeholder='Nazwa'
                                    name='name' value={this.state.name} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='Opis' placeholder='Opis' name='description'
                                    value={this.state.description} onChange={this.handleInputChange}/>
                        <Form.Field control={Button}>Zapisz</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}

export default DealForm;
