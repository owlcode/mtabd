import React, {Component} from 'react';

class QuestionnaireQuestion extends Component {
    render() {
        return (
            <form>
                <b>Pytanie nr </b><label>{this.props.qnum}</label><br/>
                <input type="radio" value="1" />{this.props.qA}<br/>
                <input type="radio" value="2" />{this.props.qB}<br/>
                <input type="radio" value="3" />{this.props.qC}<br/>
                <input type="radio" value="4" />{this.props.qD}
            </form>
        );
    }
}
export default QuestionnaireQuestion;
