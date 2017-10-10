import React, {Component} from 'react';
import {Header, Icon} from 'semantic-ui-react'

class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <Header as='h2' size='medium' color={this.state.color || 'black'}>
                <Icon name={this.state.icon}/>
                <Header.Content>
                    {this.state.title}
                </Header.Content>
            </Header>
        );
    }
}

export default PageHeader;