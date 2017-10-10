import React, {Component} from 'react';
import QuestionnaireList from './QuestionnaireList'
import QuestionnaireForm from './QuestionnaireForm'

class QuestionnairePage extends Component{
    sections = [
        {
            key: 'Home',
            content: 'poMocny',
            href: '/',
            link: true

        }, {
            key: 'Store',
            content: 'Kwestionariusze',
            href: '/questionnaire',
            link: true,
            active: true
        }
    ];
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
        return(
          <div className="QuestionnairePage">
              <QuestionnaireForm key={this._id}/>
              <QuestionnaireList/>
          </div>

        );
    }
}
export default QuestionnairePage;