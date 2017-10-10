import React, {Component} from 'react';
import {Table, Segment, Checkbox, Dimmer, Loader} from 'semantic-ui-react';
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
            minHeight: "250px"
        }

        return (
            <div className="userList">

                <Segment style={style}>
                    <Dimmer active={this.state.loading} inverted>
                        <Loader>Trwa ładowanie...</Loader>
                    </Dimmer>
                    <Table basic='very' celled collapsing>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>
                                    <Checkbox/>
                                </Table.HeaderCell>
                                <Table.HeaderCell onClick={this.handleOpen}>Zdjęcie</Table.HeaderCell>
                                <Table.HeaderCell>Osoba</Table.HeaderCell>
                                <Table.HeaderCell>PESEL</Table.HeaderCell>
                                <Table.HeaderCell>Telefon</Table.HeaderCell>
                                <Table.HeaderCell>Aktualizowane</Table.HeaderCell>
                                <Table.HeaderCell>Akcje</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {this.renderDataList()}
                        </Table.Body>
                    </Table>
                </Segment>
            </div>
        );
    }


}

export default UserList;