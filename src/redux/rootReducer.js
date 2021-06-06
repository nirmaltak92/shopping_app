import { combineReducers } from 'redux'
import productReducer from './products/productReducer'
import filterReducer from './filters/filterReducer'

const rootReducer = combineReducers({
    filters : filterReducer,
    products : productReducer
})

export default rootReducer