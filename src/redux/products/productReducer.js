import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  FILTER_PRODUCT,
} from "./productType";

const initialState = {
  loading: false,
  filtering: false,
  filter: [],
  data: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case FILTER_PRODUCT:
      let filteredArray = [];
      switch (action.filter) {
        case "brand": {
          filteredArray = {
            products: action.payload.products.filter(
              (br) => br.brand === action.query
            ),
          };
          break;
        }
        case "color": {
          filteredArray = {
            products: action.payload.products.filter(
              (br) => br.color === action.query
            ),
          };
          break;
        }
        case "price": {
          filteredArray = {
            products: action.payload.products.filter(
              (br) =>
                br.price >= action.query.min && br.price <= action.query.max
            ),
          };
          break;
        }
        default:
          filteredArray = [];
      }
      return {
        ...state,
        loading: false,
        filtering : true,
        filter:
          !filteredArray || filteredArray.products.length === 0
            ? []
            : filteredArray,
        error: "",
      };
    default:
      return state;
  }
};

export default productReducer;
