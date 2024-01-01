import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link as RouterLink,
} from "react-router-dom";

class Header extends Component {


  render() {
    const url = "#";
    return (
      <>
        <header className="header">
          <div className="notification-bar-area bg-dark">
            <div className="container text-sm-center position-relative">
              <p className="text-white mb-0">
                Enjoy free shipping on all orders within the EU.
              </p>
              <button
                className="topbar-close-btn"
                type="button"
                aria-label="Close Button"
              >
                <i className="icon-rt-close-circle-outline"></i>
              </button>
            </div>
          </div>

          <div className="header-midel-area border-bottom-1 py-2 py-lg-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-4 col-lg-5">
                  <div className="d-flex gap-2 gap-sm-5">
                    <input
                      type="text"
                      placeholder="Aramak istediğiniz ürünün adını giriniz."
                    />
                    <button
                      className="header-action-item align-items-center d-flex gap-2"
                      title="Search"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-search"
                    >
                      <i className="icon-rt-loupe"></i>
                      {/* <span className="fs-14 d-none d-sm-block">Search</span> */}
                    </button>
                  </div>
                </div>
                <div className="col-4 col-lg-2">
                  <div className="logo text-center">
                    <a href="index.html">
                      <img
                        src={process.env.PUBLIC_URL + "/images/logo/enplus.svg"}
                        height="30"
                        width="150"
                        alt="logo"
                      ></img>
                    </a>
                  </div>
                </div>
                <div className="col-4 col-lg-5">
                  <div className="header-action d-flex justify-content-end">
                    <button
                      className="header-action-item d-none d-md-block"
                      title="Search"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#login-form-popup-actiove"
                    >
                      <i className="icon-rt-user"></i>
                    </button>
                    <a
                      href="wishlist.html"
                      className="header-action-item"
                      title="Wishlist"
                    >
                      <i className="icon-rt-heart2" href="/wishlist"></i>
                      <span className="header-action-item-count">   (3)</span>
                    </a>
                    <button
                      className="header-action-item"
                      title="Cart Bag"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas-cart"
                    >
                      <i className="icon-rt-bag-outline" href="/shopingcart"></i>
                      <span className="header-action-item-count">   (3)</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hader-bottom-area sticky-header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-12">
                  <nav className="nav-main-menu d-none justify-content-center d-lg-flex">
                    <ul className="main-menu">
                      <li className="main-menu-item has-children active">
                        <a href="/" className="main-menu-link">
                          Anasayfa
                        </a>
                      </li>
                      <li className="main-menu-item has-children--mega">
                        <a href="/gidahazirlama" className="main-menu-link">
                          Gıda Hazırlama
                        </a>

                        {/* <div className="megamenu megamenu--mega">
                          <ul className="megamenu--mega-inner">
                            <li className="megamenu-item">
                              <h6 className="megamenu-title">LAYOUT</h6>
                              <ul>
                                <li>
                                  <a href="shop.html" className="megamenu-link">
                                    No Sidebar Grid
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar.html"
                                    className="megamenu-link"
                                  >
                                    Left Sidebar Shop Grid
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-right-sidebar.html" className="megamenu-link"
                                  >
                                    Right Sidebar Shop Grid{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-list-sidebar.html" className="megamenu-link"
                                  >
                                    Right Sidebar Shop List{" "}
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="megamenu-item">
                              <h6 className="megamenu-title">FEATURES</h6>
                              <ul>
                                <li>
                                  <a href="shop-description-on-top.html"
                                    className="megamenu-link">
                                    Show description{" "}
                                    <span className="menu-label">On Top</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-description-on-bottom.html"
                                    className="megamenu-link"
                                  >
                                    Show description{" "}
                                    <span className="menu-label">On Bottom</span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-show-subcategories.html"
                                    className="megamenu-link"
                                  >
                                    Show subcategories{" "}
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-no-sidebar-offcanvas.html"
                                    className="megamenu-link"
                                  >
                                    No Sidebar Off – Canvas
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="megamenu-item">
                              <h6 className="megamenu-title">PRODUCT STYLE</h6>
                              <ul>
                                <li>
                                  <a
                                    href="shop-product-type-01.html"
                                    className="megamenu-link"
                                  >
                                    Product Card Style 1
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-product-type-02.html"
                                    className="megamenu-link"
                                  >
                                    Product Card Style 2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-product-type-03.html"
                                    className="megamenu-link"
                                  >
                                    Product Card Style 3
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-product-type-04.html"
                                    className="megamenu-link"
                                  >
                                    Product Card Style 4
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="megamenu-item">
                              <h6 className="megamenu-title">WOOCOMMERCE</h6>
                              <ul>
                                <li>
                                  <a
                                    href="my-account.html"
                                    className="megamenu-link"
                                  >
                                    My account
                                  </a>
                                </li>
                                <li>
                                  <a href="checkout.html" className="megamenu-link">
                                    Checkout
                                  </a>
                                </li>
                                <li>
                                  <a href="cart.html" className="megamenu-link">
                                    Shopping Cart
                                  </a>
                                </li>
                                <li>
                                  <a href="wishlist.html" className="megamenu-link">
                                    Wishlist
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div> */}
                      </li>
                      <li className="main-menu-item has-children">
                        <a href="/pisirmegrubu" className="main-menu-link">
                          Pişirme Grubu
                        </a>
                        <ul className="megamenu megamenu--mega-lavel-2">
                          <li className="megamenu-item">
                            <h6 className="megamenu-title">PRODUCT GALLERY</h6>
                            <ul>
                              <li>
                                <a
                                  href="product-details.html"
                                  className="megamenu-link"
                                >
                                  Simple Style
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-top-gallay-details.html"
                                  className="megamenu-link"
                                >
                                  Image Top
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-details-grid-1-column.html"
                                  className="megamenu-link"
                                >
                                  Grid - 1 column
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-details-grid-2-column.html"
                                  className="megamenu-link"
                                >
                                  Grid - 2 column
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-details-variation.html"
                                  className="megamenu-link"
                                >
                                  Gallery For Variation
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="megamenu-item">
                            <h6 className="megamenu-title">FEATURES</h6>
                            <ul>
                              <li>
                                <a
                                  href="product-details-variation-vertical-thumbs.html"
                                  className="megamenu-link"
                                >
                                  Vertical Thumbnails
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-details-variable.html"
                                  className="megamenu-link"
                                >
                                  Variable Product
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-details-countdown.html"
                                  className="megamenu-link"
                                >
                                  Countdown Product
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-details-tab-accordion.html"
                                  className="megamenu-link"
                                >
                                  Tab Accordion
                                </a>
                              </li>
                              <li>
                                <a
                                  href="product-details-tab-accordion-vertical.html"
                                  className="megamenu-link"
                                >
                                  Tab Accordion Vertical
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="main-menu-item has-children">
                        <a href="/kahve" className="main-menu-link">
                          Kahve
                        </a>
                        <ul className="megamenu megamenu--mega-lavel-2">
                          <li className="megamenu-item">
                            <h6 className="megamenu-title">WOOCOMMERCE</h6>
                            <ul>
                              <li>
                                <a
                                  href="my-account.html"
                                  className="megamenu-link"
                                >
                                  My account
                                </a>
                              </li>
                              <li>
                                <a
                                  href="checkout.html"
                                  className="megamenu-link"
                                >
                                  Checkout
                                </a>
                              </li>
                              <li>
                                <a href="cart.html" className="megamenu-link">
                                  Shopping Cart
                                </a>
                              </li>
                              <li>
                                <a
                                  href="wishlist.html"
                                  className="megamenu-link"
                                >
                                  Wishlist
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="megamenu-item">
                            <h6 className="megamenu-title">OTHER PAGE</h6>
                            <ul>
                              <li>
                                <a
                                  href="about-us.html"
                                  className="megamenu-link"
                                >
                                  About Us
                                </a>
                              </li>
                              <li>
                                <a
                                  href="contact-us.html"
                                  className="megamenu-link"
                                >
                                  Contact Us
                                </a>
                              </li>
                              <li>
                                <a
                                  href="store-locator.html"
                                  className="megamenu-link"
                                >
                                  Store Locator
                                </a>
                              </li>
                              <li>
                                <a
                                  href="404-page.html"
                                  className="megamenu-link"
                                >
                                  404 Page
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="main-menu-item has-children">
                        <a href="/beyazesya" className="main-menu-link">
                          Beyaz Eşya
                        </a>
                        <ul className="submenu">
                          <li>
                            <a href="blog.html" className="submenu-link">
                              Blog Grid
                            </a>
                          </li>
                          <li>
                            <a href="blog-mask.html" className="submenu-link">
                              Blog Mask
                            </a>
                          </li>
                          <li>
                            <a href="blog-list.html" className="submenu-link">
                              Blog List
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-left-sidebar.html"
                              className="submenu-link"
                            >
                              Blog Left Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-right-sidebar.html"
                              className="submenu-link"
                            >
                              Blog Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-no-sidebar.html"
                              className="submenu-link"
                            >
                              No Sidebar
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-details.html"
                              className="submenu-link"
                            >
                              Blog Post Details
                            </a>
                          </li>
                          <li>
                            <a
                              href="blog-details-two.html"
                              className="submenu-link"
                            >
                              Blog Post Details Two
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <script src="assets/js/modernizr-3.11.7.min.js"></script>
        <script src="assets/js/jquery-3.6.0.min.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>

        <script src="assets/js/swiper-bundle.min.js"></script>
        <script src="assets/js/jquery.validate.min.js"></script>
        <script src="assets/js/ajax.js"></script>

        <script src="assets/js/main.js"></script>
      </>
    );
  }
}
export default Header;
