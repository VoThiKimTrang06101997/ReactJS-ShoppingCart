import React, { Component } from "react";

export default class ModalCart extends Component {
  renderCartList = () => {
    const { carList } = this.props;
    console.log(carList)
    // Dùng Map để Render
    return carList.map((cart, index) => (
        <tr className="card-item" key={index}>
          <td>{index + 1}</td>
          <td>{cart.tenSP}</td>
          <td>
            <img src={cart.hinhAnh} width="50" alt="" />
          </td>
          <td>
            <button onClick={()=>this.props.handleTangGiamSoLuong(cart.maSP, false)}>-</button>
            {cart.soLuong}
            <button onClick={()=>this.props.handleTangGiamSoLuong(cart.maSP, true)}>+</button>
          </td>
          <td>{cart.giaBan.toLocaleString()}</td>
          <td>{(cart.soLuong * cart.giaBan).toLocaleString()}</td>
          <td>
            <button className="btn btn-danger" 
            onClick={() => this.props.handleDeleteCart(cart.maSP)}
            >Delete</button>
          </td>
        </tr>
      ));
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            role="document"
            style={{ maxWidth: 1000 }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCartList()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tổng Tiền</td>
                      <td>
                        {this.props.carList.reduce((tongTien, cart, index) =>{
                          return tongTien += cart.soLuong * cart.giaBan
                        },0).toLocaleString()
                        }
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
