import { GET_PRODUCT_REQUEST,
        GET_PRODUCT_SUCCESS,
        GET_PRODUCT_FAILURE,
        FILTER_PRODUCT } from './productType'

const initialState = {
    loading : false,
    filter : "",
    data : [],
    error : ""
}

const productReducer = (state = initialState, action) => {
    switch (action.type){
    case GET_PRODUCT_REQUEST: return{
            ...state,
            loading : true
        }
    case GET_PRODUCT_SUCCESS: return{
            ...state,
            loading : false,
            data : action.payload,
            noFilteredData : action.payload,
            error: ""
        }
    case GET_PRODUCT_FAILURE: return{
            ...state,
            loading : false,
            data : [],
            noFilteredData : [],
            error: action.payload
    }    
    case FILTER_PRODUCT: 
        let filteredArray = [];
        switch (action.filter){
            case "brand" : {
            filteredArray = { products : action.payload.noFilteredData.products.filter(br => br.brand === action.query)};
            break;
            } 
            case "color" : {
            filteredArray = { products : action.payload.noFilteredData.products.filter(br => br.color === action.query)};
            break;
            }
            default: filteredArray = [];
        }
        return{
        ...state,
        loading : false, 
        data : filteredArray.products.length === 0  ? JSON.parse(JSON.stringify(action.payload.noFilteredData)) : action.payload.data.products = filteredArray,
        error: ""
    }    
    default : return state
    }
}

export default productReducer