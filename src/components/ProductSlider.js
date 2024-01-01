import React, { Component } from "react";

class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    // fetch ile db.json dosyasından veri çekme
    fetch("/path/to/db.json") // db.json dosyanızın yolunu güncelleyin
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data.products });
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }
  render() {
    const { products } = this.state;
    return (
      <>
        <div className="mb-8 position-relative">
          <div className="d-flex justify-content-between border-bottom border-color-1 flex-md-nowrap flex-wrap border-sm-bottom-0">
            <h3 className="section-title section-title__full mb-0 pb-2 font-size-22">
              Trending Products
            </h3>
          </div>
          {/* <div
            className="js-slick-carousel position-static u-slick u-slick--gutters-1 overflow-hidden u-slick-overflow-visble pt-3 pb-3"
            data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
            data-arrow-left-classes="fa fa-angle-left right-1"
            data-arrow-right-classes="fa fa-angle-right right-0"
            data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-4"
          >
            <div className="js-slide">
              <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img1.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Tablets
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Tablet Air 3 WiFi 64GB Gold
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$629,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img2.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Laptops &amp; Computers
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Tablet White EliteBook Revolve 810 G2
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$1 299,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img7.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Headphones
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              White Solo 2 Wireless
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$110,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img3.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Accesories
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Pendrive USB 3.0 Flash 64 GB
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$110,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="js-slide">
              <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img1.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Tablets
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Tablet Air 3 WiFi 64GB Gold
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$629,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img2.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Laptops &amp; Computers
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Tablet White EliteBook Revolve 810 G2
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$1 299,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img7.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Headphones
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              White Solo 2 Wireless
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$110,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img3.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Accesories
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Pendrive USB 3.0 Flash 64 GB
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$110,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="js-slide">
              <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img1.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Tablets
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Tablet Air 3 WiFi 64GB Gold
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$629,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img2.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Laptops &amp; Computers
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Tablet White EliteBook Revolve 810 G2
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$1 299,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card d-none d-md-block pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img7.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Headphones
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              White Solo 2 Wireless
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$110,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 remove-divider">
                  <div className="product-item__outer h-100 w-100">
                    <div className="product-item__inner p-md-3 row no-gutters">
                      <div className="col col-lg-auto product-media-left">
                        <a
                          href="../shop/single-product-fullwidth.html"
                          className="max-width-150 d-block"
                        >
                          <img
                            className="img-fluid"
                            src="../../assets/img/150X140/img3.jpg"
                            alt="Image Description"
                          />
                        </a>
                      </div>
                      <div className="col product-item__body pl-2 pl-lg-3 mr-xl-2 mr-wd-1">
                        <div className="mb-4">
                          <div className="mb-2">
                            <a
                              href="../shop/product-categories-7-column-full-width.html"
                              className="font-size-12 text-gray-5"
                            >
                              Accesories
                            </a>
                          </div>
                          <h5 className="product-item__title">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="text-blue font-weight-bold"
                            >
                              Pendrive USB 3.0 Flash 64 GB
                            </a>
                          </h5>
                        </div>
                        <div className="flex-center-between mb-3">
                          <div className="prodcut-price">
                            <div className="text-gray-100">$110,00</div>
                          </div>
                          <div className="d-none d-xl-block prodcut-add-cart">
                            <a
                              href="../shop/single-product-fullwidth.html"
                              className="btn-add-cart btn-primary transition-3d-hover"
                            >
                              <i className="ec ec-add-to-cart" />
                            </a>
                          </div>
                        </div>
                        <div className="product-item__footer">
                          <div className="border-top pt-2 flex-center-between flex-wrap">
                            <a
                              href="../shop/compare.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-compare mr-1 font-size-15" />{" "}
                              Compare
                            </a>
                            <a
                              href="../shop/wishlist.html"
                              className="text-gray-6 font-size-13"
                            >
                              <i className="ec ec-favorites mr-1 font-size-15" />{" "}
                              Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}

          {products.map((product, index) => (
            <div key={index} className="js-slide">
              <ul className="row list-unstyled products-group no-gutters mb-0 overflow-visible">
                <li className="col-wd-3 col-md-4 product-item product-item__card pb-2 mb-2 pb-md-0 mb-md-0 border-bottom border-md-bottom-0">
                  {/* db.json verilerini kullanarak ürün detaylarını render etme */}
                  {/* ... Mevcut ürün öğesi JSX'iniz ... */}
                  <div className="product-item__title">{product.name}</div>
                  <div className="text-gray-100">{product.price}</div>
                  {/* ... Ek ürün detayları ... */}
                </li>
                {/* Diğer ürünler için benzer bir yapıyı tekrarlayın */}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ProductSlider;
