import {
  getFilteredIngredients,
  getIngredientsAndMeasurements,
  getFilteredMeasures,
} from '../../src/common/tools';

import {
  drink,
  filteredIngredients,
  filteredMeasures,
  measuresAndIngredients,
} from '../../__mocks__';

describe('getFilteredIngredients', () => {
  test('should return an array of ingredient without any aditional value or falsy value', () => {
    const ingredients = getFilteredIngredients(drink);

    expect(ingredients).toEqual(filteredIngredients);
  });
});

describe('getIngredientsAndMeasurements', () => {
  test('should return an array of measured and ingredient combined without any aditional value or falsy value', () => {
    const measures = getIngredientsAndMeasurements(drink);

    expect(measures).toEqual(measuresAndIngredients);
  });
});

describe('getFilteredMeasures', () => {
  test('should return an array of measured without any aditional value or falsy value', () => {
    const measures = getFilteredMeasures(drink);

    expect(measures).toEqual(filteredMeasures);
  });
});
