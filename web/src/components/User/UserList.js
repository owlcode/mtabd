import React, {Component} from 'react';
import {Checkbox, Dimmer, Loader, Table} from 'semantic-ui-react';
import UserRow from './UserRow';

class UserList extends Component {
    renderDataList() {
        let list = [];

        this.props.data.forEach(item => {
            list.push(
                <UserRow {...item} key={item.id}></UserRow>
            );
        }, this);

        return (list);
    }

    render() {
        return (
            <div className="userList">

                <Dimmer active={this.props.loading} inverted>
                    <Loader>Trwa ładowanie...</Loader>
                </Dimmer>
                <Table basic='very' compact selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign="center">
                                <Checkbox fitted/>
                            </Table.HeaderCell>
                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>Login</Table.HeaderCell>
                            <Table.HeaderCell>Imię i nazwisko</Table.HeaderCell>
                            <Table.HeaderCell>Email</Table.HeaderCell>
                            <Table.HeaderCell>Data urodzin</Table.HeaderCell>
                            <Table.HeaderCell>Data rejestracji</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.renderDataList()}
                    </Table.Body>
                </Table>

            </div>
        );
    }


}

export default UserList;