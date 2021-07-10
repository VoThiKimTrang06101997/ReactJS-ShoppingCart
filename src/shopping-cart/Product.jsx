import React, { Component } from 'react'

export default class Product extends Component {
    handleClick =() => {
        const handleChangeProdDetail = this.props.handleChangeProdDetail;
        const prodDetail = this.props.prod;
        handleChangeProdDetail(prodDetail);
    }
    addCart = () => {
        const {handleAddCart, prod} = this.props;
        handleAddCart(prod);
    }
    render() {
        const prod =this.props.prod;
        return (
            <div>
                <div className="card">
                    <img className="card-img-top" src={prod.hinhAnh} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title">{prod.tenSP}</h4>
                        <button className="btn btn-success" onClick={this.handleClick}>Chi tiết</button>
                        <button className="btn btn-danger" onClick={this.addCart}>Thêm giỏ hàng</button>
                    </div>
                </div>
            </div>
        );
    }
}

