import React, {Component} from 'react';
import Slider from "../components/Slider";
import BrandSlider from "../components/BrandSlider";
import ProductSlider from "../components/ProductSlider";
// import ProductCard from "../components/ProductCard";


class ProductDetails extends Component{
  

  render() {
    return (
      <>
<section className="breadcrumb-section border-top-1 py-5">
  <div className="container-full px-50">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-start">
        <li className="breadcrumb-item"><a href="#">Home</a></li>
        <li className="breadcrumb-item"><a href="#">Shop</a></li>
        <li className="breadcrumb-item active" aria-current="page">FERMENTUM TURPIS EROS</li>
      </ol>
    </nav>
  </div>
</section>

<section className="product-details-section">
  <div className="container">
    <div className="row  gy-5">
      <div className="col-md-6">
        <div className="swiper product-details-lg-active">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img className="w-full" src="assets/images/products/product-1.jpg" />
            </div>
            <div className="swiper-slide">
              <img className="w-full" src="assets/images/products/product-1-1.jpg" />
            </div>
          </div>
          <div className="product-details-button-next product-details-navigation-next"><i className="icon-rt-arrow-right" /></div>
          <div className="product-details-button-prev product-details-navigation-prev"><i className="icon-rt-arrow-left" /></div>
        </div>
        <div className="swiper product-details-sm-thum-active mt-2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="assets/images/products/product-1.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="assets/images/products/product-1-1.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-item-details-box">
          <h4 className="product-item-details-title">FERMENTUM TURPIS EROS</h4>
          <div className="product-item-details-rating d-flex align-items-center gap-2 text-black">
            <div className="product-item-details-rating-list d-flex">
              <i className="icon-rt-star-solid" />
              <i className="icon-rt-star-solid" />
              <i className="icon-rt-star-solid" />
              <i className="icon-rt-star-solid" />
              <i className="icon-rt-star-solid" />
            </div>
            <a href="#">(1 customer review)</a>
          </div>
          <div className="product-card-price mt-2">
            <span className="product-card-old-price"><del>$60.00</del></span>
            <span className="product-card-regular-price">$50.00</span>
          </div>
          <p className="product-item-details-description mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
          <div className="product-item-stock in-stock mb-3">
            <span className="stock-label visually-hidden">Availability:</span>
            <span className="product-item-stock-in">994 In Stock</span>
          </div>
          <div className="product-item-action-box d-flex gap-2 align-items-center">
            <form action="#" className="product-item-quantity">
              <button className="product-item-quantity-decrement product-item-quantity-button" type="button">-</button>
              <input type="text" className="product-item-quantity-input" defaultValue={1} min={1} max={10} id="qty-input" />
              <button className="product-item-quantity-increment product-item-quantity-button" type="button">+</button>
            </form>
            <button className="btn btn-primary btn-lg">Add to cart</button>
          </div>
          <a href="wishlist.html" className="product-item-wishlist-action mt-3">
            <i className="icon-rt-heart2" /><span>Add to wishlist</span>
          </a>
          <div className="category mt-2">
            <span className="category-label fs-16">CATEGORIES:</span>
            <span className="category-value"><a href="#">Bags</a></span>
            <span className="category-value"><a href="#">Hoodies</a></span>
            <span className="category-value"><a href="#">Jeans</a></span>
            <span className="category-value"><a href="#">New In</a></span>
            <span className="category-value"><a href="#">Shirt</a></span>
          </div>
          <div className="category mt-2">
            <span className="category-label fs-16">TAGS:</span>
            <span className="category-value"><a href="#">Bags</a></span>
            <span className="category-value"><a href="#">Hoodies</a></span>
            <span className="category-value"><a href="#">Jeans</a></span>
            <span className="category-value"><a href="#">Shirt</a></span>
          </div>
          <div className="social-share-wrap d-flex gap-1 mt-3">
            <p className="fs-16">SHARE: </p>
            <div className="social-share social-share-in-color d-flex gap-2">
              <a className="social-share-link facebook" href="https://www.facebook.com/" target="_blank" aria-label="facebook">
                <i className="icon-rt-4-facebook-f" />
              </a>
              <a className="social-share-link twitter" href="https://twitter.com/" target="_blank" aria-label="twitter">
                <i className="icon-rt-logo-twitter" />
              </a>
              <a className="social-share-link instagram" href="https://instagram.com/" target="_blank" aria-label="instagram">
                <i className="icon-rt-logo-instagram" />
              </a>
              <a className="social-share-link pinterest" href="https://www.pinterest.com/" target="_blank" aria-label="pinterest">
                <i className="icon-rt-6-pinterest-p" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="product-info-wrapper section-space-ptb">
  <div className="container">
    <div className="nav product-tab-info justify-content-center" role="tablist">
      <button className="product-tab-info-link active" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab">Description</button>
      <button className="product-tab-info-link" data-bs-toggle="tab" data-bs-target="#nav-additional-information" type="button" role="tab">Additional Information</button>
      <button className="product-tab-info-link" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab">Reviews</button>
    </div>
    <div className="tab-content mt-6">
      <div className="tab-pane fade show active" id="nav-description" role="tabpanel" tabIndex={0}>
        <p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.</p>
        <p className="fs-16">Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.</p>
      </div>
      <div className="tab-pane fade" id="nav-additional-information" role="tabpanel" tabIndex={0}>
        <table className="additional-info-table">
          <tbody>
            <tr className="additional-info-table-tr">
              <th className="additional-info-table-item__label">Color</th>
              <td className="additional-info-table-item__value">
                <p>Other4</p>
              </td>
            </tr>
            <tr className="additional-info-table-tr">
              <th className="additional-info-table-item__label">Size</th>
              <td className="additional-info-table-item__value">
                <p>Small</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tab-pane fade " id="nav-reviews" role="tabpanel" tabIndex={0}>
        <ul className="product-review">
          <li className="product-review-list">
            <div className="product-review-item">
              <div className="product-review-item-avator">
                <img src="assets/images/avatars/author-avatar.jpg" alt="author" />
              </div>
              <div className="product-review-item-content">
                <div className="product-review-item-content-top">
                  <div className="product-item-details-rating-list d-flex">
                    <i className="icon-rt-star-solid" />
                    <i className="icon-rt-star-solid" />
                    <i className="icon-rt-star-solid" />
                    <i className="icon-rt-star-solid" />
                    <i className="icon-rt-star-solid" />
                  </div>
                  <p className="product-review-item-content-meta"><span className="text-black fw-500">Admin</span> - March 14, 2023</p>
                </div>
                <p className="fs-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </li>
        </ul> 
        <div className="product-add-new-comment section-space-pt">
          <h4 className="product-add-new-comment">Add a review</h4>
          <p>Your email address will not be published.</p>
          <div className="comment-form-rating">
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="rating" className="fs-16 fw-6">Your rating</label>
              <div className="product-item-details-rating-list d-flex" id="rating">
                <i className="icon-rt-star-solid" />
                <i className="icon-rt-star-solid" />
                <i className="icon-rt-star-solid" />
                <i className="icon-rt-star-solid" />
                <i className="icon-rt-star-solid" />
              </div>
            </div>
            <div className="comment-form-group">
              <label className="comment-form-label" htmlFor="comment">Your review&nbsp;<span className="required">*</span></label>
              <textarea id="comment" name="comment" required className="comment-form-textarea" defaultValue={""} />
            </div>
            <div className="comment-form-group">
              <label className="comment-form-label" htmlFor="author">Name&nbsp;<span className="required">*</span></label>
              <input className="comment-form-input" id="author" name="author" type="text" required />
            </div>
            <div className="comment-form-group">
              <label className="comment-form-label" htmlFor="email">Email&nbsp;<span className="required">*</span></label>
              <input className="comment-form-input" id="email" name="email" type="email" required />
            </div>
            <div className="comment-form-group">
              <input id="comment-cookies-consent" name="comment-cookies-consent" type="checkbox" defaultValue="yes" />
              <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <div className="comment-form-group">
              <button className="btn btn-primary btn-md">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="product-info-wrapper section-space-ptb">
  <div className="container">
    <div className="nav product-tab-info justify-content-center" role="tablist">
      <button className="product-tab-info-link active" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab">Description</button>
      <button className="product-tab-info-link" data-bs-toggle="tab" data-bs-target="#nav-additional-information" type="button" role="tab">Additional Information</button>
      <button className="product-tab-info-link" data-bs-toggle="tab" data-bs-target="#nav-reviews" type="button" role="tab">Reviews</button>
    </div>
    <div className="tab-content mt-6">
      <div className="tab-pane fade show active" id="nav-description" role="tabpanel" tabIndex={0}>
        <p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla. Donec a neque libero.</p>
        <p className="fs-16">Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.</p>
      </div>
      <div className="tab-pane fade" id="nav-additional-information" role="tabpanel" tabIndex={0}>
        <table className="additional-info-table">
          <tbody>
            <tr className="additional-info-table-tr">
              <th className="additional-info-table-item__label">Color</th>
              <td className="additional-info-table-item__value">
                <p>Other4</p>
              </td>
            </tr>
            <tr className="additional-info-table-tr">
              <th className="additional-info-table-item__label">Size</th>
              <td className="additional-info-table-item__value">
                <p>Small</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tab-pane fade " id="nav-reviews" role="tabpanel" tabIndex={0}>
        <ul className="product-review">
          <li className="product-review-list">
            <div className="product-review-item">
              <div className="product-review-item-avator">
                <img src="assets/images/avatars/author-avatar.jpg" alt="author" />
              </div>
              <div className="product-review-item-content">
                <div className="product-review-item-content-top">
                  <div className="product-item-details-rating-list d-flex">
                    <i className="icon-rt-star-solid" />
                    <i className="icon-rt-star-solid" />
                    <i className="icon-rt-star-solid" />
                    <i className="icon-rt-star-solid" />
                    <i className="icon-rt-star-solid" />
                  </div>
                  <p className="product-review-item-content-meta"><span className="text-black fw-500">Admin</span> - March 14, 2023</p>
                </div>
                <p className="fs-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard
                  dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
            </div>
          </li>
        </ul> 
        <div className="product-add-new-comment section-space-pt">
          <h4 className="product-add-new-comment">Add a review</h4>
          <p>Your email address will not be published.</p>
          <div className="comment-form-rating">
            <div className="d-flex align-items-center gap-2">
              <label htmlFor="rating" className="fs-16 fw-6">Your rating</label>
              <div className="product-item-details-rating-list d-flex" id="rating">
                <i className="icon-rt-star-solid" />
                <i className="icon-rt-star-solid" />
                <i className="icon-rt-star-solid" />
                <i className="icon-rt-star-solid" />
                <i className="icon-rt-star-solid" />
              </div>
            </div>
            <div className="comment-form-group">
              <label className="comment-form-label" htmlFor="comment">Your review&nbsp;<span className="required">*</span></label>
              <textarea id="comment" name="comment" required className="comment-form-textarea" defaultValue={""} />
            </div>
            <div className="comment-form-group">
              <label className="comment-form-label" htmlFor="author">Name&nbsp;<span className="required">*</span></label>
              <input className="comment-form-input" id="author" name="author" type="text" required />
            </div>
            <div className="comment-form-group">
              <label className="comment-form-label" htmlFor="email">Email&nbsp;<span className="required">*</span></label>
              <input className="comment-form-input" id="email" name="email" type="email" required />
            </div>
            <div className="comment-form-group">
              <input id="comment-cookies-consent" name="comment-cookies-consent" type="checkbox" defaultValue="yes" />
              <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <div className="comment-form-group">
              <button className="btn btn-primary btn-md">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="related-products-section section-space-pb border-bottom-1">
  <div className="container">
    <div className="section-title text-center">
      <h2 className="title">Related Products</h2>
    </div>
    <div className="swiper product-slider-active position-relative">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="product-card">
            <div className="product-card-thumb-area">
              <a href="product-details.html" className="product-card-thumb">
                <img className="product-card-thumb-primary" src="assets/images/products/product-10.jpg" alt="Product Image 10" width={340} height={420} />
                <img className="product-card-thumb-secondary" src="assets/images/products/product-10-10.jpg" alt="Product Image 10" width={340} height={420} />
                <span className="product-card-label">Sale</span>
              </a>
              <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
            </div>
            <ul className="product-card-action-links">
              <li className="product-card-action-item">
                <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                  <i className="icon-rt-heart2" />
                </a>
              </li>
            </ul>
            <div className="product-card-content">
              <h4 className="product-card-title">
                <a href="product-details.html">Hendrerit est</a>
              </h4>
              <div className="product-card-price">
                <span className="product-card-regular-price">$37.00</span>
              </div>
              <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
            </div>
          </div> 
        </div>
        <div className="swiper-slide">
          <div className="product-card">
            <div className="product-card-thumb-area">
              <a href="product-details.html" className="product-card-thumb">
                <img className="product-card-thumb-primary" src="assets/images/products/product-9.jpg" alt="Product Image 9" width={340} height={420} />
                <img className="product-card-thumb-secondary" src="assets/images/products/product-9-9.jpg" alt="Product Image 9" width={340} height={420} />
                <span className="product-card-label">Sale</span>
              </a>
              <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
            </div>
            <ul className="product-card-action-links">
              <li className="product-card-action-item">
                <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                  <i className="icon-rt-heart2" />
                </a>
              </li>
            </ul>
            <div className="product-card-content">
              <h4 className="product-card-title">
                <a href="product-details.html">Augue nisi non neque</a>
              </h4>
              <div className="product-card-price">
                <span className="product-card-regular-price">$69.00</span>
              </div>
              <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
            </div>
          </div> 
        </div> 
        <div className="swiper-slide">
          <div className="product-card">
            <div className="product-card-thumb-area">
              <a href="product-details.html" className="product-card-thumb">
                <img className="product-card-thumb-primary" src="assets/images/products/product-7.jpg" alt="Product Image 7" width={340} height={420} />
                <img className="product-card-thumb-secondary" src="assets/images/products/product-7-7.jpg" alt="Product Image 7" width={340} height={420} />
                <span className="product-card-label">Sale</span>
              </a>
              <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
            </div>
            <ul className="product-card-action-links">
              <li className="product-card-action-item">
                <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                  <i className="icon-rt-heart2" />
                </a>
              </li>
            </ul>
            <div className="product-card-content">
              <h4 className="product-card-title">
                <a href="product-details.html">Apien libero hendrerit</a>
              </h4>
              <div className="product-card-price">
                <span className="product-card-old-price"><del>$80.00</del></span>
                <span className="product-card-regular-price">$72.00</span>
              </div>
              <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
            </div>
          </div> 
        </div> 
        <div className="swiper-slide">
          <div className="product-card">
            <div className="product-card-thumb-area">
              <a href="product-details.html" className="product-card-thumb">
                <img className="product-card-thumb-primary" src="assets/images/products/product-5.jpg" alt="Product Image 5" width={340} height={420} />
                <img className="product-card-thumb-secondary" src="assets/images/products/product-5-5.jpg" alt="Product Image 5" width={340} height={420} />
                <span className="product-card-label">Sale</span>
              </a>
              <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
            </div>
            <ul className="product-card-action-links">
              <li className="product-card-action-item">
                <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                  <i className="icon-rt-heart2" />
                </a>
              </li>
            </ul>
            <div className="product-card-content">
              <h4 className="product-card-title">
                <a href="product-details.html">Fermentum turpis eros</a>
              </h4>
              <div className="product-card-price">
                <span className="product-card-old-price"><del>$77.00</del></span>
                <span className="product-card-regular-price">$57.00</span>
              </div>
              <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
            </div>
          </div> 
        </div> 
        <div className="swiper-slide">
          <div className="product-card">
            <div className="product-card-thumb-area">
              <a href="product-details.html" className="product-card-thumb">
                <img className="product-card-thumb-primary" src="assets/images/products/product-2.jpg" alt="Product Image 2" width={340} height={420} />
                <img className="product-card-thumb-secondary" src="assets/images/products/product-2-2.jpg" alt="Product Image 2" width={340} height={420} />
                <span className="product-card-label">Sale</span>
              </a>
              <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
            </div>
            <ul className="product-card-action-links">
              <li className="product-card-action-item">
                <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                  <i className="icon-rt-heart2" />
                </a>
              </li>
            </ul>
            <div className="product-card-content">
              <h4 className="product-card-title">
                <a href="product-details.html">Hendrerit est</a>
              </h4>
              <div className="product-card-price">
                <span className="product-card-old-price"><del>$64.00</del></span>
                <span className="product-card-regular-price">$25.00</span>
              </div>
              <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
            </div>
          </div> 
        </div> 
        <div className="swiper-slide">
          <div className="product-card">
            <div className="product-card-thumb-area">
              <a href="product-details.html" className="product-card-thumb">
                <img className="product-card-thumb-primary" src="assets/images/products/product-1.jpg" alt="Product Image 01" width={340} height={420} />
                <img className="product-card-thumb-secondary" src="assets/images/products/product-1-1.jpg" alt="Product Image 01" width={340} height={420} />
                <span className="product-card-label">Sale</span>
              </a>
              <button className="product-card-action-quickview" data-bs-target="#product-modal-active" data-bs-toggle="modal">Quick View</button>
            </div>
            <ul className="product-card-action-links">
              <li className="product-card-action-item">
                <a href="wishlist.html" className="product-card-action-link" aria-label="wishlist">
                  <i className="icon-rt-heart2" />
                </a>
              </li>
            </ul>
            <div className="product-card-content">
              <h4 className="product-card-title">
                <a href="product-details.html">Donec eu libero ac</a>
              </h4>
              <div className="product-card-price">
                <span className="product-card-regular-price">$30.00</span>
              </div>
              <a href="product-details.html" className="product-card-box-cart">Add to Cart</a>
            </div>
          </div> 
        </div> 
      </div>
      <div className="product-swiper-button-next swiper-navigation-next"><i className="icon-rt-arrow-right" /></div>
      <div className="product-swiper-button-prev swiper-navigation-prev"><i className="icon-rt-arrow-left" /></div>
    </div>
  </div>
</section>


      </>
    )
  }
}
export default ProductDetails;