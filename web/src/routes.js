import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Dashboard from './components/Dashboard/Dashboard';
import UserPage from './components/User/UserPage';
import CommentPage from './components/Comment/CommentPage';
import LoginPage from './components/Login/LoginPage';
import App from './components/App';
import ChatPage from "./components/Chat/ChatPage";
import SingleChat from "./components/Chat/SingleChat";
import ProductPage from "./components/Product/ProductPage";
import DealPage from "./components/Deal/DealPage";

const Routes = (props) => (
    <Router {...props}>

        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="dashboard" component={Dashboard}/>
            <Route path="user" component={UserPage} />
            <Route path="deal" component={DealPage} />
            <Route path="product" component={ProductPage}/>
            <Route path="comment" component={CommentPage}/>
            <Route path="login" component={LoginPage}/>
            <Route path="chat">
                <IndexRoute component={ChatPage}/>
                <Route path="single/:talkId" component={SingleChat}/>
            </Route>
        </Route>
    </Router>
);

export default Routes;