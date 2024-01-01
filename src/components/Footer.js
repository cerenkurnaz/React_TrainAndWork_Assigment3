import React, {Component} from 'react';


class Footer extends Component {
    render() {
        return (
            <>
            <footer className="footer-area">
    <div className="footer-top-area section-space-pt">
      <div className="container-xxl">
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-8">
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-3">
              <div className="col">
                <div className="footer-widget">
                  <h4 className="footer-widget--title" title="Company">Company</h4>
                  <ul className="widget--menu">
                    <li className="widget--menu-item"><a href="wishlist.html" className="widget--menu-link">Wishlist</a></li>
                    <li className="widget--menu-item"><a href="contact-us.html" className="widget--menu-link">Contact us</a></li>
                    <li className="widget--menu-item"><a href="my-account.html" className="widget--menu-link">My account</a></li>
                    <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">Privacy Policy</a></li>
                    <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">About us</a></li>
                  </ul>
                </div> 
              </div>
              <div className="col">
                <div className="footer-widget">
                  <h4 className="footer-widget--title" title="Information">Information</h4>
                  <ul className="widget--menu">
                    <li className="widget--menu-item"><a href="checkout.html" className="widget--menu-link">Privacy Policy</a></li>
                    <li className="widget--menu-item"><a href="checkout.html" className="widget--menu-link">Checkout</a></li>
                    <li className="widget--menu-item"><a href="contact-us.html" className="widget--menu-link">Contact us</a></li>
                    <li className="widget--menu-item"><a href="my-account.html" className="widget--menu-link">My account</a></li>
                    <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">About us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="footer-widget">
                  <h4 className="footer-widget--title" title="Help">Help</h4>
                  <ul className="widget--menu">
                    <li className="widget--menu-item"><a href="wishlist.html" className="widget--menu-link">Wishlist</a></li>
                    <li className="widget--menu-item"><a href="contact-us.html" className="widget--menu-link">Contact us</a></li>
                    <li className="widget--menu-item"><a href="my-account.html" className="widget--menu-link">My account</a></li>
                    <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">Privacy Policy</a></li>
                    <li className="widget--menu-item"><a href="about-us.html" className="widget--menu-link">About us</a></li>
                  </ul>
                </div> 
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-4">
            <div className="footer-widget">
              <h4 className="footer-widget--title" title="Sign Up Now & Get 10% Off">Sign Up Now &amp; Get 10% Off</h4>
              <div className="widget-newsletter">
                <p className="fs-16 mb-3">Be the first to hear about special offers, new arrivals &amp; more.</p>
                <form action="#" className="widget-newsletter-from mb-4">
                  <input type="text" className="widget-newsletter-input" placeholder="Enter your email address" />
                  <button className="btn btn-primary btn-lg widget-newsletter-button" type="submit">Subscribe</button>
                </form>
                <p className="mb-0">Send me news and offers from the HasThemes. I can unsubscribe at any time.</p>
                <p>I have read the HasThemes <a href="#" className="text-black fw-medium text-decoration-underline" target="_blank">Privacy Policy</a>. Offer details, financial incentives and exclusions available here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom bg-dark py-3">
      <div className="container-xxl">
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
          <p className="text-white mb-md-0">Copyright © <a href="https://hasthemes.com/" target="_blank">HasThemes</a>. All Rights Reserved.</p>
          <div className="payment">
            <img src="assets/images/others/payment.png" width={286} height={23} alt="payment image" />
          </div>
        </div>
      </div>
    </div>
  </footer>
  
            </>
        );
    }
}


export default Footer;