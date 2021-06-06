import {
  FETCH_FILTER_REQUEST,
  FETCH_FILTER_SUCCESS,
  FETCH_FILTER_FAILURE,
} from "./filterType";

const initialState = {
  loading: false,
  data: [],
  error: "",
  brand: [],
  color: [],
  price: {
    min: 0,
    max: 0,
  },
  ratings: []
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        brand: action.payload.filters.brand,
        color: action.payload.filters.color,
        price: {
          min: action.payload.filters.price.min,
          max: action.payload.filters.price.max,
        },
        ratings: action.payload.filters.ratings
      };
    case FETCH_FILTER_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        brand: [],
        color: [],
        price: {
          min: 0,
          max: 0,
        },
        ratings: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
