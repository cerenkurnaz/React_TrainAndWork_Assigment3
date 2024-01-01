import React, {Component} from 'react';
import Slider from "../components/Slider";
import BrandSlider from "../components/BrandSlider";
import ProductSlider from "../components/ProductSlider";
// import ProductCard from "../components/ProductCard";


class Main extends Component{
  

  render() {
    return (
      <>
        <Slider/>
        <BrandSlider/>
        <ProductSlider/>

      </>
    )
  }
}
export default Main;
