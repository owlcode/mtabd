import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Dashboard from './components/Dashboard/Dashboard';
import UserPage from './components/User/UserPage';
import ArticlePage from './components/Article/ArticlePage';
import CommentPage from './components/Comment/CommentPage';
import QuestionnairePage from './components/Questionnaire/QuestionnairePage';
import App from './components/App';
import ChatPage from "./components/Chat/ChatPage";
import SingleChat from "./components/Chat/SingleChat";

const Routes = (props) => (
    <Router {...props}>

        <Route path="/" component={App}>
            <IndexRoute component={Dashboard}/>
            <Route path="user" component={UserPage}>
                {/*<Route path="add" component={UserForm} />*/}
            </Route>
            <Route path="article" component={ArticlePage}/>
            <Route path="comment" component={CommentPage}/>
            <Route path="questionnaire" component={QuestionnairePage}/>
            <Route path="chat">
                <IndexRoute component={ChatPage}/>
                <Route path="single/:talkId" component={SingleChat}/>
            </Route>
        </Route>
    </Router>
);

export default Routes;