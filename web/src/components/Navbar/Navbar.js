import React, {Component} from 'react';
import {Dimmer, Grid, Icon, Input} from 'semantic-ui-react'
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false
        }
    }

    handleSearchInput = () => {this.setState({searching: true})}
    handleClose = () => this.setState({searching: false})

    render() {
        let firstRow = {
            paddingBottom: '0'
        };
        return (
            <div className="Navbar">
                <Grid>
                    <Grid.Row style={firstRow}>
                        <Grid.Column floated='left' width={6}>
                            <img src="./logo.png" className="App-logo" alt="logo" onClick={this.props.toggleMenu}/>
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={6} verticalAlign='middle'>
                            <Icon name='search'/>
                            <Input placeholder='Szukaj' onChange={this.handleSearchInput}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Dimmer active={this.state.searching} onClickOutside={this.handleClose}>
                    <Input size='huge' icon='search' placeholder='Search...'/>
                </Dimmer>
            </div>
        );
    }

}

export default Navbar;