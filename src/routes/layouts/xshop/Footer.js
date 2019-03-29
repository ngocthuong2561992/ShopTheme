import React, { Component } from "react";
import thanhtoanantoan from "./images/14thanhtoanantoan.png";
import hethongdaily from "./images/13hethongdaily.png";


class Footer extends Component {
  render() {
    return (
      <div className="rfooter">
        <div className="top" />
        <div className="main">
          <div className="clr10" />
          <div className="info">
            <span style={{ fontSize: "16px" }}>
              <span style={{ color: "#ff0000" }}>
                <strong>XƯỞNG KHUNG TRANH ĐẸP</strong>
              </span>
            </span>
            <br />
            <strong>Hotline: </strong>
            <strong>08 667 92 688</strong>
            <br />
            <strong>Đi động:&nbsp;0931 989 195</strong>
            <br />
            <strong>Email:</strong> xuongkhungdep@gmail.com
            <br />
            <strong>Website:</strong>{" "}
            <strong>
              <a href="http://www.xuongkhungdep.com">www.xuongkhungdep.com</a>
            </strong>
            <br />
            <strong>Add: </strong>Số 95 Trần Phú, Phường 04, Quận 05, TP. Hồ Chí
            Minh
            <div className="clr10" />
          </div>
          <div className="social">
            <div className="clr10" />
            <ul className="textbottom">
              <li>
                <img src={thanhtoanantoan} alt="THANH TOÁN AN TOÀN" />
                <p>
                  <strong>THANH TOÁN AN TOÀN</strong>
                </p>{" "}
                <p>Thanh toán qua Paypal</p>
              </li>
              <li>
                <img src={hethongdaily} alt="HỆ THỐNG ĐẠI LÝ" />
                <p>
                  <strong>HỆ THỐNG ĐẠI LÝ</strong>
                </p>{" "}
                <p>Hơn 100 đại lý toàn quốc</p>
              </li>
            </ul>
            <div className="clr10" />
            <div className="clr10" />
            <p className="copyright">
              ©{" "}
              <a href="http://kingweb.vn" title="Thiết kế web">
                Thiết kế web
              </a>{" "}
              <span>
                <a href="http://3trieu.com" title="Thiết kế web bán hàng">
                  Đại Thống
                </a>
              </span>
            </p>
          </div>
          <div className="clr10" />
          <div className="clr10" />
          <ul className="menubottom">
            <li>
              <a href="./" title="Trang chủ">
                Trang chủ
              </a>
            </li>
            <li>
              <a href="gioi-thieu" title="Giới thiệu">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="tin-tuc-tu-van" title="Tin tức tư vấn">
                Tin tức tư vấn
              </a>
            </li>
            <li>
              <a href="khuyen-mai" title="Khuyến mãi">
                Khuyến mãi
              </a>
            </li>
            <li>
              <a href="huong-dan-dat-hang" title="Hướng dẫn đặt hàng">
                Hướng dẫn đặt hàng
              </a>
            </li>
            <li>
              <a href="xuong-khung-dep" title="Xưởng Khung Đẹp">
                Xưởng Khung Đẹp
              </a>
            </li>
            <li>
              <a href="#" title="Victoria">
                Victoria
              </a>
            </li>
            <li>
              <a href="#" title="Grand macherita">
                Grand macherita
              </a>
            </li>
            <li>
              <a href="#" title="New world">
                New world
              </a>
            </li>
            <li>
              <a href="#" title="Dong Khanh Hotel">
                Dong Khanh Hotel
              </a>
            </li>
            <li>
              <a href="#" title="Caravelly Hotel">
                Caravelly Hotel
              </a>
            </li>
            <li>
              <a href="#" title="Legend Hotel">
                Legend Hotel
              </a>
            </li>
            <li>
              <a href="bo-khung-tranh-anh" title="Bộ Khung Tranh Ảnh">
                Bộ Khung Tranh Ảnh
              </a>
            </li>
            <li>
              <a href="khung-tranh-go-tong-hop" title="Khung Tranh Composite">
                Khung Tranh Composite
              </a>
            </li>
            <li>
              <a href="khung-tranh-go" title="Khung Tranh Gỗ">
                Khung Tranh Gỗ
              </a>
            </li>
            <li>
              <a href="dong-khung-tranh" title="Đóng Khung Tranh">
                Đóng Khung Tranh
              </a>
            </li>
            <li>
              <a href="khung-anh" title="Khung Ảnh, Khung Hình">
                Khung Ảnh, Khung Hình
              </a>
            </li>
            <li>
              <a href="tranh-in" title="Tranh In">
                Tranh In
              </a>
            </li>
            <li>
              <a href="may-dong-khung-tranh" title="Máy Đóng Khung Tranh">
                Máy Đóng Khung Tranh
              </a>
            </li>
            <li>
              <a
                href="phu-kien-dong-khung-tranh"
                title="Vật Tư Phụ Kiện Khung Tranh"
              >
                Vật Tư Phụ Kiện Khung Tranh
              </a>
            </li>
            <li>
              <a href="doi-tac" title="Đối tác">
                Đối tác
              </a>
            </li>
            <li>
              <a href="lien-he" title="Liên hệ">
                Liên hệ
              </a>
            </li>
          </ul>
          <div className="clr10" />
        </div>
        <div className="slogan">
          <div className="main">
            <p>
              Xưởng Khung Tranh Giá rẻ, Chất lượng tốt nhất&nbsp;hàng đầu Việt
              Nam - Mang cả thế giới tranh vào căn nhà bạn
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
