import React, {Component} from 'react';
import Navbar from './Navbar/Navbar';
import {Icon, Label, Menu, Segment, Sidebar} from 'semantic-ui-react'
import {Link} from 'react-router';
import { ToastContainer } from 'react-toastify';
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

    toggleMenu() {
        this.setState({visible: !this.state.visible})
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
                        <Link to='/dashboard'>
                            <Menu.Item name='home'>
                                <Icon name='home'/>
                                Home
                            </Menu.Item>
                        </Link>
                        <Link to='/chat'>
                            <Menu.Item name='chat'>
                                <Label color='teal' circular>24</Label>
                                <Icon name='wechat'/>
                                Chat
                            </Menu.Item>
                        </Link>
                        <Link to='/user'>
                            <Menu.Item name='users'>
                                <Icon name='users'/>
                                Użytkownicy
                            </Menu.Item>
                        </Link>
                        <Link to='/product'>
                            <Menu.Item name='product'>
                                <Icon name='tags'/>
                                Produkty
                            </Menu.Item>
                        </Link>
                    </Sidebar>
                    <Sidebar.Pusher className="SidebarPusher">
                        <Navbar toggleMenu={this.toggleMenu.bind(this)}></Navbar>
                        {this.props.children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
                <ToastContainer
                    position="bottom-right"
                />
            </div>
        );
    }
}

export default App;