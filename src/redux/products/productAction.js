import { GET_PRODUCT_REQUEST, 
        GET_PRODUCT_SUCCESS,
        GET_PRODUCT_FAILURE,
        FILTER_PRODUCT } from './productType'
import axios from 'axios'

export const getProductRequest = (query) => {
    return {
        type : GET_PRODUCT_REQUEST,
        payload : query
    }
}

export const getProductSuccess = (data) => {
    return {
        type : GET_PRODUCT_SUCCESS,
        payload : data
    }
}

export const getProductFailure = (error) => {
    return {
        type : GET_PRODUCT_FAILURE,
        payload : error
    }
}

export const filterProducts = (qry, data, filter) => {
    return {
      type: FILTER_PRODUCT,
      filter: filter,
      payload: data,
      query: qry,
    };
}

//Async Action creator (for which we are using redux-thunk)
export const getProducts = () =>{
    return (dispatch) => {
        dispatch(getProductRequest());
        axios.get('http://demo8868903.mockable.io/products')
        .then(res=>{
            dispatch(getProductSuccess(res.data))
        })
        .catch(err=>{
            dispatch(getProductFailure(err.message))
        })
    }
}