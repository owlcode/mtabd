import React, {Component} from 'react';
import {Checkbox, Dimmer, Header, Icon, Image, Question, Table} from 'semantic-ui-react';
import UserCard from './UserCard';
import {settings} from "../../settings";
import {toast} from 'react-toastify';

class UserRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            preview: false
        }
    }

    remove(props) {
        fetch(settings.api + '/api/user', {
            method: 'delete',
            protocol: 'https:'
        })
            .then(res => res.json())
            .then(content => {
                toast.success('Użytkownik został pomyślnie usunięty')
            }).catch(err => {
            toast.error(err.message)
        })
    }

    handleOpen = () => {
        this.setState({preview: true})
    }
    handleClose = () => this.setState({preview: false})
    handleCheckboxClick = (event) => {
        event.preventDefault();
    }
    render() {
        return (

            <Table.Row>
                <Table.Cell textAlign="center">
                    <Checkbox onClick={(e) => this.handleCheckboxClick(e)}/>
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.id}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.username}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.firstName} {this.props.lastName}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.email}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.birth}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.createdAt}
                </Table.Cell>
                <Table.Cell>
                    <Dimmer active={this.state.preview} onClickOutside={this.handleClose} page>
                        <UserCard/>
                    </Dimmer>

                    <Icon name='edit'/>
                    <Icon name='remove'/>

                </Table.Cell>
            </Table.Row>

        );
    }
}

export default UserRow;