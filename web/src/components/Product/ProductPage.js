import React, {Component} from 'react';
import Product from "./Product";

class ProductPage extends Component {
    sections = [
        {
            key: 'Home',
            content: 'mta.bd',
            href: '/',
            link: true

        }, {
            key: 'Store',
            content: 'Produkty',
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
            <div className="ProductPage">
                <Product/>
            </div>
        )
    }
}

export default ProductPage;