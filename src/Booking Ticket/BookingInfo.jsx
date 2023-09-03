import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../redux/actions/BookingTicketAction";

class BookingInfo extends Component {
  render() {
    return (
      <div className="">
        <div className="my-4 text-white d-flex flex-column align-items-start">
          <div className="d-flex align-items-center">
            <button className="gheDuocChon"></button>{" "}
            <span className="fs-3 ms-3 ">Ghế đã đặt</span>
          </div>
          <div className="d-flex align-items-center">
            <button className="gheDangChon"></button>{" "}
            <span className="fs-3 ms-3 ">Ghế đang đặt</span>
          </div>
          <div className="d-flex align-items-center">
            <button className="gheChuaDat"></button>{" "}
            <span className="fs-3 ms-3 ">Ghế chưa đặt</span>
          </div>
        </div>

        <div classname="mt-3">
          <div className="table-responsive">
            <table className="table table-dark ">
              <thead>
                <tr>
                  <th scope="col">Số ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Hủy</th>
                </tr>
              </thead>
              <tbody className="text-warning">
                {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
                  return (
                    <tr key={index}>
                      
                      <td>{gheDangDat.soGhe}</td>
                      <td>{gheDangDat.gia}</td>
                      <td>
                        <button className="btn btn-danger border-3" onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                        }}>Hủy</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat,
  };
};

export default connect(mapStateToProps)(BookingInfo);
