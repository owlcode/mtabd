import React, {Component} from 'react';
import {Divider, Header, Icon, Segment, Statistic} from 'semantic-ui-react'

class Stats extends Component {
    render() {
        return (
            <Segment.Group raised>
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
                            <Statistic.Value>4</Statistic.Value>
                            <Statistic.Label>Lekarzy online</Statistic.Label>
                        </Statistic>

                        <Statistic color="red">
                            <Statistic.Value>
                                5
                            </Statistic.Value>
                            <Statistic.Label color="red">Oczekujących rozmów</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                    <Divider/>
                    <Statistic.Group widths="three" size="tiny">

                        <Statistic>
                            <Statistic.Value>352</Statistic.Value>
                            <Statistic.Label>Pacjentów</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>17</Statistic.Value>
                            <Statistic.Label>Kwestionariuszy</Statistic.Label>
                        </Statistic>

                        <Statistic>
                            <Statistic.Value>54</Statistic.Value>
                            <Statistic.Label>Artykuły</Statistic.Label>
                        </Statistic>
                    </Statistic.Group>
                </Segment>

            </Segment.Group>

        );
    }
}

export default Stats;