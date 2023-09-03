import React, { Component } from "react";
import "./BookingTicket.css";
import BookingInfo from "./BookingInfo";
import HangGhe from "./HangGhe";
import listSeatData from "../Data/danhSachGhe.json";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return listSeatData.map((hangGhe, index) => {
      return (
        <div className="" key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="bookingMovie">
        <div className="overlay">
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4 text-uppercase">
                  Đặt vé xem phim
                </div>
                <div className="fs-3 mt-3 text-white">Màn hình</div>
                <div className="d-flex justify-content-center">
                  <div className="screen"></div>
                </div>
                <div className="d-flex flex-column justify-content-center mt-2">
                  {this.renderHangGhe()};
                </div>
              </div>
              <div className="col-4 text-center">
                <div className="text-warning display-4 text-uppercase">
                  Danh sách ghế bạn chọn
                </div>
                <BookingInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
