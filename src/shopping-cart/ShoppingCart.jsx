import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ModalCart from "./ModalCart";

export default class ShoppingCart extends Component {
    prodList = [
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: 'AMOLED, 6.2", Full HD+',
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./img/vsphone.jpg",
        },

        {
            maSP: 2,
            tenSP: "Meizu 16Xs",
            manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
            heDieuHanh: "Android 9.0 (Pie); Flyme",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 7600000,
            hinhAnh: "./img/meizuphone.jpg",
        },

        {
            maSP: 3,
            tenSP: "Iphone XS Max",
            manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./img/applephone.jpg",
        },
    ];
    state = {
        prodDetail: [
            {
                maSP: 1,
                tenSP: "VinSmart Live",
                manHinh: 'AMOLED, 6.2", Full HD+',
                heDieuHanh: "Android 9.0 (Pie)",
                cameraTruoc: "20 MP",
                cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
                ram: "4 GB",
                rom: "64 GB",
                giaBan: 5700000,
                hinhAnh: "./img/vsphone.jpg",
            },

            {
                maSP: 2,
                tenSP: "Meizu 16Xs",
                manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
                heDieuHanh: "Android 9.0 (Pie); Flyme",
                cameraTruoc: "20 MP",
                cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
                ram: "4 GB",
                rom: "64 GB",
                giaBan: 7600000,
                hinhAnh: "./img/meizuphone.jpg",
            },

            {
                maSP: 3,
                tenSP: "Iphone XS Max",
                manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
                heDieuHanh: "iOS 12",
                cameraSau: "Chính 12 MP & Phụ 12 MP",
                cameraTruoc: "7 MP",
                ram: "4 GB",
                rom: "64 GB",
                giaBan: 27000000,
                hinhAnh: "./img/applephone.jpg",
            },
        ],
        carList: [],
    };
   handleDeleteCart = (maSP) => {
       const {carList} = this.state;
       const index = carList.findIndex((cart) => cart.maSP === maSP);
       if(index !== -1) {
           carList.splice(index,1);
           //setState
           this.setState({
            //    carList: carList,
               carList,
           });
       }
   };
   handleTangGiamSoLuong = (maSP, tangGiam) => {
        const {carList} = this.state;
        const index = carList.findIndex((cart) => cart.maSP === maSP);
        let tangGiamCartList = [];
        if(tangGiam) {
            carList[index].soLuong += 1;
        } else {
            carList[index].soLuong -= 1;
        }
        // setState
        this.setState({
            tangGiamCartList,
        });
   };
    handleAddCart = (prod) => {
        const {carList} = this.state;
        const index = carList.findIndex((cart) => cart.maSP === prod.maSP);
        let newCartList = [];
        if(index === -1) {
            // Thêm phần tử mới vào Mảng
            const newCart = {...prod, soLuong: 1};
            newCartList = [...this.state.carList, newCart];
        // => ... là Copy Phần tử đã có phía trước rồi;   ,prod: thêm tiếp phần tử mới vào.

        /**
         *  Ví dụ 1: ArrayA = [1,2,3];
                     ArrayB = [...ArrayA];
                => thì Array B sẽ copy các phần tử đã có của Array A.
            Ví dụ 2: ArrayA = [1,2,3];
                     ArrayB = [...ArrayA, 4];
                => thì Array B sẽ copy các phần tử đã có của Array A và thêm tiếp vào phần tử mới là 4.
                => Array B sẽ xuất ra Mảng là: ArrayB = [1,2,3,4];
         */
        } else {
            // Tăng số lượng sản phẩm.
            carList[index].soLuong += 1;
            newCartList = carList;
        }
        
        // setState
        this.setState({
            carList: newCartList,
        });
    };
    handleChangeProdDetail = (prodDetail) => {
        console.log("prodDetail", prodDetail);
        // setState
        this.setState({
            // prodDetail: prodDetail,
            prodDetail,   // ES6 Object Literal
        });
    };
    render() {
        return (
            <section className="container">
                <h3 className="title text-center">Bài tập giỏ hàng</h3>
                <div className="container text-center my-2">
                    <button
                        className="btn btn-danger "
                        data-toggle="modal"
                        data-target="#modelId">
                        Giỏ hàng (0)
                    </button>
                </div>
                <ProductList handleChangeProdDetail={this.handleChangeProdDetail} 
                             prodList={this.prodList} 
                             handleAddCart={this.handleAddCart}/>
                <ModalCart carList={this.state.carList}
                           handleDeleteCart={this.handleDeleteCart} 
                           handleTangGiamSoLuong={this.handleTangGiamSoLuong}/>
                <ProductDetail prodDetail={this.state.prodDetail} />
            </section>
        );
    }
}
