import { FETCH_FILTER_REQUEST,
    FETCH_FILTER_SUCCESS,
    FETCH_FILTER_FAILURE } from './filterType'
import axios from 'axios'

export const fetchFilterRequest = () => {
    return {
        type : FETCH_FILTER_REQUEST
    }
}

export const fetchFilterSuccess = (data) => {
    return {
        type : FETCH_FILTER_SUCCESS,
        payload : data
    }
}

export const fetchFilterFailure = (err) => {
    return {
        type : FETCH_FILTER_FAILURE,
        payload : err
    }
}

//Async Action creator (for which we are using redux-thunk)
export const fetchFilters = () =>{
    return (dispatch) => {
        dispatch(fetchFilterRequest());
        axios.get('http://demo8868903.mockable.io/filters')
        .then(res=>{
            dispatch(fetchFilterSuccess(res.data))
        })
        .catch(err=>{
            dispatch(fetchFilterFailure(err.message))
        })
    }
}
