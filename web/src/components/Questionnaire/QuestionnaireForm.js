import React, {Component} from 'react';

class QuestionnaireForm extends Component {
    constructor() {
        super();
        this.state = {
            qname: '',
            question: [{name: ''}],
            answer: [{name: ''}],
        };
    }

    handleNameChange = (evt) => {
        this.setState({qname: evt.target.value});
    }

    handleQuestionNameChange = (idx) => (evt) => {
        const newQuestions = this.state.question.map((question, sidx) => {
            if (idx !== sidx) return question;
            return {...question, name: evt.target.value};
        });

        this.setState({shareholders: newQuestions});
    }

    handleAnswerNameChange = (idx) => (evt) => {
        const newAnswers = this.state.question.map((answer, sidx) => {
            if (idx !== sidx) return answer;
            return {...answer, name: evt.target.value};
        });

        this.setState({answer: newAnswers});
    }

    handleSubmit = (evt) => {
        const {qname, question, answer} = this.state;
        alert(`Incorporated: ${qname} with ${question.length} questions and ${answer.length} answers`);
    }
    handleAddQuestion = () => {
        this.setState({question: this.state.question.concat([{name: ''}])});
    }

    handleAddAnswer = () => {
        this.setState({answer: this.state.answer.concat([{name: ''}])});
    }

    handleRemoveQuestion = (idx) => () => {
        this.setState({question: this.state.question.filter((s, sidx) => idx !== sidx)});
    }
    handleRemoveAnswer = (idx) => () => {
        this.setState({answer: this.state.answer.filter((s, sidx) => idx !== sidx)});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Company name, e.g. Magic Everywhere LLC"
                    value={this.state.qname}
                    onChange={this.handleNameChange}
                />

                <h4>Shareholders</h4>

                {this.state.question.map((question, idx) => (
                    <div className="question" key={idx.id}>
                        <input
                            type="text"
                            placeholder={`Pytanie #${idx + 1} name`}
                            value={question.name}
                            onChange={this.handleQuestionNameChange(idx)}
                        />
                        <button type="button" onClick={this.handleRemoveQuestion(idx)} className="small">-s
                        </button>
                        {this.state.answer.map((answer, idy) => (
                            <div className="answer" key={idx.id*idy.id}>
                                <input
                                    type="text"
                                    placeholder={`answer #${idy + 1} `}
                                    value={answer.name}
                                    onChange={this.handleAnswerNameChange(idy)}
                                />

                                <button type="button" onClick={this.handleRemoveAnswer(idy)} className="small">-q
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
                <button type="button" onClick={this.handleAddQuestion} className="small">Dodaj pytanie</button>
                <button type="button" onClick={this.handleAddAnswer} className="small">Dodaj odpowiedź</button>
                <button>Wyślij</button>
            </form>
        )
    }
}

export default QuestionnaireForm;