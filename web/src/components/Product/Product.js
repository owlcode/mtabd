import React, {Component} from 'react';
import {Button, Container, Header, Icon, Segment} from 'semantic-ui-react'

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            name: '#DEVELOPER-TEST Nazwa produktu',
            description: 'Opis produktu Lorem ipsum dolor sit amet sit ametyst lubkoa skoasd.',
            price: 25002
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert(this.article.value);
        event.preventDefault();
    }

    render() {
        return (
            <Segment.Group raised>
                <Segment color="green">
                    <Header as='h2' size='medium'>
                        <Icon name='suitcase'/>
                        <Header.Content>
                            Produkt
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Container text>
                        <Header>
                            {this.state.name}
                            <Button.Group>
                                <Button negative>Usuń</Button>
                                <Button color="blue">Edytuj</Button>
                            </Button.Group>
                        </Header>
                        {this.state.description}
                    </Container>
                </Segment>
            </Segment.Group>
        );
    }
}

export default Product