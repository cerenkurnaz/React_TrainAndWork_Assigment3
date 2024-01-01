import React, { Component } from "react";
import Slider from "../components/Slider";
import BrandSlider from "../components/BrandSlider";
import ProductSlider from "../components/ProductSlider";
// import ProductCard from "../components/ProductCard";

class ShopingCart extends Component {
  render() {
    return (
      <>
        <section className="breadcrumb-section">
          <div className="breadcrumb-image">
            <img
              src="https://static.ticimax.cloud/cdn-cgi/image/width=1440,quality=99/3530/uploads/sayfatasarim/sayfa38/elite-firsatlarini-hemen-kesfet-fbc7.jpg"
              alt="breadcrumb bg"
              width={1920}
              height={292}
            />
          </div>
          <div className="breadcrumb-content text-center">
            <h2 className="mb-2">Shoping Cart</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="shop.html">shop</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Cart
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="cart-page-section section-space-ptb border-bottom-1">
  <div className="container">
    <div className="row gy-8">
      <div className="col-lg-8">
        <form className="cart-form" action="#">
          <div className="table-responsive">
            <table className="cart-wishlist-table table align-middle">
              <thead>
                <tr>
                  <th className="remove" />
                  <th className="name" colSpan={2}>Product</th>
                  <th className="price">Price</th>
                  <th className="quantity">Quantity</th>
                  <th className="subtotal">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="remove"><a href="#" className="remove-btn">×</a></td>
                  <td className="thumbnail">
                    <a href="product-details.html">
                      <img src="assets/images/products/product-1.jpg" alt="cart-product-1" width={100} height={100} loading="lazy" />
                    </a>
                  </td>
                  <td className="name"> <a href="product-details.html">Aliquam lobortis</a></td>
                  <td className="price"><span>$100.00</span></td>
                  <td className="quantity">
                    <div className="product-item-quantity">
                      <button className="product-item-quantity-decrement product-item-quantity-button" type="button">-</button>
                      <input type="text" className="product-item-quantity-input" defaultValue={1} min={1} max={10} />
                      <button className="product-item-quantity-increment product-item-quantity-button" type="button">+</button>
                    </div>
                  </td>
                  <td className="subtotal"><span>$100.00</span></td>
                </tr>
                <tr>
                  <td className="remove"><a href="#" className="remove-btn">×</a></td>
                  <td className="thumbnail">
                    <a href="product-details.html">
                      <img src="assets/images/products/product-2.jpg" alt="cart-product-1" width={100} height={100} loading="lazy" />
                    </a>
                  </td>
                  <td className="name"> <a href="product-details.html">Consequuntur magni</a></td>
                  <td className="price"><span>$35.00</span></td>
                  <td className="quantity">
                    <div className="product-item-quantity">
                      <button className="product-item-quantity-decrement product-item-quantity-button" type="button">-</button>
                      <input type="text" className="product-item-quantity-input" defaultValue={1} min={1} max={10} />
                      <button className="product-item-quantity-increment product-item-quantity-button" type="button">+</button>
                    </div>
                  </td>
                  <td className="subtotal"><span>$35.00</span></td>
                </tr>
                <tr>
                  <td className="remove"><a href="#" className="remove-btn">×</a></td>
                  <td className="thumbnail">
                    <a href="product-details.html">
                      <img src="assets/images/products/product-3.jpg" alt="cart-product-1" width={100} height={100} loading="lazy" />
                    </a>
                  </td>
                  <td className="name"> <a href="product-details.html">Condimentum posuere</a></td>
                  <td className="price"><span>$9.00</span></td>
                  <td className="quantity">
                    <div className="product-item-quantity">
                      <button className="product-item-quantity-decrement product-item-quantity-button" type="button">-</button>
                      <input type="text" className="product-item-quantity-input" defaultValue={1} min={1} max={10} />
                      <button className="product-item-quantity-increment product-item-quantity-button" type="button">+</button>
                    </div>
                  </td>
                  <td className="subtotal"><span>$9.00</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row justify-content-between mt-3">
            <div className="col-auto mb-3">
              <div className="cart-coupon">
                <input type="text" placeholder="Coupon Code" />
                <button className="btn btn-primary btn-sm">Apply coupon</button>
              </div>
            </div>
            <div className="col-auto">
              <a className="btn btn-light me-3 mb-3" href="shop.html">Continue Shopping</a>
              <button className="btn btn-dark mb-3">Update Cart</button>
            </div>
          </div>
        </form>
      </div>
      <div className="col-lg-4">
        <div className="cart_totals table-responsive">
          <h3 className="text-center mb-5">Cart Totals</h3>
          <table className="cart-totals-table table align-middle">
            <tbody>
              <tr className="cart-subtotal">
                <th>Cart Subtotal</th>
                <td><span className="amount">£215.00</span></td>
              </tr>
              <tr className="shipping">
                <th>Shipping</th>
                <td>
                  <ul className="text-end">
                    <li className="d-flex gap-2 align-items-center justify-content-end">
                      <input id="flat-rate" className="checkout-form-radio" type="radio" name="shipping-type" />
                      <label className="checkout-form-label mb-0" htmlFor="flat-rate">
                        Flat Rate
                      </label>
                    </li>
                    <li className="d-flex gap-2 align-items-center  justify-content-end">
                      <input id="free-shipping" className="checkout-form-radio" type="radio" name="shipping-type" />
                      <label className="checkout-form-label mb-0" htmlFor="free-shipping">Free Shipping</label>
                    </li>
                    <li className="d-flex gap-2 align-items-center  justify-content-end">
                      <input id="local-pickup" className="checkout-form-radio" type="radio" name="shipping-type" />
                      <label className="checkout-form-label mb-0" htmlFor="local-pickup">Local Pickup</label>
                    </li>
                    <p>Shipping to NY,<strong> United Kingdom (UK)</strong>.</p>
                  </ul>
                </td>
              </tr>
              <tr className="order-total">
                <th className="order-total-title">Order Total</th>
                <td className="order-total-amount"><strong><span className="amount">£215.00</span></strong></td>
              </tr>
            </tbody>
          </table>
          <div className="button-area mt-5">
            <a className="btn btn-dark btn-lg btn-full" href="checkout.html">Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      </>
    );
  }
}
export default ShopingCart;
