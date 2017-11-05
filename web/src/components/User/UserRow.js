import React, {Component} from 'react';
import {Checkbox, Dimmer, Table} from 'semantic-ui-react';
import UserCard from './UserCard';

class UserRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            preview: false
        }
    }

    handleOpen = () => this.setState({preview: true})
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

                    <Dimmer active={this.state.preview} onClickOutside={this.handleClose} page>
                        <UserCard/>
                    </Dimmer>
                </Table.Cell>

            </Table.Row>

        );
    }
}

export default UserRow;