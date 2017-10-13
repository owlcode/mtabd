import React, {Component} from 'react';
import {Header, Icon, Segment, Table} from 'semantic-ui-react';
import {settings} from '../../settings';
import ProductRow from './ProductRow';

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        fetch(settings.api + '/api/product')
            .then(res => res.json())
            .then(content => {
                this.setState({data: content})
            })
    }

    renderSeedList() {
        let list = [];

        this.state.data.forEach(item => {
            list.push(
                <ProductRow {...item} key={item._id}></ProductRow>
            );
        }, this);

        return (list);
    }


    render() {
        if (this.state.data) {
            return (
                <Segment.Group raised>
                    <Segment color="green">
                        <Header as='h2' size='medium'>
                            <Icon name='newspaper'/>
                            <Header.Content>
                                Lista artykułów
                            </Header.Content>
                        </Header>
                    </Segment>
                    <Table>
                        {this.renderSeedList()}
                    </Table>
                </Segment.Group>
            );
        } else {
            return null;
        }
    }
}
export default ProductList;