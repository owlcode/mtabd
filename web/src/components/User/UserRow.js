import React, {Component} from 'react';
import {Question, Header, Image, Table, Checkbox, Icon, Dimmer} from 'semantic-ui-react';
import UserCard from './UserCard';
import {settings} from "../../settings";

class UserRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            preview: false
        }
    }

    remove(props) {
        fetch(settings.api + '/api/user', {
            method: 'delete',
            protocol: 'https:'
        })
            .then(res => res.json())
            .then(content => {

            });
    }

    handleOpen = () => this.setState({preview: true})
    handleClose = () => this.setState({preview: false})

    render() {
        return (

            <Table.Row>
                <Table.Cell>
                    <Checkbox/>
                </Table.Cell>
                <Table.Cell>
                    <Image src={this.props.photo} shape='rounded' size='mini'/>
                </Table.Cell>
                <Table.Cell>
                    <Header as='h4' image>
                        <Header.Content>
                            {this.props.name}
                            {this.props.surname}
                            <Header.Subheader>{this.props.status}</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell>
                    {this.props.id}
                </Table.Cell>
                <Table.Cell>
                    {this.props.phone}
                </Table.Cell>
                <Table.Cell>
                    {this.props.updatedAt}
                </Table.Cell>
                <Table.Cell>
                    <Dimmer active={this.state.preview} onClickOutside={this.handleClose} page>
                        <UserCard/>
                    </Dimmer>

                        <Icon name='eye' onClick={this.handleOpen}/>


                        <Icon name='edit'/>

                    <Question
                        title="Usuwanie rekordu"
                        text="Czy na pewno chcesz usunąć rekord? Operacja nie może zostać cofnięta">
                        <Icon name='remove' onClick={this.handleOpen} />
                    </Question>

                </Table.Cell>
            </Table.Row>

        );
    }
}

export default UserRow;