import React, {Component} from 'react';
import UserForm from './UserForm'
import UserList from './UserList'
import {Breadcrumb, Button, Dimmer, Grid, Icon} from 'semantic-ui-react'
import {settings} from "../../settings";
import {toast} from "react-toastify";

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
            creating: false,
            data: [],
            loading: true
        };

        fetch(settings.api + '/api/user')
            .then(res => res.json())
            .then(content => {
                this.setState({data: content, loading: false});
            })
            .catch(err => toast.error('Wystąpił błąd pobierania danych'))
    }

    handleOpen = () => this.setState({creating: true})
    handleClose = () => {

        this.setState({creating: false})
    }

    render() {
        return (
            <div className="UserPage">
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated='left' width={6} verticalAlign='middle'>
                            <Icon name='marker'/>
                            <Breadcrumb icon='right angle' sections={this.sections}/>
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Button onClick={this.handleOpen} primary compact><Icon name='plus'/> Dodaj</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Dimmer active={this.state.creating} onClickOutside={this.handleClose} page>
                    <UserForm closeForm={this.handleClose.bind(this)}/>
                </Dimmer>

                <UserList loading={this.state.loading} data={this.state.data}/>
            </div>
        )
    }
}

export default UserPage;