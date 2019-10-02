import * as types from './types';
import { BASE_URL } from '../common/constants';

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
      const response = await fetch(`${BASE_URL}filter.php?g=Cocktail_glass`);
      const json = await response.json();
      const cocktails = await fetchCocktailsDetails(json);
      dispatch(fetchingCocktailsSuccess(cocktails));
    } catch (error) {
      dispatch(fetchingCocktailsFailure(error));
    }
  };
};

const fetchCocktailsDetails = async cocktails => {
  const drinks = await Promise.all(
    cocktails.drinks.map(async cocktail => {
      try {
        const detail = await fetchDetails(cocktail.idDrink);
        cocktail.details = detail.drinks;
        return cocktail;
      } catch (error) {
        return [];
      }
    }),
  );

  return { drinks };
};

const fetchDetails = async idDrink => {
  try {
    const response = await fetch(`${BASE_URL}lookup.php?i=${idDrink}`);
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
};
