import React, {Component} from 'react'
import {Breadcrumb, Embed, Grid, Header, Icon, Progress, Rating, Segment} from 'semantic-ui-react'
import Wall from './Wall/Wall';
import {settings} from "../../settings";
import Stats from "./Stats/Stats";

class Dashboard extends Component {
    sections = [
        {
            key: 'Home',
            content: 'Dashboard',
            href: '/',
            active: true
        },
    ];

    interval;

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            percentage: Math.round(Math.random() * 10000) / 100
        };

        this.interval = setInterval(() => this.setState({percentage: Math.round(Math.random() * 10000) / 100}), 2500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="Dashboard">
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated='left' width={6} verticalAlign='middle'>
                            <Icon name='marker'/>
                            <Breadcrumb icon='right angle' sections={this.sections}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid stackable columns={2}>
                    <Grid.Row>

                        <Grid.Column>
                            <Wall></Wall>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment.Group raised>
                                <Segment color="green">
                                    <Header as='h2' size='medium'>
                                        <Icon name='user'/>
                                        <Header.Content>
                                            Twoje konto
                                        </Header.Content>
                                    </Header>
                                </Segment>
                                <Segment>
                                    <Header size='tiny'>Kompletność profilu</Header>
                                    <Progress progress={true} percent={this.state.percentage} color='olive'/>
                                    <Header size='tiny'>Średnia ocena</Header>
                                    <Rating icon='heart' defaultRating={7} maxRating={10}/>
                                </Segment>
                            </Segment.Group>
                            <Stats></Stats>
                            <Segment.Group raised>
                                <Segment>
                                    <Embed
                                        id='O6Xo21L0ybE'
                                        source='youtube'
                                    />
                                </Segment>
                            </Segment.Group>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}

export default Dashboard;