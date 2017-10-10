import React, {Component} from 'react';
import UserForm from './UserForm'
import UserList from './UserList'
import {Button, Icon, Grid, Breadcrumb, Label, Dimmer} from 'semantic-ui-react'
import PageHeader from '../Page/Header';

class UserPage extends Component {

    sections = [
        {
            key: 'Home',
            content: 'poMocny',
            href: '/'
        }, {
            key: 'Store',
            content: 'Użytkownicy',
            href: '/user',
            active: true
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            creating: false
        }
    }

    handleOpen = () => this.setState({creating: true})
    handleClose = () => this.setState({creating: false})

    render() {
        let secondRow = {
            paddingTop: '0'
        }
        return (
            <div className="UserPage">
                <Grid>
                    <Grid.Row style={secondRow}>
                        <Grid.Column floated='left' width={6} verticalAlign='middle'>
                            <Icon name='marker'/>
                            <Breadcrumb icon='right angle' sections={this.sections}/>
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Label as='a' tag onClick={window.history.back}>
                                <Icon name='angle double left'/>
                                Cofnij
                            </Label>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Column floated='left' width={6} verticalAlign='middle'>
                        <PageHeader icon="user" title="Lista uzytkownikow"/>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6} textAlign='right'>
                        <Button onClick={this.handleOpen} inverted color='olive'><Icon name='file excel outline'/>
                            Eksportuj do excela</Button>
                        <Button onClick={this.handleOpen} primary><Icon name='plus'/> Dodaj</Button>
                    </Grid.Column>
                </Grid>

                <Dimmer active={this.state.creating} onClickOutside={this.handleClose} page>
                    <UserForm />
                </Dimmer>
                <UserList/>
            </div>
        )
    }
}

export default UserPage;