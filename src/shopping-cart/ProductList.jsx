import React, { Component } from 'react'
import Product from "./Product";

export default class ProductList extends Component {
    renderProdList = () => {
        // const prodList = this.props.prodList;
        // const handleChangeProdDetail = this.props.handleChangeProdDetail;
        // const handleAddCart = this.props.handleAddCart;

        // ES6 Destructuring: Bốc tách trong ES6
        const {prodList, handleChangeProdDetail, handleAddCart} = this.props;
        // Map
        return prodList.map((prod, index) => (
            <div className="col-sm-4" key={index}>
                <Product handleAddCart={handleAddCart} 
                         prod={prod} 
                         handleChangeProdDetail={handleChangeProdDetail} />
            </div>
        ));
    };
    render() {
        return (
            <div className="container danh-sach-san-pham">
                <div className="row">
                    {this.renderProdList()}
                </div>
            </div>
        );
    }
}
