import {
  FETCH_FILTER_REQUEST,
  FETCH_FILTER_SUCCESS,
  FETCH_FILTER_FAILURE,
} from "./filterType";

const initialState = {
  loading: false,
  data: []
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
      };
    case FETCH_FILTER_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],        
        error: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
