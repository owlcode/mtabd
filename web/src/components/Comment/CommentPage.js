import React, {Component} from 'react';
import Comment from './Comment'
import CommentList from './CommentList'

class CommentPage extends Component {
    render() {
        return (
            <div className="CommentPage">
                <Comment />
                <CommentList /> 
            </div>
        )
    }
}

export default CommentPage;