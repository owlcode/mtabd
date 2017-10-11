import React, {Component} from 'react';
import {Button, Icon, Grid, Breadcrumb, Label, Dimmer} from 'semantic-ui-react'
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