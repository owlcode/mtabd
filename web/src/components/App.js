import React, {Component} from 'react';
import Navbar from './Navbar/Navbar';
import {Sidebar, Segment, Menu, Icon, Label} from 'semantic-ui-react'
import {Link} from 'react-router';
import Memory from "../Library/Memory";
import {settings} from "../settings";

class App extends Component {
    state = {
        visible: true
    };

    constructor() {
        super();

        fetch(settings.api + '/api/user/random')
            .then(res => res.json())
            .then(this.handleUserAuth())
            .catch(err => console.error(err));
    }

    handleUserAuth() {
        return function(user) {
            Memory.save('user', user);
            console.log(user);
        }
    }

    render() {
        const {visible} = this.state;
        return (
            <div className="App">
                <Sidebar.Pushable as={Segment} className="fullScreen">
                    <Sidebar
                        as={Menu}
                        animation='push'
                        width='thin'
                        visible={visible}
                        icon='labeled'
                        vertical
                        inverted>
                        <Link to='/'>
                            <Menu.Item name='home'>
                                <Icon name='home'/>
                                Home
                            </Menu.Item>
                        </Link>
                        <Link to='/chat'>
                            <Menu.Item name='chat'>
                                <Label color='teal' floating>2254</Label>
                                <Icon name='wechat'/>
                                Chat
                            </Menu.Item>
                        </Link>
                        <Link to='/questionnaire'>
                            <Menu.Item name='questionnaire'>
                                <Icon name='checkmark box'/>
                                Kwestionariusze
                            </Menu.Item>
                        </Link>
                        <Link to='/user'>
                            <Menu.Item name='users'>
                                <Icon name='user'/>
                                Użytkownicy
                            </Menu.Item>
                        </Link>
                        <Link to='/article'>
                            <Menu.Item name='article'>
                                <Icon name='newspaper'/>
                                Artykuły
                            </Menu.Item>
                        </Link>
                    </Sidebar>
                    <Sidebar.Pusher className="SidebarPusher">
                        <Navbar></Navbar>
                        {this.props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        );
    }
}

export default App;