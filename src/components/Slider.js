import React, { Component } from "react";
import {Link} from "react-router-dom";
import Swiper from "swiper";


class Slider extends Component {
  componentDidMount() {
    // Initialize Swiper
    new Swiper('.hero-slider-active', {
      slidesPerView: 1, // Number of slides per view
      navigation: {
        nextEl: '.hero-swiper-button-next',
        prevEl: '.hero-swiper-button-prev',
      },
      pagination: {
        el: '.hero-swiper-pagination',
        clickable: true,
      },
    });
  }
  render() {
    return (
      <>
        <section className="hero-area">
          <div className="swiper hero-slider-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="hero-slider-item">
                  <div className="hero-slider-image">
                    <img
                      src="https://static.ticimax.cloud/cdn-cgi/image/width=1519,quality=99/3530/uploads/sayfatasarim/sayfa49/neo-tencere-seti-2500.jpg"
                      alt="Hero Slider One"
                      width={1600}
                      height={717}
                      className="lazyloaded"
                    />
                  </div>
                  <div className="hero-slider-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="hero-slider-content-inner text-start">

                            <a
                              href="/gidahazirlama"
                              className="btn btn-lg btn mt-2 mt-md-5"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hero-slider-item">
                  <div className="hero-slider-image">
                    <img
                      src="https://static.ticimax.cloud/cdn-cgi/image/width=1519,quality=99/3530/uploads/sayfatasarim/sayfa49/sage-kahve-makineleri-9ced.jpg"
                      alt="Hero Slider One"
                      width={1600}
                      height={717}
                      className="lazyloaded"
                    />
                  </div>
                  <div className="hero-slider-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="hero-slider-content-inner text-start">
                            <a
                              href="shop.html"
                              className="btn btn-lg btn-primary mt-2 mt-md-5"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-swiper-button-next swiper-navigation-next">
              <i className="icon-rt-arrow-right" />
            </div>
            <div className="hero-swiper-button-prev swiper-navigation-prev">
              <i className="icon-rt-arrow-left" />
            </div>
            <div className="hero-swiper-pagination swiper-pagination-button text-center position-absolute mb-3" />
          </div>
        </section>
      </>
    );
  }
}

export default Slider;
