import React, {Component} from 'react';
import {Checkbox, Dimmer, Loader, Table} from 'semantic-ui-react';
import DealRow from './DealRow';

class DealList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: true
        };

        // fetch(settings.api + '/api/Deal')
        Promise.resolve([{
            id: '1',
            name: 'Deal1',
            startDate: Date.now(),
            endDate: Date.now(),
            status: 'Aktywna',
            description: 'Lorem i'
        },
            {id: '2',name: 'Deal1', startDate: Date.now(), endDate: Date.now(), description: 'Lorem i', status: 'Nieaktywna'},
            {id: '3',name: 'Deal1', startDate: Date.now(), endDate: Date.now(), status: 'Aktywna', description: 'Lorem i'}])
        // .then(res => res.json())
            .then(content => {
                this.setState({data: content, loading: false});
            });
    }

    renderDataList() {
        let list = [];

        this.state.data.forEach(item => {
            list.push(
                <DealRow {...item} key={item.id}></DealRow>
            );
        }, this);

        return (list);
    }

    render() {
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