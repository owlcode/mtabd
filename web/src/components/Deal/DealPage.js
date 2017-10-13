import React, {Component} from 'react';
import DealForm from './DealForm'
import DealList from './DealList'
import {Breadcrumb, Button, Dimmer, Grid, Icon} from 'semantic-ui-react'
import PageHeader from '../Page/Header';

class DealPage extends Component {

    sections = [
        {
            key: 'Home',
            content: 'mta.bd',
            href: '/'
        }, {
            key: 'Store',
            content: 'Usługi',
            href: '/Deal',
            active: true
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            creating: false
        }
    }

    handleOpen = () => this.setState({creating: true})
    handleClose = () => this.setState({creating: false})

    render() {
        let secondRow = {
            paddingTop: '0'
        }
        return (
            <div className="DealPage">
                <Grid>
                    <Grid.Row style={secondRow}>
                        <Grid.Column floated='left' width={6} verticalAlign='middle'>
                            <Icon name='marker'/>
                            <Breadcrumb icon='right angle' sections={this.sections}/>
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Button onClick={this.handleOpen} primary compact><Icon name='plus'/> Dodaj</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Dimmer active={this.state.creating} onClickOutside={this.handleClose} page>
                    <DealForm closeForm={this.handleClose.bind(this)}/>
                </Dimmer>

                <DealList/>
            </div>
        )
    }
}

export default DealPage;