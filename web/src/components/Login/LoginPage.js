import React, {Component} from 'react';
import LoginForm from "./LoginForm";

class LoginPage extends Component {
    render() {
        return (
            <div className="LoginPage">
                <LoginForm onSubmit={this.props.onSubmit}
                           onChange={() => void 0}
                           errors={{}}
                           user={{}}/>
            </div>
        )
    }
}

export default LoginPage;