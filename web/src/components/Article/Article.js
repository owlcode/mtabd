import React, {Component} from 'react';
import {Button, Header, Icon, Segment, Container} from 'semantic-ui-react'

class Article extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            img: "http://semantic-ui.com/images/avatar2/small/lindsay.png",
            title: "Tytuł artykułu 1",
            text: "Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit(event)
    {
        alert(this.article.value);
        event.preventDefault();
    }

    render() {
        return (
            <Segment.Group raised>
                <Segment color="green">
                    <Header as='h2' size='medium'>
                        <Icon name='newspaper'/>
                        <Header.Content>
                            Artykuł
                        </Header.Content>
                    </Header>
                </Segment>
                <Segment>
                    <Container text>
                        <Header>
                            <img src={this.state.img} alt="avatar"/>{this.state.title}
                            <Button.Group floated='right'>
                                <Button negative>Usuń</Button>
                                <Button color="blue">Edytuj</Button>
                            </Button.Group>
                        </Header>
                        {this.state.text}
                        <div>
                            <Button attached='left'>Komentarz</Button>
                            <Button attached='right'>Powrót do listy artykułów</Button>
                        </div>
                    </Container>
                </Segment>
            </Segment.Group>
        );
    }
}
export default Article