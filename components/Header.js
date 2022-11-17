/* eslint-disable @next/next/no-img-element */

import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <h1 id="top">
        <a href="#">
          <img src="./images/logo.png" alt="vsp" width="106" />
        </a>
      </h1>
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="overlay">
        <div className="menu">
          <ul id="gnavi">
            <li>
              <a href="./">TRANG CHỦ</a>
            </li>
            <li>
              <a href="https://vsptech.vn/chung-toi-la-ai.html">GIỚI THIỆU</a>
            </li>
            <li>
              <a href="https://vsptech.vn/dich-vu.html">DỊCH VỤ</a>
            </li>
            <li>
            <Link href="/product">Product</Link>
            </li>
            <li>
              <a href="#">TIN TỨC</a>
            </li>
            <li>
              <a href="https://vsptech.vn/lien-he.html">LIÊN HỆ</a>
            </li>
            <li className="only_sp">
              <p className="contact">
                <a href="tel:1900633675">
                  <i></i>1900 633 675
                </a>
              </p>
              <form action="https://vsptech.vn/san-pham.html" method="post">
                <p className="btn_search">
                  <span>
                    <i></i>
                  </span>
                  <input type="text" placeholder="Nhập từ khóa" />
                </p>
              </form>
            </li>
          </ul>
        </div>
        <div className="h_cont">
          <p className="contact">
            <a href="tel:1900633675">
              <i></i>1900 633 675
            </a>
          </p>
          <form action="https://vsptech.vn/san-pham.html" method="post">
            <p className="btn_search">
              <span>
                <i></i>
              </span>
              <input type="text" placeholder="Nhập từ khóa" />
            </p>
          </form>
          <p className="btn_translate">
            <i></i>
            <select name="cars" id="cars">
              <option value="tiengviet">Tiếng Việt</option>
            </select>
          </p>
        </div>
      </div>
    </header>
  );
}
