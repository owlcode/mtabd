import React from 'react'
import {Button, Form, Grid, Header, Image, Segment} from 'semantic-ui-react'
import {Link} from "react-router";

const LoginForm = () => (
    <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
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
                <Image src='/logo.png'/>
                <Header as='h2' color='teal' textAlign='center'>
                    {' '} Log-in to your account
                </Header>
                <Form size='large'>
                    <Segment>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address'/>
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'/>

                        <Link to='/dashboard'>
                            <Button color='teal' fluid size='large'>Login</Button>
                        </Link>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    </div>
)

export default LoginForm