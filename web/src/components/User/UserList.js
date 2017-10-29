import React, {Component} from 'react';
import {Checkbox, Dimmer, Loader, Segment, Table} from 'semantic-ui-react';
import UserRow from './UserRow';
import {settings} from '../../settings';

class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true
        };

        fetch(settings.api + '/api/user')
            .then(res => res.json())
            .then(content => {
                this.setState({data: content, loading: false});
            });
    }

    renderDataList() {
        let list = [];

        this.state.data.forEach(item => {
            list.push(
                <UserRow {...item} key={item._id}></UserRow>
            );
        }, this);

        return (list);
    }

    render() {
        let style = {
            paddingLeft: 'inhereit'
        }

        return (
            <div className="userList">

                <Dimmer active={this.state.loading} inverted>
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
                            <Table.HeaderCell>Akcje</Table.HeaderCell>
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