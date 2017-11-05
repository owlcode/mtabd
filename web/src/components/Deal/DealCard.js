import React from 'react'
import {Card, Grid, Header, Icon, Image, List, Message, Segment} from 'semantic-ui-react'

const DealCard = () => (
    <Segment.Group compact>
        <Segment>
            <Header as='h2' size='medium'>
                <Icon name='cube'/>
                <Header.Content>
                    Usługa
                </Header.Content>
            </Header>
        </Segment>
        <Segment>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Card>
                            <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png'/>
                            <Card.Content>
                                <Card.Header>
                                    Matthew
                                </Card.Header>
                                <Card.Meta>
                                    <span className='date'>
                                      Joined in 2015
                                    </span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='cube'/>
                                    22 Friends
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Message positive>
                            <Message.Header>You are eligible for a reward</Message.Header>
                            <p>Go to your <b>special offers</b> page to see now.</p>
                        </Message>

                        <div style={({color: 'black'})}>
                            <List>
                                <List.Item icon='cube' content='Semantic UI'/>
                                <List.Item icon='marker' content='New York, NY'/>
                                <List.Item icon='mail'
                                           content={<a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>}/>
                                <List.Item icon='linkify'
                                           content={<a href='http://www.semantic-ui.com'>semantic-ui.com</a>}/>
                            </List>

                        </div>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </Segment.Group>
);

export default DealCard