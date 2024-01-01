import React, { Component } from "react";

class BrandSlider extends Component {
  render() {
    return (
      <>
        <section className="patner-brand-section section-space-ptb border-top-1 border-bottom-1">
          <div className="container">
            <h2 className="visually-hidden">Patner Brand Section</h2>
            <div className="swiper patner-brand-slider-active">
              <div className="swiper-wrapper">
                <div className="swiper-slide" height={500} width={0}>
                  <a href="#" className="single-patner-brand">
                    <img
                      src="https://static.ticimax.cloud/cdn-cgi/image/width=337,quality=99/3530/uploads/sayfatasarim/sayfa49/wmf-3c54ae57-b.jpg"
                      width={300}
                      height={500}
                      alt="Brand 01"
                      className="lazyloaded"
                    />
                  </a>
                </div>
                <div className="swiper-slide" height={500} width={0}>
                  <a href="#" className="single-patner-brand">
                    <img
                      src="https://static.ticimax.cloud/cdn-cgi/image/width=337,quality=99/3530/uploads/sayfatasarim/sayfa49/sage-bd35bfb4-7.jpg"
                      width={300}
                      height={500}
                      alt="Brand 01"
                      className="lazyloaded"  
                    />
                  </a>
                </div>
                <div className="swiper-slide" height={500} width={0}>
                  <a href="#" className="single-patner-brand">
                    <img
                      src="https://static.ticimax.cloud/cdn-cgi/image/width=337,quality=99/3530/uploads/sayfatasarim/sayfa49/jura-9e8704ca-a.jpg"
                      width={300}
                      height={500}
                      alt="Brand 01"
                      className="lazyloaded"
                    />
                  </a>
                </div>
            
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default BrandSlider;
