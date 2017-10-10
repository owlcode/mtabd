import React, {Component} from 'react';
class Questionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            preview: false
        }
    }

    render() {
        var segment = [];
        var seglen = this.props.segment.length;

        for(var i = 0; i<seglen; i++)
        {
            //segment.push(<label>{this.props.segment[i].question}</label>;
            //console.log(<div><label>{this.props.segment[i].question}</label><Radio label={this.props.segment[i].answers[0]}/><Radio label={this.props.segment[i].answers[1]}/><Radio label={this.props.segment[i].answers[2]}/></div>);
            segment.push('pytanie '+ (i+1) + '. ' + this.props.segment[i].question);
            segment.push(<br/>);

            var anslen = this.props.segment[i].answers.length;
            for(var j = 0; j< anslen; j++)
            {
                //segment['ans'+i+j] = <Radio label={this.props.segment[i].answers[j]}/>;
                //segment.push(<Radio label={this.props.segment[i].answers[j]}/>);
                segment.push('odpowiedz ' + (j+1) + '. ' + this.props.segment[i].answers[j]);
                segment.push(<br/>);
            }
        }
        return (
            <div>
                <p>
                    {this.props.qname}
                </p>
                <form>
                    {segment}
                </form>
            </div>

        );
    }
}
export default Questionnaire;
