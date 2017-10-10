import React, {Component} from 'react';
import ArticleForm from './ArticleForm'
import ArticleList from './ArticleList'
import Article from './Article'

class UserPage extends Component {
    sections = [
        {
            key: 'Home',
            content: 'poMocny',
            href: '/',
            link: true

        }, {
            key: 'Store',
            content: 'Atrykuły',
            href: '/article',
            link: true,
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
        return (
            <div className="ArticlePage">
                <ArticleList />
                <ArticleForm />
                <Article/>
            </div>
    )
    }
    }

    export default UserPage;