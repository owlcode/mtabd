import React, {PropTypes} from 'react'
import {Form, Grid, Image, Segment} from 'semantic-ui-react'

const LoginForm = ({
                       onSubmit,
                       onChange,
                       errors,
                       user,
                   }) => (
    <div className='login-form'>
        <style>
            {` body > div,
        body > div > div,
        body > div > div > div.login-form {
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
            }} />
                <Form size='large' onSubmit={onSubmit}>
                    <Segment>

                        <Form.Input fluid
                                    icon='user'
                                    name='name'
                                    value={user.name}
                                    onChange={onChange}
                                    iconPosition='left'
                                    placeholder='Użytkownik'/>

                        <Form.Input
                            fluid
                            name='password'
                            value={user.password}
                            icon='lock'
                            onChange={onChange}
                            iconPosition='left'
                            placeholder='Hasło'
                            type='password'/>

                        <Form.Button color='teal' fluid size='large' content='Login'/>

                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    </div>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

export default LoginForm