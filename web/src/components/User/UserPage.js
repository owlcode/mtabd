import React, {Component} from 'react';
import UserForm from './UserForm'
import UserList from './UserList'
import {Breadcrumb, Button, Dimmer, Grid, Icon} from 'semantic-ui-react'
import PageHeader from '../Page/Header';

class UserPage extends Component {

    sections = [
        {
            key: 'Home',
            content: 'mta.bd',
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
                            <Icon name='tag' size='large'/>
                            <Icon name='privacy' size='large'/>
                            <Icon name='settings' size='large'/>
                            <Icon name='cloud' size='large'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Column floated='left' width={6} verticalAlign='middle'>
                        <PageHeader icon="user" title="Lista uzytkownikow"/>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6} textAlign='right'>
                        <Button onClick={this.handleOpen} primary><Icon name='plus'/> Dodaj</Button>
                    </Grid.Column>
                </Grid>

                <Dimmer active={this.state.creating} onClickOutside={this.handleClose} page>
                    <UserForm closeForm={this.handleClose.bind(this)}/>
                </Dimmer>

                <UserList/>
            </div>
        )
    }
}

export default UserPage;