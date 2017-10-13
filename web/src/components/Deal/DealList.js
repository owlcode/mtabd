import React, {Component} from 'react';
import {Checkbox, Dimmer, Loader, Segment, Table} from 'semantic-ui-react';
import DealRow from './DealRow';
import {settings} from '../../settings';

class DealList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true
        };

        // fetch(settings.api + '/api/Deal')
        Promise.resolve([{name: 'Deal1', startDate: Date.now(), endDate: Date.now(), status: 'Aktywna', description: 'Lorem i'},
            {name: 'Deal1', startDate: Date.now(), endDate: Date.now(), description: 'Lorem i', status: 'Nieaktywna'},
            {name: 'Deal1', startDate: Date.now(), endDate: Date.now(), status: 'Aktywna', description: 'Lorem i'}])
        // .then(res => res.json())
            .then(content => {
                this.setState({data: content, loading: false});
            });
    }

    renderDataList() {
        let list = [];

        this.state.data.forEach(item => {
            list.push(
                <DealRow {...item} key={item._id}></DealRow>
            );
        }, this);

        return (list);
    }

    render() {
        let style = {
            paddingLeft: 'inhereit'
        }

        return (
            <div className="DealList">

                <Dimmer active={this.state.loading} inverted>
                    <Loader>Trwa ładowanie...</Loader>
                </Dimmer>
                <Table basic='very' compact selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign="center">
                                <Checkbox fitted/>
                            </Table.HeaderCell>
                            <Table.HeaderCell>Nazwa</Table.HeaderCell>
                            <Table.HeaderCell>Opis</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Czas rozpoczęcia</Table.HeaderCell>
                            <Table.HeaderCell>Czas zakończenia</Table.HeaderCell>
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

export default DealList;