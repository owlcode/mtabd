import React, {Component} from 'react';
import {Breadcrumb, Button, Dimmer, Grid, Icon, Label} from 'semantic-ui-react'
import LoginForm from "./LoginForm";

class LoginPage extends Component {

    render() {
        return (
            <div className="LoginPage">
                <LoginForm></LoginForm>
            </div>
        )
    }
}

export default LoginPage;