/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="f_cont">
        <div className="box_left">
          <div className="f_link">
            <p className="f_ttl01">Dịch vụ & CSKH</p>
            <ul>
              <li>
                <a href="#">Chính sách bảo hành</a>
              </li>
              <li>
                <a href="#">Thông tin liên hệ bảo hành</a>
              </li>
              <li>
                <a href="#">Tải về Driver</a>
              </li>
              <li>
                <a href="#">Yêu cầu hỗ trợ tài liệu bán hàng</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="f_link">
            <p className="f_ttl01">Thông tin Công Ty</p>
            <ul>
              <li>
                <a href="https://vsptech.vn/chung-toi-la-ai.html">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
              <li>
                <a href="#">Cơ hội nghề nghiệp</a>
              </li>
              <li>
                <a href="https://vsptech.vn/lien-he.html">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box_center">
          <dl>
            <dt>Tổng đài Hỗ Trợ 24/24</dt>
            <dd>
              <p>Chăm sóc khách hàng: (028) 7300 6586</p>
              <p> Hỗ trợ kỹ thuật: 1900 633 675</p>
            </dd>
          </dl>
          <dl>
            <dt>Trung tâm Bảo hành & Dịch vụ Khách Hàng</dt>
            <dd>
              <p>- TPHCM:</p>
              <p>185-189 Âu Cơ, P.14, Q.11, TP.Hồ Chí Minh</p>
              <p>Email: hotrovsp@vsp.vn</p>
            </dd>
          </dl>
          <dl>
            <dt>Tại Hà Nội:</dt>
            <dd>
              <p>44,Galaxy6, TSQ Vạn Phúc, 69 Tố Hữu, Hà Đông</p>
              <p>ĐT: 097 4672668</p>
            </dd>
          </dl>
        </div>
        <div className="box_right">
          <div className="social">
            <p className="f_ttl02">Cộng đồng</p>
            <ul className="soc_list">
              <li>
                <a href="#" target="_blank">
                  <img src="images/icon_face.png" alt="facebook" width="40" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="images/icon_insta.png" alt="instagram" width="40" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="images/icon_youtube.png" alt="youtube" width="40" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <img src="images/icon_in.png" alt="in" width="40" />
                </a>
              </li>
            </ul>
          </div>
          <div className="logo_box">
            <p className="f_ttl02">CTY TNHH CÔNG NGHỆ THÔNG TIN TECH VISION</p>
            <p className="f_logo">
              <a href="./">
                <img src="images/logo_f.png" alt="VSPTECH" width="102" />
              </a>
            </p>
            <address>
              Giấy chứng nhận ĐKKD số: 0312480136
              <br />
              do Sở KH & ĐT TPHCM cấp lần đầu ngày 27/09/2013
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}
