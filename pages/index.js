/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getHomePage } from "./lib/home-page";
import Layout, { siteTitle } from "../components/layout";

export async function getStaticProps() {
  let postData = await getHomePage();
  return {
    props: { postData },
  };
}

export default function Home({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main id="main">
        <section id="idx_mainvisual">
          <div className="inner">
            <div class="mainv_cont">
              <h2>MÀN HÌNH VSP ESPORT GAMING 2K QHD 27INCH - VG273Q</h2>
              <div class="section">
                <p class="mainv_txt">
                  A + Front grade tempered glass 0,5mm Thickness (Mặt trước và
                  bên kính cường lực)
                  <br />
                  Max CPU Cooler Heigh:225mm
                  <br />
                  Max VGA card Leigth: 150mm
                  <br />
                  Mainboard support: Mini-ATX/M-ATX/ITX
                  <br />
                  Kích thước Case: 270x168x350mm
                </p>
              </div>
              <div class="btn_more">
                <a href="#">Xem Thêm</a>
              </div>
            </div>
          </div>
        </section>
        <section id="idx_product">
          <div class="inner">
            <ul class="product_slider slider">
              <li class="item">
                <div class="product_card">
                  <figure class="product_img">
                    <img
                      src="images/product_img01.jpg"
                      alt="MÀN HÌNH VSP ESPORT GAMING 2K QHD 27INCH - VG273Q"
                    />
                  </figure>
                  <div class="card_cont">
                    <h4>MÀN HÌNH VSP ESPORT GAMING 2K QHD 27INCH - VG273Q</h4>
                    <p class="p_txt">
                      27INCH ESPORT GAMING VG273Q, MAX 165HZ, 1MS(MPRT) , FREE
                      SYNC, HDR
                    </p>
                    <p class="btn_details">
                      <a href="#">Xem chi tiết</a>
                    </p>
                  </div>
                </div>
                <div class="product_card">
                  <figure class="product_img">
                    <img
                      src="images/product_img03.jpg"
                      alt="MÀN HÌNH VSP ESPORT GAMING 2K QHD 27INCH - VG273Q"
                    />
                  </figure>
                  <div class="card_cont">
                    <h4>MÀN HÌNH VSP ESPORT GAMING 2K QHD 27INCH - VG273Q</h4>
                    <p class="p_txt">
                      27INCH ESPORT GAMING VG273Q, MAX 165HZ, 1MS(MPRT) , FREE
                      SYNC, HDR
                    </p>
                    <p class="btn_details">
                      <a href="#">Xem chi tiết</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="idx_banner">
          <div class="inner">
            <figure>
              <img src="images/banner01.jpg" alt="" />
            </figure>
            <figure>
              <img src="images/banner02.jpg" alt="" />
            </figure>
          </div>
        </section>

        <section id="idx_video">
          <div class="inner">
            <ul class="video_list">
              <li>
                <div class="video_fr">
                  <img
                    src="images/video.jpg"
                    alt="CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY"
                  />
                </div>
                <h4>CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY</h4>
              </li>
              <li>
                <div class="video_fr">
                  <img
                    src="images/video.jpg"
                    alt="CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY"
                  />
                </div>
                <h4>CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY</h4>
              </li>
              <li>
                <div class="video_fr">
                  <img
                    src="images/video.jpg"
                    alt="CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY"
                  />
                </div>
                <h4>CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY</h4>
              </li>
              <li>
                <div class="video_fr">
                  <img
                    src="images/video.jpg"
                    alt="CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY"
                  />
                </div>
                <h4>CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY</h4>
              </li>
              <li>
                <div class="video_fr">
                  <img
                    src="images/video.jpg"
                    alt="CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY"
                  />
                </div>
                <h4>CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY</h4>
              </li>
              <li>
                <div class="video_fr">
                  <img
                    src="images/video.jpg"
                    alt="CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY"
                  />
                </div>
                <h4>CHƯƠNG TRÌNH ƯU ĐÃI THÁNG 7 VUI HÈ LÊN MÁY</h4>
              </li>
            </ul>
          </div>
        </section>
        <section id="idx_news">
          <div class="inner">
            <div class="news_cont">
              <div class="news_left">
                <a href="#">
                  <div class="news_card">
                    <figure>
                      <img
                        src="images/news_img01.jpg"
                        alt="XBOX THẾ HỆ TIẾP THEO CỦA MICROSOFT CÓ ĐỒ HỌA 8K, HỖ TRỢ "
                      />
                    </figure>
                    <div class="section">
                      <h4 class="news_ttl">
                        XBOX THẾ HỆ TIẾP THEO CỦA MICROSOFT CÓ ĐỒ HỌA 8K, HỖ TRỢ
                        ...
                      </h4>
                      <p class="meta">
                        <span>17:18, 02/08/2020</span>
                        <span>Tin Thị Trường</span>
                      </p>
                      <p class="news_txt">
                        AMD không chỉ đang tiến bước mạnh mẽ với vi xử lý Ryzen.
                        Có những dấu hiệu cho thấy thành công lớn sắp đến với họ
                        trên &quot;chiến trường&quot; card đồ họa, khi mà công
                        ty này đã lần đầu tiên trong vòng nửa thập kỷ trở lại
                        đây đánh bại được đối thủ Nvidia trên thị trường GPU nói
                        chung - và trên thị trường card đồ họa rời, AMD cũng đạt
                        được những con số tăng trưởng lớn.
                      </p>
                    </div>
                  </div>
                  <p class="news_details">Xem chi tiết</p>
                </a>
              </div>
              <div class="news_right">
                <a href="#">
                  <dl>
                    <dt>
                      <img src="images/news_img02.jpg" alt="" />
                    </dt>
                    <dd>
                      <div class="section">
                        <h4 class="news_ttl">
                          MỘT CHIẾC PC CẤU HÌNH TƯƠNG TỰ MAC PRO 6.000 USD SẼ CÓ
                          GIÁ BAO ...
                        </h4>
                        <p class="meta">
                          <span>17:18, 02/08/2020</span>
                          <span>Tin Thị Trường</span>
                        </p>
                      </div>
                      <p class="news_details">Xem chi tiết</p>
                    </dd>
                  </dl>
                </a>
                <a href="#">
                  <dl>
                    <dt>
                      <img src="images/news_img02.jpg" alt="" />
                    </dt>
                    <dd>
                      <div class="section">
                        <h4 class="news_ttl">
                          MỘT CHIẾC PC CẤU HÌNH TƯƠNG TỰ MAC PRO 6.000 USD SẼ CÓ
                          GIÁ BAO ...
                        </h4>
                        <p class="meta">
                          <span>17:18, 02/08/2020</span>
                          <span>Tin Thị Trường</span>
                        </p>
                      </div>
                      <p class="news_details">Xem chi tiết</p>
                    </dd>
                  </dl>
                </a>
                <a href="#">
                  <dl>
                    <dt>
                      <img src="images/news_img02.jpg" alt="" />
                    </dt>
                    <dd>
                      <div class="section">
                        <h4 class="news_ttl">
                          MỘT CHIẾC PC CẤU HÌNH TƯƠNG TỰ MAC PRO 6.000 USD SẼ CÓ
                          GIÁ BAO ...
                        </h4>
                        <p class="meta">
                          <span>17:18, 02/08/2020</span>
                          <span>Tin Thị Trường</span>
                        </p>
                      </div>
                      <p class="news_details">Xem chi tiết</p>
                    </dd>
                  </dl>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="idx_contact">
          <figure class="contact_img">
            <img src="images/contact_img.jpg" alt="" />
          </figure>
          <div class="contact_cont">
            <div class="box_left">
              <h4 class="c_ttl">LIÊN HỆ NGAY ĐỂ ĐỒNG HÀNH CÙNG CHÚNG TÔI</h4>
              <p class="c_txt">
                Nếu bạn có nhu cầu liên hệ với VSPTECH, vui lòng điền đầy đủ
                thông tin theo form dưới đây.
              </p>
              <div class="c_form">
                <ul>
                  <li>
                    <input
                      class="input_txt"
                      type="text"
                      placeholder="Họ tên *"
                    />
                  </li>
                  <li>
                    <input
                      class="input_txt"
                      type="text"
                      placeholder="Địa chỉ"
                    />
                  </li>
                  <li>
                    <input
                      class="input_txt"
                      type="text"
                      placeholder="Email *"
                    />
                  </li>
                  <li>
                    <input
                      class="input_txt"
                      type="text"
                      placeholder="Điện thoại *"
                    />
                  </li>
                  <li class="c-texterea">
                    <textarea
                      class="textarea_txt"
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="Nội dung liên hệ *"
                    ></textarea>
                  </li>
                  <li class="cap">
                    <p class="cap-box">
                      <input
                        class="input_cap"
                        type="text"
                        placeholder="Mã bảo mật *"
                      />
                      <span class="cap-code">
                        <img src="images/cap.jpg" alt="" width="88" />
                      </span>
                    </p>
                    <p class="btn_submit">
                      <input type="submit" name="" id="" value="Gửi" />
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="box_right">
              <h4 class="c_ttl">ĐỊA CHỈ MUA HÀNG</h4>
              <ul class="box_select">
                <li>
                  <select name="" id="">
                    <option value="vietnam">Việt Nam</option>
                  </select>
                </li>
                <li>
                  <select name="" id="">
                    <option value="hochiminh">Thành Phố Hồ Chí Minh</option>
                  </select>
                </li>
              </ul>
              <div class="address">
                <div class="section">
                  <p class="c_txt02">Công ty: TIN HỌC NGÔI SAO</p>
                  <p class="c_txt02">
                    Địa chỉ: 185-189 Âu Cơ, P.14, Q.11, TP.Hồ Chí Minh
                    <br />
                    Email: hotrovsp@vsp.vn
                    <br />
                    Hotline: 1900xxxx
                  </p>
                </div>
                <div class="section">
                  <p class="c_txt02">Công ty: TIN HỌC NGÔI SAO</p>
                  <p class="c_txt02">
                    Địa chỉ: 185-189 Âu Cơ, P.14, Q.11, TP.Hồ Chí Minh
                    <br />
                    Email: hotrovsp@vsp.vn
                    <br />
                    Hotline: 1900xxxx
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="location">
            <ul>
              <li>
                <i></i>TRỤ SỞ CHÍNH: 44A Lữ Gia, Phường 15, Quận 11, TP. Hồ Chí
                Minh
              </li>
              <li>
                <i></i>TRUNG TÂM BẢO HÀNH VÀ DỊCH VỤ KHÁCH HÀNG : 185 - 189 Âu
                Cơ, Phường 14, quận 11, TP. Hồ Chí Minh
              </li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}
