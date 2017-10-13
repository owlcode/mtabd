import React, {Component} from 'react';
import {Button, Checkbox, Form, Header, Icon, Input, Segment} from 'semantic-ui-react'
import { toast } from 'react-toastify';
import {settings} from '../../settings';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            username: '',
            phone: '',
            mail: '',
            id: '',
            status: ''
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

        fetch(settings.api + '/api/user', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: headers
        })
            .then(res => res.json())
            .then(content => {
                toast.success('Użytkownik ' + content.name + ' został pomyślnie dodany');
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
            <Segment.Group raised compact>
                <Segment color="green">
                    <Header as='h2' size='medium'>
                        <Icon name='user'/>
                        <Header.Content>
                            Dodaj użytkownika
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='Imię' placeholder='Imię' name='name'
                                        value={this.state.name}
                                        onChange={this.handleInputChange}/>
                            <Form.Field control={Input} label='Nazwisko' placeholder='Nazwisko' name='surname'
                                        value={this.state.surname} onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Field control={Input} label='Nazwa użytkownika' placeholder='Nazwa użytkownika'
                                    name='username' value={this.state.username} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='Numer telefonu' placeholder='Numer telefonu' name='phone'
                                    value={this.state.phone} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='E-mail' placeholder='Adres e-mail' name='mail'
                                    value={this.state.mail} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='Pesel' placeholder='PESEL' name='id' value={this.state.id}
                                    onChange={this.handleInputChange}/>
                        <Form.Field control={Checkbox} label='Aktywny użytkownik' name='active'
                                    value={this.state.status} onChange={this.handleInputChange}/>
                        <Form.Field control={Button}>Zapisz</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}

export default UserForm;
