import React, {Component} from 'react';
import {Grid, Icon, Input, Popup} from 'semantic-ui-react'
import './Navbar.css';
import Memory from "../../Library/Memory";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false
        }
    }

    handleSearchInput = () => {
        this.setState({searching: true})
    }
    handleClose = () => this.setState({searching: false})
    getFullUserName = () => {
        let user = Memory.read('user');
        return user.lastName + ', ' + user.firstName + ' (' + user.username + ')';
    }

    render() {
        return (
            <div className="Navbar">
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated='left' only='tablet mobile'>
                            <Icon name='bars' onClick={this.props.toggleMenu}/>
                        </Grid.Column>
                        <Grid.Column floated='left' width={4}>
                            <img src="./logo.png" className="App-logo" alt="logo"/>
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={8} verticalAlign='middle'>

                            <Popup
                                key={this.getFullUserName()}
                                trigger={<Icon circular inverted color='teal' name='user'/>}
                                header={this.getFullUserName()}
                            />


                            <Icon circular name='search'/>
                            <Input placeholder='Szukaj' onChange={this.handleSearchInput}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }

}

export default Navbar;