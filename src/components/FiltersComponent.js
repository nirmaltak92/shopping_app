import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { fetchFilters, filterProducts } from '../redux'
import { FilterWrapper, SelectDiv, BrandFilter, ColorFilter, Color, ColorBox } from '../styled/FilterWrapper'

function FiltersComponent({filters, getFilters, products}) {
    const dispatch = useDispatch()
    useEffect(() => {
        getFilters()
        return () => {
            //cleanup
        }
    }, [])
    console.log(filters.color);
    return (
        <FilterWrapper>
            <h2>Filters</h2>
            <div><label>PRICE</label>
            <SelectDiv>
            <select name="min-price-range" id="min-price">            
                <option style={{ display: 'none' }} value="" disabled selected>min</option>
                <option value="0">0</option>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
            </select> to <select name="max-price-range" id="max-price">
                <option style={{ display: 'none' }} value="" disabled selected>max</option>
                <option value="0">0</option>
                <option value="1000">1000</option>
                <option value="5000">5000</option>
                <option value="10000">10000</option>
            </select>
            </SelectDiv>
            </div>            
            <BrandFilter>
            <label>BRAND</label>
            <input type="text" placeholder="Search Brand" onChange={                
                (e)=>dispatch(filterProducts(e.target.value, products, "brand"))}></input>
            </BrandFilter>
            <ColorFilter>
            <label>COLOR</label>            
            {filters.color ? filters.color.map((c,i)=>(
                    <ColorBox key={i}>
                    <input type="checkbox" id={c} name={c} value={c}/>
                    <Color col={c.toLowerCase()}></Color>
                    <label htmlFor={c}>{c}</label>
                    </ColorBox>
                ))
                 : (<div>No color</div>)
            }
            </ColorFilter>            
        </FilterWrapper>
    )
}

function onBrandSearch (query){
    //update the product store to update ui
    return 0;

}

const mapStateToProps = state => {
    return {
        filters : state.filters,
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFilters: () => dispatch(fetchFilters())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FiltersComponent)
