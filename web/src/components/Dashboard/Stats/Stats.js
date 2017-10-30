import React, {Component} from 'react';
import {Divider, Header, Icon, Segment, Statistic} from 'semantic-ui-react'

class Stats extends Component {
    render() {
        return (
            <Segment.Group>
                <Segment color="green">
                    <Header as='h2' size='medium'>
                        <Icon name='bar chart'/>
                        <Header.Content>
                            Statystki
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Statistic.Group widths='two'>
                        <Statistic color="red">
                            <Statistic.Value>81</Statistic.Value>
                            <Statistic.Label>Użytkowników</Statistic.Label>
                        </Statistic>

                        <Statistic color="red">
                            <Statistic.Value>
                                53
                            </Statistic.Value>
                            <Statistic.Label color="red">Otwartych zleceń</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                    <Divider/>
                    <Statistic.Group widths="three" size="tiny">

                        <Statistic>
                            <Statistic.Value>140</Statistic.Value>
                            <Statistic.Label>Produktów</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>10</Statistic.Value>
                            <Statistic.Label>Zleceń</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>54</Statistic.Value>
                            <Statistic.Label>Wiadomości</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                </Segment>

            </Segment.Group>

        );
    }
}

export default Stats;