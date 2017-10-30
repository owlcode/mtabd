import React, {Component} from 'react';
import Navbar from './Navbar/Navbar';
import {Icon, Label, Menu, Segment, Sidebar} from 'semantic-ui-react'
import {Link} from 'react-router';
import {ToastContainer} from 'react-toastify';
import Memory from "../Library/Memory";
import {settings} from "../settings";
import LoginPage from "./Login/LoginPage";

class App extends Component {
    state = {
        visible: true,
        loggedIn: false,
        user: {},
    };

    render() {
        const {visible} = this.state;
        let content;

        if (this.state.loggedIn) {
            content = <Sidebar.Pushable as={Segment} className="fullScreen">
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
                    <Link to='/deal'>
                        <Menu.Item name='deal'>
                            <Label color='red' circular>5</Label>
                            <Icon name='cube'/>
                            Deal
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
                            <Icon name='spy'/>
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
                    <Navbar toggleMenu={() => {
                        this.setState({visible: !this.state.visible})
                    }}></Navbar>
                    {this.props.children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        } else {
            content = <LoginPage onSubmit={data => {
                this.setState({loggedIn: true});
                fetch(settings.api + '/api/user/random')
                    .then(res => res.json())
                    .then((user) => {
                        Memory.save('user', user);
                        this.setState({user});
                    })
                    .catch(err => console.error(err));
            }}/>
        }

        return (
            <div className="App">
                {content}
                <ToastContainer
                    position="bottom-right"
                />
            </div>
        );
    }
}

export default App;