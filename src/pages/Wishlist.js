import React, { Component } from "react";
import { Link } from "react-router-dom";


class Wishlist extends Component {
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
            <h2 className="mb-2">Wishlist</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="shop.html">shop</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  wishlist
                </li>
              </ol>
            </nav>
          </div>
        </section>

        <section className="wishlist-section section-space-ptb border-bottom-1">
  <div className="container">
    <div className="row">
      <div className="col-lg-10 mx-auto">
        <form className="cart-form" action="#">
          <div className="table-responsive">
            <table className="cart-wishlist-table table align-middle">
              <thead>
                <tr>
                  <th className="remove" />
                  <th className="name" colSpan={2}>Product</th>
                  <th className="price">Price</th>
                  <th className="subtotal">STOCK STATUS</th>
                  <th className="quantity">Add To Cart</th>
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
                  <td className="stock-status"><span>Stock Status</span></td>
                  <td className="quantity">
                    <a href="#" className="btn btn-primary btn-sm">
                      Add To Cart
                    </a>
                  </td>
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
                  <td className="stock-status"><span>Stock Status</span></td>
                  <td className="quantity">
                    <a href="#" className="btn btn-primary btn-sm">
                      Add To Cart
                    </a>
                  </td>
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
                  <td className="stock-status"><span>Stock Status</span></td>
                  <td className="quantity">
                    <a href="#" className="btn btn-primary btn-sm">
                      Add To Cart
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        
      </>
    );
  }
}
export default Wishlist;
