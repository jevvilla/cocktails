import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  error: null,
  cocktails: [],
};

const cocktailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_COCKTAILS_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCHING_COCKTAILS_FAILURE:
      return { ...state, isFetching: false, error: action.payload };
    case types.FETCHING_COCKTAILS_SUCCESS:
      return { ...state, isFetching: false, cocktails: action.payload };
    default:
      return state;
  }
};

export default cocktailsReducer;
