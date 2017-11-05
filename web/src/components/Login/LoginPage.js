import React, {Component} from 'react';
import LoginForm from "./LoginForm";
import {Grid, Image} from "semantic-ui-react";
import {toast} from 'react-toastify';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            mailError: '',
            passwordError: ''
        };

        this.handleInputChange = this
            .handleInputChange
            .bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="LoginPage">
                <style>
                    {` body > div,
        body > div > div,
        body > div > div > div.loginForm {
          height: 100%;
        }`};
                </style>
                <Grid
                    textAlign='center'
                    style={{
                        height: '100%'
                    }}
                    verticalAlign='middle'>
                    <Grid.Column style={{
                        maxWidth: 450
                    }}>
                        <Image src='/logo.png' style={{
                            marginBottom: 20
                        }}/>
                        <LoginForm onSubmit={(e) => {
                            e.preventDefault();
                            let anyError = false;

                            if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.mail))) {
                                this.setState({mailError: true});
                                toast.error('Podaj prawidłowy adres email');
                                anyError = true;
                            } else {
                                this.setState({mailError: false});
                            }

                            if (this.state.password.length < 6) {
                                this.setState({passwordError: true});
                                toast.error('Podaj prawidłowe hasło');
                                anyError = true;
                            } else {
                                this.setState({passwordError: false});
                            }

                            if (!anyError) {
                                this.props.onSubmit();
                            }

                        }}
                                   onChange={this.handleInputChange}
                                   errors={{
                                       mail: this.state.mailError,
                                       password: this.state.passwordError
                                   }}
                                   user={{
                                       mail: this.state.mail,
                                       passowrd: this.state.password
                                   }}/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default LoginPage;