import React, {Component} from 'react';
import {Button, Form, Header, Icon, Input, Segment} from 'semantic-ui-react'
import {toast} from 'react-toastify';
import {settings} from '../../settings';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: ''
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
            .then((res) => {
                if(res.status >= 400) {
                    toast.error(res.message);
                } else {
                    toast.success('Użytkownik został pomyślnie dodany');
                    this.props.closeForm();
                }
            })
            .catch(err => {
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
                        <Icon name='user'/>
                        <Header.Content>
                            Dodaj użytkownika
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Field control={Input} label='Imię' placeholder='Imię' name='firstName'
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}/>
                            <Form.Field control={Input} label='Nazwisko' placeholder='Nazwisko' name='lastName'
                                        value={this.state.lastName} onChange={this.handleInputChange}/>
                        </Form.Group>
                        <Form.Field control={Input} label='Nazwa użytkownika' placeholder='Nazwa użytkownika'
                                    name='username' value={this.state.username} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='E-mail' placeholder='Adres e-mail' name='email'
                                    value={this.state.email} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='Hasło' placeholder='Hasło' name='password'
                            value={this.state.password} onChange={this.handleInputChange}/>
                        <Form.Field control={Input} label='Data urodzin' placeholder='Data urodzin' name='birth' value={this.state.birth}
                                    onChange={this.handleInputChange}/>
                        <Form.Field control={Button}>Zapisz</Form.Field>
                    </Form>
                </Segment>
            </Segment.Group>
        );
    }
}

export default UserForm;
