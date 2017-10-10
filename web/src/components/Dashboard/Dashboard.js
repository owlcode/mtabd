import React, {Component} from 'react'
import {Grid, Button, Icon, Breadcrumb, Label, Embed, Segment, Header, Rating, Progress} from 'semantic-ui-react'
import Wall from './Wall/Wall';
import Question from '../Question/Question';
import {settings} from "../../settings";
import Stats from "./Stats/Stats";

class Dashboard extends Component {
    sections = [
        {
            key: 'Home',
            content: 'poMocny',
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

        const headers = new Headers({'Content-Type': 'application/json; charset=UTF-8'});

        fetch(settings.api + '/api/message', {
            method: 'POST',
            body: JSON.stringify({
                _user: 'random',
                _talk: 'random',
                browserAgent: navigator.userAgent,
                ipv4: '127.0.1.2',
                text: 'Dobry wieczór, właśnie zalogowałem się do panelu administratora. Jakie powinienem podjąć kroki żeby uzyskać profesjonalną pomoc?'
            }),
            headers: headers
        })
            .then(res => res.json())
            .then(content => content.data)
            .catch(err => console.error(err));
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
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Label as='a' tag onClick={window.history.back}>
                                <Icon name='angle double left'/>
                                Cofnij
                            </Label>
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

                <Question
                    title="Czy na pewno chcesz zadzwonic?"
                    text="Lorem ipsum dolor sit amet"
                >
                    {< Button > Odpowiedz sobie na jedno proste pytanie </Button>}
                </Question>
            </div>
        );
    }
}

export default Dashboard;