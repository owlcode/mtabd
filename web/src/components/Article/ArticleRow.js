import React, {Component} from 'react';
import {Table, Image} from 'semantic-ui-react';
import {settings} from "../../settings";

class ArticleRow extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    remove(props) {
        fetch(settings.api + '/api/article', {
            method: 'delete',
            protocol: 'https:'
        })
            .then(res => res.json())
            .then(content => {

            });
    }


    render() {
        return (
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        <Image src={this.props.avatar} shape='rounded' size='mini'/>
                    </Table.Cell>
                    <Table.Cell>
                        {this.props.author}
                    </Table.Cell>
                    <Table.Cell>
                        {this.props.title}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        );
    }
}
export default ArticleRow;