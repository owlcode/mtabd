import React, {Component} from 'react';
import {Dimmer, Grid, Icon, Input, Popup} from 'semantic-ui-react'
import './Navbar.css';

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

    render() {
        return (
            <div className="Navbar">
                <Grid>
                    <Grid.Row>
                        <Grid.Column floated='left' width={4}>
                            <img src="./logo.png" className="App-logo" alt="logo" onClick={this.props.toggleMenu}/>
                        </Grid.Column>
                        <Grid.Column floated='right' textAlign='right' width={8} verticalAlign='middle'>

                            <Popup
                                key='Dowolny, Użytkownik (PL)'
                                trigger={<Icon circular inverted color='teal' name='user'/>}
                                header='Dowolny, Użytkownik (PL)'
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