import React, { useEffect } from "react";
import Select from "react-select";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchFilters, filterProducts } from "../redux";
import {
  FilterWrapper,
  SelectDiv,
  BrandFilter,
  ColorFilter,
  Color,
  ColorBox,
} from "../styled/FilterWrapper";

function FiltersComponent({ filters, getFilters, products }) {
    const priceRange = [
    { 
      label: "0",
      value: 0,
    },
    {
      label: "1000",
      value: 1000,
    },
    {
      label: "5000",
      value: 5000,
    },
    {
      label: "10000 ",
      value: 10000,
    },
  ];
  const price = {
    min: filters?.filters?.price ? filters.filters.price.min : 0,
    max: filters?.filters?.price ? filters.filters.price.max : 9000,
  }; 
  const dispatch = useDispatch();
  useEffect(() => {
    getFilters();
    return () => {
      //cleanup
    };
  }, []);
  //console.log(filters.color);
  const onPriceChange = (e, info) => {
    if(info === "min"){
     price.min = e.value;
    } else {
     price.max = e.value;
    }; 
     
    dispatch(filterProducts(price, products, "price"));
  };
  return (
    <FilterWrapper>
      <h2>Filters</h2>
      <div>
        <label>PRICE</label>
        <SelectDiv>
          <Select
            options={priceRange}
            placeholder="Min"
            onChange={(e, info) => onPriceChange(e, "min")}
          ></Select>
          to
          <Select
            options={priceRange}
            placeholder="Max"
            onChange={(e, info) => onPriceChange(e, "max")}
          ></Select>
        </SelectDiv>
      </div>
      <BrandFilter>
        <label>BRAND</label>
        <input
          type="text"
          placeholder="Search Brand"
          onChange={(e) =>
            dispatch(filterProducts(e.target.value, products, "brand"))
          }
        ></input>
      </BrandFilter>
      <ColorFilter>
        <label>COLOR</label>
        {filters?.filters?.color ? (
          filters.filters.color.map((c, i) => (
            <ColorBox key={i}>
              <input type="checkbox" id={c} name={c} value={c} />
              <Color col={c.toLowerCase()}></Color>
              <label htmlFor={c}>{c}</label>
            </ColorBox>
          ))
        ) : (
          <div>No color</div>
        )}
      </ColorFilter>
    </FilterWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters.data,
    products: state.products.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilters: () => dispatch(fetchFilters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersComponent);
