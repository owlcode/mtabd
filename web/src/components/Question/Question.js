import React, {Component} from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <Modal trigger={this.props.children} basic size='small'>
                <Header icon='archive' content={this.state.title}/>
                <Modal.Content>
                    <p>{this.state.text}</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted>
                        <Icon name='remove'/>
                        No
                    </Button>
                    <Button color='green' inverted>
                        <Icon name='checkmark'/>
                        Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }
}

export default Question;