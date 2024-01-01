import React, { Component } from "react";
import alertify from "alertifyjs";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import db from './db.json';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Wishlist from "./pages/Wishlist";
import ShopingCart from "./pages/ShopingCart";
import ProductDetails from "./pages/ProductDetails";
import GidaHazirlama from "./pages/GidaHazirlama";
import PisirmeGrubu from "./pages/PisirmeGrubu";
import Kahve from "./pages/Kahve";
import BeyazEsya from "./pages/BeyazEsya";

export default class App extends Component {
  state = {
    products: [],
    categories: [],
    wishlist: [],
    orders: [],
    brands: [],
    users: [],
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryid=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ products: data, originalProducts: data })
      );
  };

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((categories) => this.setState({ categories }));
  };

  componentDidMount() {
    this.getProducts();
    this.getCategories();
    this.filterProducts();
    this.getOrders();
    this.setState({ originalProducts: [] });
  }

  filterProducts = (status) => {
    if (!this.state.originalProducts) {
      return;
    }

    let products;
    if (status === "all") {
      this.setState({ products: this.state.originalProducts });
    } else {
      products = this.state.originalProducts.filter(
        (item) => item.status[status] === true
      );
      this.setState({ products: products });
    }
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.title + " added to cart!");
  };

  removeToCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.title + " removed from cart!");
  };

  addToWishlist = (product) => {
    let newWishlist = this.state.wishlist;
    var addedItem = newWishlist.find((c) => c.product.id === product.id);
    if (!addedItem) {
      newWishlist.push({ product: product });
    }
    this.setState({ wishlist: newWishlist });
    alertify.success(product.title + " added to wishlist!");
  };

  removeToWishlist = (product) => {
    let newWishlist = this.state.wishlist.filter(
      (c) => c.product.id !== product.id
    );
    this.setState({ wishlist: newWishlist });
    alertify.error(product.title + " removed from wishlist!");
  };

  searchProduct = (searchKey) => {
    if (searchKey === "") {
      this.getProducts();
    }
    let filteredProducts = this.state.products.filter((product) => {
      return product.title.toLowerCase().includes(searchKey.toLowerCase());
    });
    this.setState({ products: filteredProducts });
  };

  getProductsBySlugs = (slug) => {
    return this.state.products.find((item) => item.slug === slug);
  };

  clearCart = () => {
    this.setState({ cart: [] });
  };

  getOrders = () => {
    fetch("http://localhost:3000/orders")
      .then((response) => response.json())
      .then((orders) => this.setState({ orders }));
  };

  getProductBySlug = (slug) => {
    return this.state.products.find((product) => product.slug === slug);
  };

  render() {
    return (
      <>
        <Header
          cart={this.state.cart}
          removeToCart={this.removeToCart}
          wishlist={this.state.wishlist}
          removeToWishlist={this.removeToWishlist}
          categories={this.state.categories}
        />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shopingcart" element={<ShopingCart />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/gidahazirlama" element={<GidaHazirlama />} />
          <Route path="/pisirmegrubu" element={<PisirmeGrubu />} />
          <Route path="/kahve" element={<Kahve />} />
          <Route path="/beyazesya" element={<BeyazEsya />} />
        </Routes>
        <Footer />
      </>
    );
  }
}
