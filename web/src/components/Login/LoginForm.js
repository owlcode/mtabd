import React, {PropTypes} from 'react'
import {Form, Segment} from 'semantic-ui-react'

const LoginForm = ({
                       onSubmit,
                       onChange,
                       errors,
                       user,
                   }) => {
    return (
        <div className='loginForm'>

            <Form size='large' onSubmit={onSubmit}>
                <Segment>
                    <Form.Input fluid
                                icon='user'
                                name='mail'
                                value={user.name}
                                onChange={onChange}
                                iconPosition='left'
                                placeholder='E-mail'
                                error={!!errors.mail}
                    />

                    <Form.Input
                        fluid
                        name='password'
                        value={user.password}
                        icon='lock'
                        onChange={onChange}
                        iconPosition='left'
                        placeholder='Hasło'
                        error={!!errors.password}
                        type='password'/>

                    <Form.Button color='teal' fluid size='large' content='Login'/>

                </Segment>
            </Form>
        </div>
    )
};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm