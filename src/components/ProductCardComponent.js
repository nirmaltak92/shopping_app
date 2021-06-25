import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../redux";
//Styled
import {  ProductWrapper, 
          ProductSection,
          PImage, PTitle,
          PRating, PPrice } from '../styled/ProductWrapper'

function ProductCardComponent(props) {
  useEffect(() => {
    props.callProducts();
    return () => {
      //cleanup
    };
  }, []);
  console.log(props.products);
  return (
    <ProductWrapper>
      {props.products.loading ? (
        <h1>loading...</h1>
      ) : props.products.error 
          ? ( <h1>{props.products.error}</h1> ) 
          : props.products?.products?.map((p,i)=>(
            <ProductSection key={i}>
              <div>
              <PImage src={p.image} alt="img" width="250" height="400"/>
              </div>
              <PTitle>{p.title}</PTitle>
              <PRating>{p.rating}</PRating>
              <PPrice>{p.price}</PPrice>
            </ProductSection>
          ))
    }</ProductWrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    products:
      state.products.filter.length !== 0 || state.products.filtering
        ? state.products.filter
        : state.products.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    callProducts: (query) => dispatch(getProducts(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardComponent);
