import React, {Component} from 'react';
import {Checkbox, Dimmer, Icon, Table} from 'semantic-ui-react';
import DealCard from './DealCard';
import {settings} from "../../settings";
import {toast} from 'react-toastify';

class DealRow extends Component {
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
                toast.success('Użytkownik został pomyślnie usunięty')
            }).catch(err => {
            toast.error(err.message)
        })
    }

    handleOpen = () => {
        this.setState({preview: true})
    }
    handleClose = () => this.setState({preview: false})
    handleCheckboxClick = (event) => {
        event.preventDefault();
    }
    render() {
        return (

            <Table.Row>
                <Table.Cell textAlign="center">
                    <Checkbox onClick={(e) => this.handleCheckboxClick(e)}/>
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.name}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.description}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.status}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.startDate}
                </Table.Cell>
                <Table.Cell onClick={this.handleOpen}>
                    {this.props.endDate}
                </Table.Cell>
                <Table.Cell>
                    <Dimmer active={this.state.preview} onClickOutside={this.handleClose} page>
                        <DealCard/>
                    </Dimmer>

                    <Icon name='edit'/>
                    <Icon name='remove'/>

                </Table.Cell>
            </Table.Row>

        );
    }
}

export default DealRow;