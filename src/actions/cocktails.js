import * as types from './types';

export const fetchingCocktailsRequest = () => ({ type: types.FETCHING_COCKTAILS_REQUEST });

export const fetchingCocktailsFailure = error => ({
  type: types.FETCHING_COCKTAILS_FAILURE,
  payload: error,
});

export const fetchingCocktailsSuccess = cocktails => ({
  type: types.FETCHING_COCKTAILS_SUCCESS,
  payload: cocktails,
});

export const fetchCocktails = () => {
  return async dispatch => {
    dispatch(fetchingCocktailsRequest());
    try {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass',
      );
      const cocktails = await response.json();
      dispatch(fetchingCocktailsSuccess(cocktails));
    } catch (error) {
      dispatch(fetchingCocktailsFailure(error));
    }
  };
};
